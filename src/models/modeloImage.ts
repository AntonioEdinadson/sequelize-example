import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { modeloImageStatus, modeloImageStatusId } from './modeloImageStatus';

export interface modeloImageAttributes {
  id: number;
  idImage: number;
  modelo?: string;
  systemVersion?: string;
  directory?: string;
}

export type modeloImagePk = "id";
export type modeloImageId = modeloImage[modeloImagePk];
export type modeloImageOptionalAttributes = "id" | "modelo" | "systemVersion" | "directory";
export type modeloImageCreationAttributes = Optional<modeloImageAttributes, modeloImageOptionalAttributes>;

export class modeloImage extends Model<modeloImageAttributes, modeloImageCreationAttributes> implements modeloImageAttributes {
  id!: number;
  idImage!: number;
  modelo?: string;
  systemVersion?: string;
  directory?: string;

  // modeloImage belongsTo modeloImageStatus via idImage
  idImage_modeloImageStatus!: modeloImageStatus;
  getIdImage_modeloImageStatus!: Sequelize.BelongsToGetAssociationMixin<modeloImageStatus>;
  setIdImage_modeloImageStatus!: Sequelize.BelongsToSetAssociationMixin<modeloImageStatus, modeloImageStatusId>;
  createIdImage_modeloImageStatus!: Sequelize.BelongsToCreateAssociationMixin<modeloImageStatus>;

  static initModel(sequelize: Sequelize.Sequelize): typeof modeloImage {
    return modeloImage.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idImage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'modeloImageStatus',
        key: 'id'
      }
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    directory: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloImage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloIm__3213E83F84992196",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

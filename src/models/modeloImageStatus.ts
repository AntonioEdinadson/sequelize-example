import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { modeloImage, modeloImageId } from './modeloImage';

export interface modeloImageStatusAttributes {
  id: number;
  operationalSystem?: string;
  operationalSystemVersion?: string;
  recovery?: string;
  language?: string;
  buildVersion?: string;
  fileName?: string;
  fileDate: Date;
  observation?: string;
  status?: number;
}

export type modeloImageStatusPk = "id";
export type modeloImageStatusId = modeloImageStatus[modeloImageStatusPk];
export type modeloImageStatusOptionalAttributes = "id" | "operationalSystem" | "operationalSystemVersion" | "recovery" | "language" | "buildVersion" | "fileName" | "observation" | "status";
export type modeloImageStatusCreationAttributes = Optional<modeloImageStatusAttributes, modeloImageStatusOptionalAttributes>;

export class modeloImageStatus extends Model<modeloImageStatusAttributes, modeloImageStatusCreationAttributes> implements modeloImageStatusAttributes {
  id!: number;
  operationalSystem?: string;
  operationalSystemVersion?: string;
  recovery?: string;
  language?: string;
  buildVersion?: string;
  fileName?: string;
  fileDate!: Date;
  observation?: string;
  status?: number;

  // modeloImageStatus hasMany modeloImage via idImage
  modeloImages!: modeloImage[];
  getModeloImages!: Sequelize.HasManyGetAssociationsMixin<modeloImage>;
  setModeloImages!: Sequelize.HasManySetAssociationsMixin<modeloImage, modeloImageId>;
  addModeloImage!: Sequelize.HasManyAddAssociationMixin<modeloImage, modeloImageId>;
  addModeloImages!: Sequelize.HasManyAddAssociationsMixin<modeloImage, modeloImageId>;
  createModeloImage!: Sequelize.HasManyCreateAssociationMixin<modeloImage>;
  removeModeloImage!: Sequelize.HasManyRemoveAssociationMixin<modeloImage, modeloImageId>;
  removeModeloImages!: Sequelize.HasManyRemoveAssociationsMixin<modeloImage, modeloImageId>;
  hasModeloImage!: Sequelize.HasManyHasAssociationMixin<modeloImage, modeloImageId>;
  hasModeloImages!: Sequelize.HasManyHasAssociationsMixin<modeloImage, modeloImageId>;
  countModeloImages!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof modeloImageStatus {
    return modeloImageStatus.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    operationalSystem: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    operationalSystemVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recovery: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    buildVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fileName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    fileDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    observation: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloImageStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloIm__3213E83F28D0A539",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

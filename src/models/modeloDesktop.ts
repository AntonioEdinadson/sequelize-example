import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloDesktopAttributes {
  id: number;
  modelo?: string;
  status?: number;
}

export type modeloDesktopPk = "id";
export type modeloDesktopId = modeloDesktop[modeloDesktopPk];
export type modeloDesktopOptionalAttributes = "id" | "modelo" | "status";
export type modeloDesktopCreationAttributes = Optional<modeloDesktopAttributes, modeloDesktopOptionalAttributes>;

export class modeloDesktop extends Model<modeloDesktopAttributes, modeloDesktopCreationAttributes> implements modeloDesktopAttributes {
  id!: number;
  modelo?: string;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloDesktop {
    return modeloDesktop.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloDesktop',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloDe__3213E83F08A3EEDD",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

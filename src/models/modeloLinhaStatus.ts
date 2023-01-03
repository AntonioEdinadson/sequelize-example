import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloLinhaStatusAttributes {
  id: number;
  IPServer?: string;
  linha?: string;
  modelo?: string;
  systemVersion?: string;
  validateMotherboardSN?: number;
  status?: number;
}

export type modeloLinhaStatusPk = "id";
export type modeloLinhaStatusId = modeloLinhaStatus[modeloLinhaStatusPk];
export type modeloLinhaStatusOptionalAttributes = "id" | "IPServer" | "linha" | "modelo" | "systemVersion" | "validateMotherboardSN" | "status";
export type modeloLinhaStatusCreationAttributes = Optional<modeloLinhaStatusAttributes, modeloLinhaStatusOptionalAttributes>;

export class modeloLinhaStatus extends Model<modeloLinhaStatusAttributes, modeloLinhaStatusCreationAttributes> implements modeloLinhaStatusAttributes {
  id!: number;
  IPServer?: string;
  linha?: string;
  modelo?: string;
  systemVersion?: string;
  validateMotherboardSN?: number;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloLinhaStatus {
    return modeloLinhaStatus.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IPServer: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    linha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    validateMotherboardSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloLinhaStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloLi__3213E83F09FA7BA5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

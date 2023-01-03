import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloMemorySPDStatusAttributes {
  id: number;
  modelo?: string;
  systemVersion?: string;
  memorytype?: string;
  partNumber?: string;
  JEDEC1?: string;
  JEDEC2?: string;
  JEDEC3?: string;
  JEDEC4?: string;
  status?: number;
}

export type modeloMemorySPDStatusPk = "id";
export type modeloMemorySPDStatusId = modeloMemorySPDStatus[modeloMemorySPDStatusPk];
export type modeloMemorySPDStatusOptionalAttributes = "id" | "modelo" | "systemVersion" | "memorytype" | "partNumber" | "JEDEC1" | "JEDEC2" | "JEDEC3" | "JEDEC4" | "status";
export type modeloMemorySPDStatusCreationAttributes = Optional<modeloMemorySPDStatusAttributes, modeloMemorySPDStatusOptionalAttributes>;

export class modeloMemorySPDStatus extends Model<modeloMemorySPDStatusAttributes, modeloMemorySPDStatusCreationAttributes> implements modeloMemorySPDStatusAttributes {
  id!: number;
  modelo?: string;
  systemVersion?: string;
  memorytype?: string;
  partNumber?: string;
  JEDEC1?: string;
  JEDEC2?: string;
  JEDEC3?: string;
  JEDEC4?: string;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloMemorySPDStatus {
    return modeloMemorySPDStatus.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memorytype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    partNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    JEDEC1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JEDEC2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JEDEC3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JEDEC4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloMemorySPDStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloMe__3213E83FC35EC205",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloSystemInfoStatusAttributes {
  id: number;
  modelo?: string;
  systemVersion?: string;
  assetTag?: string;
  biosVersion?: string;
  diskSize?: string;
  memorySize?: string;
  cpuType?: string;
  diskSizeTolerancePercentage?: string;
  status?: number;
}

export type modeloSystemInfoStatusPk = "id";
export type modeloSystemInfoStatusId = modeloSystemInfoStatus[modeloSystemInfoStatusPk];
export type modeloSystemInfoStatusOptionalAttributes = "id" | "modelo" | "systemVersion" | "assetTag" | "biosVersion" | "diskSize" | "memorySize" | "cpuType" | "diskSizeTolerancePercentage" | "status";
export type modeloSystemInfoStatusCreationAttributes = Optional<modeloSystemInfoStatusAttributes, modeloSystemInfoStatusOptionalAttributes>;

export class modeloSystemInfoStatus extends Model<modeloSystemInfoStatusAttributes, modeloSystemInfoStatusCreationAttributes> implements modeloSystemInfoStatusAttributes {
  id!: number;
  modelo?: string;
  systemVersion?: string;
  assetTag?: string;
  biosVersion?: string;
  diskSize?: string;
  memorySize?: string;
  cpuType?: string;
  diskSizeTolerancePercentage?: string;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloSystemInfoStatus {
    return modeloSystemInfoStatus.init({
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
    assetTag: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    biosVersion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diskSize: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memorySize: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cpuType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diskSizeTolerancePercentage: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloSystemInfoStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloSy__3213E83FF201F353",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

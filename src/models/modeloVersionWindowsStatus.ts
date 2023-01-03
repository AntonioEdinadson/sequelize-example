import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloVersionWindowsStatusAttributes {
  id: number;
  data?: Date;
  modelo?: string;
  systemVersion?: string;
  version?: string;
  csup?: string;
  numberPartitionsDisk?: string;
  windows?: string;
  status?: number;
}

export type modeloVersionWindowsStatusPk = "id";
export type modeloVersionWindowsStatusId = modeloVersionWindowsStatus[modeloVersionWindowsStatusPk];
export type modeloVersionWindowsStatusOptionalAttributes = "id" | "data" | "modelo" | "systemVersion" | "version" | "csup" | "numberPartitionsDisk" | "windows" | "status";
export type modeloVersionWindowsStatusCreationAttributes = Optional<modeloVersionWindowsStatusAttributes, modeloVersionWindowsStatusOptionalAttributes>;

export class modeloVersionWindowsStatus extends Model<modeloVersionWindowsStatusAttributes, modeloVersionWindowsStatusCreationAttributes> implements modeloVersionWindowsStatusAttributes {
  id!: number;
  data?: Date;
  modelo?: string;
  systemVersion?: string;
  version?: string;
  csup?: string;
  numberPartitionsDisk?: string;
  windows?: string;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloVersionWindowsStatus {
    return modeloVersionWindowsStatus.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATE,
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
    version: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    csup: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    numberPartitionsDisk: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    windows: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloVersionWindowsStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloVe__3213E83F571BE228",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloSmbiosStatusAttributes {
  id: number;
  modelo?: string;
  systemManufacture?: string;
  systemProduct?: string;
  systemFamily?: string;
  systemVersion?: string;
  baseboardManufacture?: string;
  systemSkuNumber?: string;
  baseboardProduct?: string;
  chassisManufacture?: string;
  status?: number;
}

export type modeloSmbiosStatusPk = "id";
export type modeloSmbiosStatusId = modeloSmbiosStatus[modeloSmbiosStatusPk];
export type modeloSmbiosStatusOptionalAttributes = "id" | "modelo" | "systemManufacture" | "systemProduct" | "systemFamily" | "systemVersion" | "baseboardManufacture" | "systemSkuNumber" | "baseboardProduct" | "chassisManufacture" | "status";
export type modeloSmbiosStatusCreationAttributes = Optional<modeloSmbiosStatusAttributes, modeloSmbiosStatusOptionalAttributes>;

export class modeloSmbiosStatus extends Model<modeloSmbiosStatusAttributes, modeloSmbiosStatusCreationAttributes> implements modeloSmbiosStatusAttributes {
  id!: number;
  modelo?: string;
  systemManufacture?: string;
  systemProduct?: string;
  systemFamily?: string;
  systemVersion?: string;
  baseboardManufacture?: string;
  systemSkuNumber?: string;
  baseboardProduct?: string;
  chassisManufacture?: string;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloSmbiosStatus {
    return modeloSmbiosStatus.init({
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
    systemManufacture: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemProduct: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemFamily: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    baseboardManufacture: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemSkuNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    baseboardProduct: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chassisManufacture: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloSmbiosStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloSm__3213E83FB9184C4E",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

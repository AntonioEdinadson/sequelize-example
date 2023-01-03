import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloResolucaoStatusAttributes {
  id: number;
  modelo?: string;
  systemVersion?: string;
  currentVerticalResolution?: number;
  currentHorizontalResolution?: number;
  equalResolution?: number;
  data?: Date;
  status?: number;
}

export type modeloResolucaoStatusPk = "id";
export type modeloResolucaoStatusId = modeloResolucaoStatus[modeloResolucaoStatusPk];
export type modeloResolucaoStatusOptionalAttributes = "id" | "modelo" | "systemVersion" | "currentVerticalResolution" | "currentHorizontalResolution" | "equalResolution" | "data" | "status";
export type modeloResolucaoStatusCreationAttributes = Optional<modeloResolucaoStatusAttributes, modeloResolucaoStatusOptionalAttributes>;

export class modeloResolucaoStatus extends Model<modeloResolucaoStatusAttributes, modeloResolucaoStatusCreationAttributes> implements modeloResolucaoStatusAttributes {
  id!: number;
  modelo?: string;
  systemVersion?: string;
  currentVerticalResolution?: number;
  currentHorizontalResolution?: number;
  equalResolution?: number;
  data?: Date;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloResolucaoStatus {
    return modeloResolucaoStatus.init({
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
    currentVerticalResolution: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currentHorizontalResolution: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    equalResolution: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloResolucaoStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloRe__3213E83F1E8E2F91",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

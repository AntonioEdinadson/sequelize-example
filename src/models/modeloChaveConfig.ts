import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloChaveConfigAttributes {
  id: number;
  modelo: string;
  ZPC_MODEL_SKU: string;
  ZFRM_FATOR_CL1: string;
  ZFRM_FATOR_CL2: string;
  ZSCREEN_SIZE: string;
  ZTOUCH_SCREEN: string;
  BUSINESSID: string;
  ZPGM_ELIG_VAL?: string;
}

export type modeloChaveConfigPk = "id";
export type modeloChaveConfigId = modeloChaveConfig[modeloChaveConfigPk];
export type modeloChaveConfigOptionalAttributes = "id" | "ZPGM_ELIG_VAL";
export type modeloChaveConfigCreationAttributes = Optional<modeloChaveConfigAttributes, modeloChaveConfigOptionalAttributes>;

export class modeloChaveConfig extends Model<modeloChaveConfigAttributes, modeloChaveConfigCreationAttributes> implements modeloChaveConfigAttributes {
  id!: number;
  modelo!: string;
  ZPC_MODEL_SKU!: string;
  ZFRM_FATOR_CL1!: string;
  ZFRM_FATOR_CL2!: string;
  ZSCREEN_SIZE!: string;
  ZTOUCH_SCREEN!: string;
  BUSINESSID!: string;
  ZPGM_ELIG_VAL?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloChaveConfig {
    return modeloChaveConfig.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ZPC_MODEL_SKU: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ZFRM_FATOR_CL1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ZFRM_FATOR_CL2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ZSCREEN_SIZE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ZTOUCH_SCREEN: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BUSINESSID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ZPGM_ELIG_VAL: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloChaveConfig',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "idx_modelo",
        fields: [
          { name: "modelo" },
        ]
      },
      {
        name: "PK_modeloChaveConfig",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

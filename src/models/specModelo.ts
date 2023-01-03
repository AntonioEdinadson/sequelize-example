import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface specModeloAttributes {
  id: number;
  modelo?: string;
  processador?: number;
  hd?: number;
  emmc?: number;
  ssd?: number;
  rede?: number;
  wifi?: number;
  tela?: number;
  bluetooth?: number;
  nfc?: number;
  touchpad?: number;
  touchscreen?: number;
  usb?: number;
  sd?: number;
  hdmi?: number;
  displayport?: number;
  lan?: number;
  so?: string;
}

export type specModeloPk = "id";
export type specModeloId = specModelo[specModeloPk];
export type specModeloOptionalAttributes = "id" | "modelo" | "processador" | "hd" | "emmc" | "ssd" | "rede" | "wifi" | "tela" | "bluetooth" | "nfc" | "touchpad" | "touchscreen" | "usb" | "sd" | "hdmi" | "displayport" | "lan" | "so";
export type specModeloCreationAttributes = Optional<specModeloAttributes, specModeloOptionalAttributes>;

export class specModelo extends Model<specModeloAttributes, specModeloCreationAttributes> implements specModeloAttributes {
  id!: number;
  modelo?: string;
  processador?: number;
  hd?: number;
  emmc?: number;
  ssd?: number;
  rede?: number;
  wifi?: number;
  tela?: number;
  bluetooth?: number;
  nfc?: number;
  touchpad?: number;
  touchscreen?: number;
  usb?: number;
  sd?: number;
  hdmi?: number;
  displayport?: number;
  lan?: number;
  so?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof specModelo {
    return specModelo.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    modelo: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    processador: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    emmc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ssd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rede: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wifi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tela: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    bluetooth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nfc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    touchpad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    touchscreen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sd: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hdmi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    displayport: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    so: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'specModelo',
    schema: 'dbo',
    timestamps: false
  });
  }
}

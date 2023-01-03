import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface historicoBackupAttributes {
  ns: string;
  idPosto: number;
  data: Date;
  id: number;
  modelo?: string;
  linha?: string;
  msfProductKey: string;
  operador: string;
  create_at?: Date;
}

export type historicoBackupPk = "id";
export type historicoBackupId = historicoBackup[historicoBackupPk];
export type historicoBackupOptionalAttributes = "data" | "id" | "modelo" | "linha" | "create_at";
export type historicoBackupCreationAttributes = Optional<historicoBackupAttributes, historicoBackupOptionalAttributes>;

export class historicoBackup extends Model<historicoBackupAttributes, historicoBackupCreationAttributes> implements historicoBackupAttributes {
  ns!: string;
  idPosto!: number;
  data!: Date;
  id!: number;
  modelo?: string;
  linha?: string;
  msfProductKey!: string;
  operador!: string;
  create_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof historicoBackup {
    return historicoBackup.init({
    ns: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    idPosto: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    linha: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    msfProductKey: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    operador: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'historicoBackup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__historic__3213E83FFB1C4A35",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

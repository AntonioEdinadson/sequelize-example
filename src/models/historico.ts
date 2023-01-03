import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface historicoAttributes {
  ns: string;
  idPosto: number;
  data: Date;
  id: number;
  modelo?: string;
  linha?: string;
}

export type historicoPk = "id";
export type historicoId = historico[historicoPk];
export type historicoOptionalAttributes = "data" | "id" | "modelo" | "linha";
export type historicoCreationAttributes = Optional<historicoAttributes, historicoOptionalAttributes>;

export class historico extends Model<historicoAttributes, historicoCreationAttributes> implements historicoAttributes {
  ns!: string;
  idPosto!: number;
  data!: Date;
  id!: number;
  modelo?: string;
  linha?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof historico {
    return historico.init({
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
    }
  }, {
    sequelize,
    tableName: 'historico',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__historic__3213E83FE21D0E40",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

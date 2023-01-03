import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface historicoEmbalagemAttributes {
  ns: string;
  numerodaOP: string;
  produto: string;
  linha: string;
  dtInclusao: string;
}

export type historicoEmbalagemPk = "ns";
export type historicoEmbalagemId = historicoEmbalagem[historicoEmbalagemPk];
export type historicoEmbalagemCreationAttributes = historicoEmbalagemAttributes;

export class historicoEmbalagem extends Model<historicoEmbalagemAttributes, historicoEmbalagemCreationAttributes> implements historicoEmbalagemAttributes {
  ns!: string;
  numerodaOP!: string;
  produto!: string;
  linha!: string;
  dtInclusao!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof historicoEmbalagem {
    return historicoEmbalagem.init({
    ns: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    numerodaOP: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    produto: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    linha: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dtInclusao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'historicoEmbalagem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__historic__3213D0848702FB58",
        unique: true,
        fields: [
          { name: "ns" },
        ]
      },
    ]
  });
  }
}

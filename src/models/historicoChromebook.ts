import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface historicoChromebookAttributes {
  id: number;
  ns: string;
  modelo?: string;
  projeto?: string;
}

export type historicoChromebookPk = "id";
export type historicoChromebookId = historicoChromebook[historicoChromebookPk];
export type historicoChromebookOptionalAttributes = "id" | "modelo" | "projeto";
export type historicoChromebookCreationAttributes = Optional<historicoChromebookAttributes, historicoChromebookOptionalAttributes>;

export class historicoChromebook extends Model<historicoChromebookAttributes, historicoChromebookCreationAttributes> implements historicoChromebookAttributes {
  id!: number;
  ns!: string;
  modelo?: string;
  projeto?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof historicoChromebook {
    return historicoChromebook.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ns: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    projeto: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'historicoChromebook',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__historic__3213E83F319001D4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface historico_macAttributes {
  id: number;
  ns: string;
  name?: string;
  macaddress?: string;
  data: Date;
}

export type historico_macPk = "id";
export type historico_macId = historico_mac[historico_macPk];
export type historico_macOptionalAttributes = "id" | "name" | "macaddress" | "data";
export type historico_macCreationAttributes = Optional<historico_macAttributes, historico_macOptionalAttributes>;

export class historico_mac extends Model<historico_macAttributes, historico_macCreationAttributes> implements historico_macAttributes {
  id!: number;
  ns!: string;
  name?: string;
  macaddress?: string;
  data!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof historico_mac {
    return historico_mac.init({
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
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    macaddress: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'historico_mac',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__historic__3213E83F787CCE38",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

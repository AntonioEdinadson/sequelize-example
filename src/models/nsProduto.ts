import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface nsProdutoAttributes {
  id: number;
  ns_range_start: number;
  ns_range_end: number;
  data: string;
  cod_produto: string;
}

export type nsProdutoPk = "id";
export type nsProdutoId = nsProduto[nsProdutoPk];
export type nsProdutoOptionalAttributes = "id";
export type nsProdutoCreationAttributes = Optional<nsProdutoAttributes, nsProdutoOptionalAttributes>;

export class nsProduto extends Model<nsProdutoAttributes, nsProdutoCreationAttributes> implements nsProdutoAttributes {
  id!: number;
  ns_range_start!: number;
  ns_range_end!: number;
  data!: string;
  cod_produto!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof nsProduto {
    return nsProduto.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ns_range_start: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ns_range_end: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cod_produto: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nsProduto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_NSProduto",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

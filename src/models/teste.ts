import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface testeAttributes {
  id: number;
  idteste: number;
  descricao: string;
  status: number;
}

export type testePk = "id";
export type testeId = teste[testePk];
export type testeOptionalAttributes = "id";
export type testeCreationAttributes = Optional<testeAttributes, testeOptionalAttributes>;

export class teste extends Model<testeAttributes, testeCreationAttributes> implements testeAttributes {
  id!: number;
  idteste!: number;
  descricao!: string;
  status!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof teste {
    return teste.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    idteste: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'teste',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__teste__3213E83F910B0EE4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface postoAttributes {
  idPosto: number;
  descricao: string;
  status: number;
  id: number;
}

export type postoPk = "id";
export type postoId = posto[postoPk];
export type postoOptionalAttributes = "id";
export type postoCreationAttributes = Optional<postoAttributes, postoOptionalAttributes>;

export class posto extends Model<postoAttributes, postoCreationAttributes> implements postoAttributes {
  idPosto!: number;
  descricao!: string;
  status!: number;
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof posto {
    return posto.init({
    idPosto: {
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
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'posto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__posto__3213E83FE3CD51C2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

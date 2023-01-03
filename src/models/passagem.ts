import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface passagemAttributes {
  id: number;
  ns: string;
  posto: string;
  status: number;
}

export type passagemPk = "ns" | "posto" | "status";
export type passagemId = passagem[passagemPk];
export type passagemOptionalAttributes = "id";
export type passagemCreationAttributes = Optional<passagemAttributes, passagemOptionalAttributes>;

export class passagem extends Model<passagemAttributes, passagemCreationAttributes> implements passagemAttributes {
  id!: number;
  ns!: string;
  posto!: string;
  status!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof passagem {
    return passagem.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    ns: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    posto: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'passagem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_passagem",
        unique: true,
        fields: [
          { name: "ns" },
          { name: "posto" },
          { name: "status" },
        ]
      },
    ]
  });
  }
}

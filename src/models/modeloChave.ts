import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloChaveAttributes {
  id: number;
  modelo: string;
  partnumber: string;
  status: boolean;
}

export type modeloChavePk = "id";
export type modeloChaveId = modeloChave[modeloChavePk];
export type modeloChaveOptionalAttributes = "id";
export type modeloChaveCreationAttributes = Optional<modeloChaveAttributes, modeloChaveOptionalAttributes>;

export class modeloChave extends Model<modeloChaveAttributes, modeloChaveCreationAttributes> implements modeloChaveAttributes {
  id!: number;
  modelo!: string;
  partnumber!: string;
  status!: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloChave {
    return modeloChave.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    partnumber: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'modeloChave',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "idx_modelo",
        fields: [
          { name: "modelo" },
        ]
      },
      {
        name: "PK_modeloChave",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

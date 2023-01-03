import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloRetrabalhoAttributes {
  id: number;
  modelo?: string;
  systemVersion?: string;
  observation?: string;
  status?: number;
}

export type modeloRetrabalhoPk = "id";
export type modeloRetrabalhoId = modeloRetrabalho[modeloRetrabalhoPk];
export type modeloRetrabalhoOptionalAttributes = "id" | "modelo" | "systemVersion" | "observation" | "status";
export type modeloRetrabalhoCreationAttributes = Optional<modeloRetrabalhoAttributes, modeloRetrabalhoOptionalAttributes>;

export class modeloRetrabalho extends Model<modeloRetrabalhoAttributes, modeloRetrabalhoCreationAttributes> implements modeloRetrabalhoAttributes {
  id!: number;
  modelo?: string;
  systemVersion?: string;
  observation?: string;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloRetrabalho {
    return modeloRetrabalho.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    observation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloRetrabalho',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloRe__3213E83F944572AA",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

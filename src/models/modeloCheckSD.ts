import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloCheckSDAttributes {
  id: number;
  modelo?: string;
  status?: boolean;
}

export type modeloCheckSDPk = "id";
export type modeloCheckSDId = modeloCheckSD[modeloCheckSDPk];
export type modeloCheckSDOptionalAttributes = "id" | "modelo" | "status";
export type modeloCheckSDCreationAttributes = Optional<modeloCheckSDAttributes, modeloCheckSDOptionalAttributes>;

export class modeloCheckSD extends Model<modeloCheckSDAttributes, modeloCheckSDCreationAttributes> implements modeloCheckSDAttributes {
  id!: number;
  modelo?: string;
  status?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloCheckSD {
    return modeloCheckSD.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloCheckSD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_modeloCheckSD",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

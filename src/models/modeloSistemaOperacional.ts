import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloSistemaOperacionalAttributes {
  id: number;
  name: string;
  version: string;
  status?: number;
}

export type modeloSistemaOperacionalPk = "id";
export type modeloSistemaOperacionalId = modeloSistemaOperacional[modeloSistemaOperacionalPk];
export type modeloSistemaOperacionalOptionalAttributes = "id" | "status";
export type modeloSistemaOperacionalCreationAttributes = Optional<modeloSistemaOperacionalAttributes, modeloSistemaOperacionalOptionalAttributes>;

export class modeloSistemaOperacional extends Model<modeloSistemaOperacionalAttributes, modeloSistemaOperacionalCreationAttributes> implements modeloSistemaOperacionalAttributes {
  id!: number;
  name!: string;
  version!: string;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloSistemaOperacional {
    return modeloSistemaOperacional.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'modeloSistemaOperacional',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloSi__3213E83F4B61A3A6",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

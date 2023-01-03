import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloCheckSecureBootAttributes {
  id: number;
  modelo?: string;
  status?: number;
}

export type modeloCheckSecureBootPk = "id";
export type modeloCheckSecureBootId = modeloCheckSecureBoot[modeloCheckSecureBootPk];
export type modeloCheckSecureBootOptionalAttributes = "id" | "modelo" | "status";
export type modeloCheckSecureBootCreationAttributes = Optional<modeloCheckSecureBootAttributes, modeloCheckSecureBootOptionalAttributes>;

export class modeloCheckSecureBoot extends Model<modeloCheckSecureBootAttributes, modeloCheckSecureBootCreationAttributes> implements modeloCheckSecureBootAttributes {
  id!: number;
  modelo?: string;
  status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloCheckSecureBoot {
    return modeloCheckSecureBoot.init({
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloCheckSecureBoot',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloCh__3213E83F04CF6BED",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

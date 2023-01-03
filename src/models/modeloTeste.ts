import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloTesteAttributes {
  id: number;
  idModelo?: number;
  idTeste?: number;
  status?: number;
  data_alterado?: Date;
}

export type modeloTestePk = "id";
export type modeloTesteId = modeloTeste[modeloTestePk];
export type modeloTesteOptionalAttributes = "idModelo" | "idTeste" | "status" | "data_alterado";
export type modeloTesteCreationAttributes = Optional<modeloTesteAttributes, modeloTesteOptionalAttributes>;

export class modeloTeste extends Model<modeloTesteAttributes, modeloTesteCreationAttributes> implements modeloTesteAttributes {
  id!: number;
  idModelo?: number;
  idTeste?: number;
  status?: number;
  data_alterado?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloTeste {
    return modeloTeste.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    idModelo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    idTeste: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_alterado: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloTeste',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloTe__3213E83F5A8F4B72",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

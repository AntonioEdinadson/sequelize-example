import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface historico2Attributes {
  ns: string;
  idPosto: number;
  data: Date;
  id: number;
  modelo?: string;
  linha?: string;
}

export type historico2Pk = "id";
export type historico2Id = historico2[historico2Pk];
export type historico2OptionalAttributes = "id" | "modelo" | "linha";
export type historico2CreationAttributes = Optional<historico2Attributes, historico2OptionalAttributes>;

export class historico2 extends Model<historico2Attributes, historico2CreationAttributes> implements historico2Attributes {
  ns!: string;
  idPosto!: number;
  data!: Date;
  id!: number;
  modelo?: string;
  linha?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof historico2 {
    return historico2.init({
    ns: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    idPosto: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    linha: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'historico2',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__historic__3213E83FB3AC6759",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

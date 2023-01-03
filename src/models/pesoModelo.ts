import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pesoModeloAttributes {
  id: number;
  idModelo: number;
  peso: number;
  status: number;
}

export type pesoModeloPk = "id";
export type pesoModeloId = pesoModelo[pesoModeloPk];
export type pesoModeloOptionalAttributes = "id";
export type pesoModeloCreationAttributes = Optional<pesoModeloAttributes, pesoModeloOptionalAttributes>;

export class pesoModelo extends Model<pesoModeloAttributes, pesoModeloCreationAttributes> implements pesoModeloAttributes {
  id!: number;
  idModelo!: number;
  peso!: number;
  status!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pesoModelo {
    return pesoModelo.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    idModelo: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pesoModelo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_idModelo",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

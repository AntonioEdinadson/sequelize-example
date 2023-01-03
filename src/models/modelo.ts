import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloAttributes {
  idModelo: number;
  nomeModelo: string;
  tipoModelo: number;
  versaoModelo: number;
  skuModelo?: string;
  status?: number;
  dataAlteracao?: Date;
}

export type modeloPk = "idModelo";
export type modeloId = modelo[modeloPk];
export type modeloOptionalAttributes = "skuModelo" | "status" | "dataAlteracao";
export type modeloCreationAttributes = Optional<modeloAttributes, modeloOptionalAttributes>;

export class modelo extends Model<modeloAttributes, modeloCreationAttributes> implements modeloAttributes {
  idModelo!: number;
  nomeModelo!: string;
  tipoModelo!: number;
  versaoModelo!: number;
  skuModelo?: string;
  status?: number;
  dataAlteracao?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof modelo {
    return modelo.init({
    idModelo: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nomeModelo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tipoModelo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    versaoModelo: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    skuModelo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dataAlteracao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modelo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modelo__13A52CD1284AA261",
        unique: true,
        fields: [
          { name: "idModelo" },
        ]
      },
    ]
  });
  }
}

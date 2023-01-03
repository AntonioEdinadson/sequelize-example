import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface historicoJobAttributes {
  id: number;
  nome: string;
  status?: string;
  data: Date;
}

export type historicoJobPk = "id";
export type historicoJobId = historicoJob[historicoJobPk];
export type historicoJobOptionalAttributes = "id" | "status" | "data";
export type historicoJobCreationAttributes = Optional<historicoJobAttributes, historicoJobOptionalAttributes>;

export class historicoJob extends Model<historicoJobAttributes, historicoJobCreationAttributes> implements historicoJobAttributes {
  id!: number;
  nome!: string;
  status?: string;
  data!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof historicoJob {
    return historicoJob.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'historicoJob',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__historic__3213E83FACEA1B32",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

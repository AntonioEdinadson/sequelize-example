import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modelVersionWindowsAttributes {
  id: number;
  data?: Date;
  modelo: string;
  version: string;
  status: number;
  windows?: string;
}

export type modelVersionWindowsPk = "id";
export type modelVersionWindowsId = modelVersionWindows[modelVersionWindowsPk];
export type modelVersionWindowsOptionalAttributes = "id" | "data" | "status" | "windows";
export type modelVersionWindowsCreationAttributes = Optional<modelVersionWindowsAttributes, modelVersionWindowsOptionalAttributes>;

export class modelVersionWindows extends Model<modelVersionWindowsAttributes, modelVersionWindowsCreationAttributes> implements modelVersionWindowsAttributes {
  id!: number;
  data?: Date;
  modelo!: string;
  version!: string;
  status!: number;
  windows?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof modelVersionWindows {
    return modelVersionWindows.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "IX_modelVersionWindows"
    },
    version: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "IX_modelVersionWindows"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    windows: {
      type: DataTypes.CHAR(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modelVersionWindows',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_modelVersionWindows",
        unique: true,
        fields: [
          { name: "modelo" },
          { name: "version" },
        ]
      },
      {
        name: "PK_modelVersionWindows",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface modeloSystemInfo_oldAttributes {
  id: number;
  modelo?: string;
  biosVersion?: string;
  diskSize?: string;
  memorySize?: string;
  cpuType?: string;
  diskSizeTolerancePercentage?: string;
}

export type modeloSystemInfo_oldPk = "id";
export type modeloSystemInfo_oldId = modeloSystemInfo_old[modeloSystemInfo_oldPk];
export type modeloSystemInfo_oldOptionalAttributes = "id" | "modelo" | "biosVersion" | "diskSize" | "memorySize" | "cpuType" | "diskSizeTolerancePercentage";
export type modeloSystemInfo_oldCreationAttributes = Optional<modeloSystemInfo_oldAttributes, modeloSystemInfo_oldOptionalAttributes>;

export class modeloSystemInfo_old extends Model<modeloSystemInfo_oldAttributes, modeloSystemInfo_oldCreationAttributes> implements modeloSystemInfo_oldAttributes {
  id!: number;
  modelo?: string;
  biosVersion?: string;
  diskSize?: string;
  memorySize?: string;
  cpuType?: string;
  diskSizeTolerancePercentage?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof modeloSystemInfo_old {
    return modeloSystemInfo_old.init({
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
    biosVersion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diskSize: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    memorySize: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cpuType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diskSizeTolerancePercentage: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'modeloSystemInfo_old',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__modeloSy__3213E83FED7D8E39",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

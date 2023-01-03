import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface devolucaoChaveAttributes {
  Id: number;
  SerialNumber?: string;
  MSFTProductKeyID?: string;
  Observation?: string;
  Status?: number;
}

export type devolucaoChavePk = "Id";
export type devolucaoChaveId = devolucaoChave[devolucaoChavePk];
export type devolucaoChaveOptionalAttributes = "Id" | "SerialNumber" | "MSFTProductKeyID" | "Observation" | "Status";
export type devolucaoChaveCreationAttributes = Optional<devolucaoChaveAttributes, devolucaoChaveOptionalAttributes>;

export class devolucaoChave extends Model<devolucaoChaveAttributes, devolucaoChaveCreationAttributes> implements devolucaoChaveAttributes {
  Id!: number;
  SerialNumber?: string;
  MSFTProductKeyID?: string;
  Observation?: string;
  Status?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof devolucaoChave {
    return devolucaoChave.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SerialNumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MSFTProductKeyID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Observation: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'devolucaoChave',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__devoluca__3214EC07A89CBC4E",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}

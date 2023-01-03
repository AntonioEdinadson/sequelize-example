import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { shopfloorNotebookStatus, shopfloorNotebookStatusId } from './shopfloorNotebookStatus';

export interface shopfloorNotebookMemoryInfoAttributes {
  id: number;
  idShopfloorNotebook: number;
  serialNumber?: string;
  partNumber?: string;
  speed?: string;
}

export type shopfloorNotebookMemoryInfoPk = "id";
export type shopfloorNotebookMemoryInfoId = shopfloorNotebookMemoryInfo[shopfloorNotebookMemoryInfoPk];
export type shopfloorNotebookMemoryInfoOptionalAttributes = "id" | "serialNumber" | "partNumber" | "speed";
export type shopfloorNotebookMemoryInfoCreationAttributes = Optional<shopfloorNotebookMemoryInfoAttributes, shopfloorNotebookMemoryInfoOptionalAttributes>;

export class shopfloorNotebookMemoryInfo extends Model<shopfloorNotebookMemoryInfoAttributes, shopfloorNotebookMemoryInfoCreationAttributes> implements shopfloorNotebookMemoryInfoAttributes {
  id!: number;
  idShopfloorNotebook!: number;
  serialNumber?: string;
  partNumber?: string;
  speed?: string;

  // shopfloorNotebookMemoryInfo belongsTo shopfloorNotebookStatus via idShopfloorNotebook
  idShopfloorNotebook_shopfloorNotebookStatus!: shopfloorNotebookStatus;
  getIdShopfloorNotebook_shopfloorNotebookStatus!: Sequelize.BelongsToGetAssociationMixin<shopfloorNotebookStatus>;
  setIdShopfloorNotebook_shopfloorNotebookStatus!: Sequelize.BelongsToSetAssociationMixin<shopfloorNotebookStatus, shopfloorNotebookStatusId>;
  createIdShopfloorNotebook_shopfloorNotebookStatus!: Sequelize.BelongsToCreateAssociationMixin<shopfloorNotebookStatus>;

  static initModel(sequelize: Sequelize.Sequelize): typeof shopfloorNotebookMemoryInfo {
    return shopfloorNotebookMemoryInfo.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idShopfloorNotebook: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'shopfloorNotebookStatus',
        key: 'id'
      }
    },
    serialNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    partNumber: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    speed: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shopfloorNotebookMemoryInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__shopfloo__3213E83F364C32EB",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

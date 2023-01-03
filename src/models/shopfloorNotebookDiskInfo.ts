import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { shopfloorNotebookStatus, shopfloorNotebookStatusId } from './shopfloorNotebookStatus';

export interface shopfloorNotebookDiskInfoAttributes {
  id: number;
  idShopfloorNotebook: number;
  serialNumber?: string;
  model?: string;
  description?: string;
  firmwareRevision?: string;
}

export type shopfloorNotebookDiskInfoPk = "id";
export type shopfloorNotebookDiskInfoId = shopfloorNotebookDiskInfo[shopfloorNotebookDiskInfoPk];
export type shopfloorNotebookDiskInfoOptionalAttributes = "id" | "serialNumber" | "model" | "description" | "firmwareRevision";
export type shopfloorNotebookDiskInfoCreationAttributes = Optional<shopfloorNotebookDiskInfoAttributes, shopfloorNotebookDiskInfoOptionalAttributes>;

export class shopfloorNotebookDiskInfo extends Model<shopfloorNotebookDiskInfoAttributes, shopfloorNotebookDiskInfoCreationAttributes> implements shopfloorNotebookDiskInfoAttributes {
  id!: number;
  idShopfloorNotebook!: number;
  serialNumber?: string;
  model?: string;
  description?: string;
  firmwareRevision?: string;

  // shopfloorNotebookDiskInfo belongsTo shopfloorNotebookStatus via idShopfloorNotebook
  idShopfloorNotebook_shopfloorNotebookStatus!: shopfloorNotebookStatus;
  getIdShopfloorNotebook_shopfloorNotebookStatus!: Sequelize.BelongsToGetAssociationMixin<shopfloorNotebookStatus>;
  setIdShopfloorNotebook_shopfloorNotebookStatus!: Sequelize.BelongsToSetAssociationMixin<shopfloorNotebookStatus, shopfloorNotebookStatusId>;
  createIdShopfloorNotebook_shopfloorNotebookStatus!: Sequelize.BelongsToCreateAssociationMixin<shopfloorNotebookStatus>;

  static initModel(sequelize: Sequelize.Sequelize): typeof shopfloorNotebookDiskInfo {
    return shopfloorNotebookDiskInfo.init({
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
    model: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    firmwareRevision: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shopfloorNotebookDiskInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__shopfloo__3213E83FA320D322",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

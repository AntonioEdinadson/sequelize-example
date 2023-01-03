import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { shopfloorNotebookDiskInfo, shopfloorNotebookDiskInfoId } from './shopfloorNotebookDiskInfo';
import type { shopfloorNotebookMemoryInfo, shopfloorNotebookMemoryInfoId } from './shopfloorNotebookMemoryInfo';

export interface shopfloorNotebookStatusAttributes {
  id: number;
  ns: string;
  nsPlacaMae: string;
  modelo?: string;
  systemVersion?: string;
  dataCadastro: Date;
  status?: number;
}

export type shopfloorNotebookStatusPk = "id";
export type shopfloorNotebookStatusId = shopfloorNotebookStatus[shopfloorNotebookStatusPk];
export type shopfloorNotebookStatusOptionalAttributes = "id" | "modelo" | "systemVersion" | "dataCadastro" | "status";
export type shopfloorNotebookStatusCreationAttributes = Optional<shopfloorNotebookStatusAttributes, shopfloorNotebookStatusOptionalAttributes>;

export class shopfloorNotebookStatus extends Model<shopfloorNotebookStatusAttributes, shopfloorNotebookStatusCreationAttributes> implements shopfloorNotebookStatusAttributes {
  id!: number;
  ns!: string;
  nsPlacaMae!: string;
  modelo?: string;
  systemVersion?: string;
  dataCadastro!: Date;
  status?: number;

  // shopfloorNotebookStatus hasMany shopfloorNotebookDiskInfo via idShopfloorNotebook
  shopfloorNotebookDiskInfos!: shopfloorNotebookDiskInfo[];
  getShopfloorNotebookDiskInfos!: Sequelize.HasManyGetAssociationsMixin<shopfloorNotebookDiskInfo>;
  setShopfloorNotebookDiskInfos!: Sequelize.HasManySetAssociationsMixin<shopfloorNotebookDiskInfo, shopfloorNotebookDiskInfoId>;
  addShopfloorNotebookDiskInfo!: Sequelize.HasManyAddAssociationMixin<shopfloorNotebookDiskInfo, shopfloorNotebookDiskInfoId>;
  addShopfloorNotebookDiskInfos!: Sequelize.HasManyAddAssociationsMixin<shopfloorNotebookDiskInfo, shopfloorNotebookDiskInfoId>;
  createShopfloorNotebookDiskInfo!: Sequelize.HasManyCreateAssociationMixin<shopfloorNotebookDiskInfo>;
  removeShopfloorNotebookDiskInfo!: Sequelize.HasManyRemoveAssociationMixin<shopfloorNotebookDiskInfo, shopfloorNotebookDiskInfoId>;
  removeShopfloorNotebookDiskInfos!: Sequelize.HasManyRemoveAssociationsMixin<shopfloorNotebookDiskInfo, shopfloorNotebookDiskInfoId>;
  hasShopfloorNotebookDiskInfo!: Sequelize.HasManyHasAssociationMixin<shopfloorNotebookDiskInfo, shopfloorNotebookDiskInfoId>;
  hasShopfloorNotebookDiskInfos!: Sequelize.HasManyHasAssociationsMixin<shopfloorNotebookDiskInfo, shopfloorNotebookDiskInfoId>;
  countShopfloorNotebookDiskInfos!: Sequelize.HasManyCountAssociationsMixin;
  // shopfloorNotebookStatus hasMany shopfloorNotebookMemoryInfo via idShopfloorNotebook
  shopfloorNotebookMemoryInfos!: shopfloorNotebookMemoryInfo[];
  getShopfloorNotebookMemoryInfos!: Sequelize.HasManyGetAssociationsMixin<shopfloorNotebookMemoryInfo>;
  setShopfloorNotebookMemoryInfos!: Sequelize.HasManySetAssociationsMixin<shopfloorNotebookMemoryInfo, shopfloorNotebookMemoryInfoId>;
  addShopfloorNotebookMemoryInfo!: Sequelize.HasManyAddAssociationMixin<shopfloorNotebookMemoryInfo, shopfloorNotebookMemoryInfoId>;
  addShopfloorNotebookMemoryInfos!: Sequelize.HasManyAddAssociationsMixin<shopfloorNotebookMemoryInfo, shopfloorNotebookMemoryInfoId>;
  createShopfloorNotebookMemoryInfo!: Sequelize.HasManyCreateAssociationMixin<shopfloorNotebookMemoryInfo>;
  removeShopfloorNotebookMemoryInfo!: Sequelize.HasManyRemoveAssociationMixin<shopfloorNotebookMemoryInfo, shopfloorNotebookMemoryInfoId>;
  removeShopfloorNotebookMemoryInfos!: Sequelize.HasManyRemoveAssociationsMixin<shopfloorNotebookMemoryInfo, shopfloorNotebookMemoryInfoId>;
  hasShopfloorNotebookMemoryInfo!: Sequelize.HasManyHasAssociationMixin<shopfloorNotebookMemoryInfo, shopfloorNotebookMemoryInfoId>;
  hasShopfloorNotebookMemoryInfos!: Sequelize.HasManyHasAssociationsMixin<shopfloorNotebookMemoryInfo, shopfloorNotebookMemoryInfoId>;
  countShopfloorNotebookMemoryInfos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof shopfloorNotebookStatus {
    return shopfloorNotebookStatus.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ns: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    nsPlacaMae: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    systemVersion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dataCadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shopfloorNotebookStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__shopfloo__3213E83F2940866E",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

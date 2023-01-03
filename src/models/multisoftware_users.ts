import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface multisoftware_usersAttributes {
  id: number;
  name: string;
  avatar: string;
  email: string;
  password: string;
  permissions: string;
  status: number;
}

export type multisoftware_usersPk = "id";
export type multisoftware_usersId = multisoftware_users[multisoftware_usersPk];
export type multisoftware_usersOptionalAttributes = "id" | "status";
export type multisoftware_usersCreationAttributes = Optional<multisoftware_usersAttributes, multisoftware_usersOptionalAttributes>;

export class multisoftware_users extends Model<multisoftware_usersAttributes, multisoftware_usersCreationAttributes> implements multisoftware_usersAttributes {
  id!: number;
  name!: string;
  avatar!: string;
  email!: string;
  password!: string;
  permissions!: string;
  status!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof multisoftware_users {
    return multisoftware_users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    permissions: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'multisoftware_users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__multisof__3213E83F4E8A3F8E",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

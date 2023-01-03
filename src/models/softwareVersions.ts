import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface softwareVersionsAttributes {
  id: number;
  name: string;
  version: number;
  data: Date;
}

export type softwareVersionsPk = "id";
export type softwareVersionsId = softwareVersions[softwareVersionsPk];
export type softwareVersionsOptionalAttributes = "id";
export type softwareVersionsCreationAttributes = Optional<softwareVersionsAttributes, softwareVersionsOptionalAttributes>;

export class softwareVersions extends Model<softwareVersionsAttributes, softwareVersionsCreationAttributes> implements softwareVersionsAttributes {
  id!: number;
  name!: string;
  version!: number;
  data!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof softwareVersions {
    return softwareVersions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'softwareVersions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__software__3213E83FB45EAE02",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

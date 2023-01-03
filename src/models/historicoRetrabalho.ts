import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface historicoRetrabalhoAttributes {
  Id: number;
  SerialNumber: string;
  MSFTProductKeyID: string;
  modelo: string;
  data: Date;
}

export type historicoRetrabalhoPk = "Id";
export type historicoRetrabalhoId = historicoRetrabalho[historicoRetrabalhoPk];
export type historicoRetrabalhoOptionalAttributes = "Id";
export type historicoRetrabalhoCreationAttributes = Optional<historicoRetrabalhoAttributes, historicoRetrabalhoOptionalAttributes>;

export class historicoRetrabalho extends Model<historicoRetrabalhoAttributes, historicoRetrabalhoCreationAttributes> implements historicoRetrabalhoAttributes {
  Id!: number;
  SerialNumber!: string;
  MSFTProductKeyID!: string;
  modelo!: string;
  data!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof historicoRetrabalho {
    return historicoRetrabalho.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SerialNumber: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    MSFTProductKeyID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'historicoRetrabalho',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__historic__3214EC070A40C549",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}

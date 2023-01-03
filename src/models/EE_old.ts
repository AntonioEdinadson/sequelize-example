import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EE_oldAttributes {
  'Sub Class'?: string;
  'Op Code'?: number;
  'Primary Part Number'?: string;
  'Component Item'?: string;
  'Multilaser Code'?: string;
  'Component Quantity'?: number;
  MPQ?: number;
  MOQ?: number;
  Location?: string;
}

export type EE_oldOptionalAttributes = "Sub Class" | "Op Code" | "Primary Part Number" | "Component Item" | "Multilaser Code" | "Component Quantity" | "MPQ" | "MOQ" | "Location";
export type EE_oldCreationAttributes = Optional<EE_oldAttributes, EE_oldOptionalAttributes>;

export class EE_old extends Model<EE_oldAttributes, EE_oldCreationAttributes> implements EE_oldAttributes {
  'Sub Class'?: string;
  'Op Code'?: number;
  'Primary Part Number'?: string;
  'Component Item'?: string;
  'Multilaser Code'?: string;
  'Component Quantity'?: number;
  MPQ?: number;
  MOQ?: number;
  Location?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof EE_old {
    return EE_old.init({
    'Sub Class': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Op Code': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Primary Part Number': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Component Item': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Multilaser Code': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Component Quantity': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MPQ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MOQ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EE_old',
    schema: 'dbo',
    timestamps: false
  });
  }
}

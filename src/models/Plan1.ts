import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface Plan1Attributes {
  Board?: number;
  'Ref#'?: string;
  'Pos X'?: number;
  'Pos Y'?: number;
  Rotation?: string;
  'Pos Z'?: string;
  'AVL Name'?: string;
  'Part Number'?: string;
  F9?: string;
  Gluing?: string;
  Skip?: string;
  'Main Mark'?: string;
  'Place Before'?: string;
  'Sub Mark1'?: string;
  'Sub Mark2'?: string;
  'Sub Mark'?: string;
  'Carry Mode'?: string;
  Memo?: string;
  'Stack Target'?: string;
  Tag?: string;
  Assign?: string;
}

export type Plan1OptionalAttributes = "Board" | "Ref#" | "Pos X" | "Pos Y" | "Rotation" | "Pos Z" | "AVL Name" | "Part Number" | "F9" | "Gluing" | "Skip" | "Main Mark" | "Place Before" | "Sub Mark1" | "Sub Mark2" | "Sub Mark" | "Carry Mode" | "Memo" | "Stack Target" | "Tag" | "Assign";
export type Plan1CreationAttributes = Optional<Plan1Attributes, Plan1OptionalAttributes>;

export class Plan1 extends Model<Plan1Attributes, Plan1CreationAttributes> implements Plan1Attributes {
  Board?: number;
  'Ref#'?: string;
  'Pos X'?: number;
  'Pos Y'?: number;
  Rotation?: string;
  'Pos Z'?: string;
  'AVL Name'?: string;
  'Part Number'?: string;
  F9?: string;
  Gluing?: string;
  Skip?: string;
  'Main Mark'?: string;
  'Place Before'?: string;
  'Sub Mark1'?: string;
  'Sub Mark2'?: string;
  'Sub Mark'?: string;
  'Carry Mode'?: string;
  Memo?: string;
  'Stack Target'?: string;
  Tag?: string;
  Assign?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Plan1 {
    return Plan1.init({
    Board: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Ref#': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Pos X': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Pos Y': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Rotation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Pos Z': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'AVL Name': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Part Number': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    F9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Gluing: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Skip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Main Mark': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Place Before': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Sub Mark1': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Sub Mark2': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Sub Mark': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Carry Mode': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Memo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Stack Target': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Tag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Assign: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Plan1',
    schema: 'dbo',
    timestamps: false
  });
  }
}

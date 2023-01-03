import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { UsuarioNivel, UsuarioNivelId } from './UsuarioNivel';

export interface UsuarioAttributes {
  id: number;
  nome?: string;
  userlogin: string;
  password?: string;
  nivel: number;
  status: number;
}

export type UsuarioPk = "id";
export type UsuarioId = Usuario[UsuarioPk];
export type UsuarioOptionalAttributes = "id" | "nome" | "password";
export type UsuarioCreationAttributes = Optional<UsuarioAttributes, UsuarioOptionalAttributes>;

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  id!: number;
  nome?: string;
  userlogin!: string;
  password?: string;
  nivel!: number;
  status!: number;

  // Usuario belongsTo UsuarioNivel via nivel
  nivel_UsuarioNivel!: UsuarioNivel;
  getNivel_UsuarioNivel!: Sequelize.BelongsToGetAssociationMixin<UsuarioNivel>;
  setNivel_UsuarioNivel!: Sequelize.BelongsToSetAssociationMixin<UsuarioNivel, UsuarioNivelId>;
  createNivel_UsuarioNivel!: Sequelize.BelongsToCreateAssociationMixin<UsuarioNivel>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Usuario {
    return Usuario.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userlogin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "UQ__Usuario__A707805D8B191584"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UsuarioNivel',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Usuario__3213E83F7C222924",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UQ__Usuario__A707805D8B191584",
        unique: true,
        fields: [
          { name: "userlogin" },
        ]
      },
    ]
  });
  }
}

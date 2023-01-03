import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Usuario, UsuarioId } from './Usuario';

export interface UsuarioNivelAttributes {
  id: number;
  nivel: string;
  status: number;
}

export type UsuarioNivelPk = "id";
export type UsuarioNivelId = UsuarioNivel[UsuarioNivelPk];
export type UsuarioNivelOptionalAttributes = "id" | "status";
export type UsuarioNivelCreationAttributes = Optional<UsuarioNivelAttributes, UsuarioNivelOptionalAttributes>;

export class UsuarioNivel extends Model<UsuarioNivelAttributes, UsuarioNivelCreationAttributes> implements UsuarioNivelAttributes {
  id!: number;
  nivel!: string;
  status!: number;

  // UsuarioNivel hasMany Usuario via nivel
  Usuarios!: Usuario[];
  getUsuarios!: Sequelize.HasManyGetAssociationsMixin<Usuario>;
  setUsuarios!: Sequelize.HasManySetAssociationsMixin<Usuario, UsuarioId>;
  addUsuario!: Sequelize.HasManyAddAssociationMixin<Usuario, UsuarioId>;
  addUsuarios!: Sequelize.HasManyAddAssociationsMixin<Usuario, UsuarioId>;
  createUsuario!: Sequelize.HasManyCreateAssociationMixin<Usuario>;
  removeUsuario!: Sequelize.HasManyRemoveAssociationMixin<Usuario, UsuarioId>;
  removeUsuarios!: Sequelize.HasManyRemoveAssociationsMixin<Usuario, UsuarioId>;
  hasUsuario!: Sequelize.HasManyHasAssociationMixin<Usuario, UsuarioId>;
  hasUsuarios!: Sequelize.HasManyHasAssociationsMixin<Usuario, UsuarioId>;
  countUsuarios!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof UsuarioNivel {
    return UsuarioNivel.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nivel: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'UsuarioNivel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__UsuarioN__3213E83F5ED8BC7C",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

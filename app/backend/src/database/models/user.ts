import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Users extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;
}

Users.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING(45),
      allowNull: false,
    },
    role: {
      type: STRING(45),
      allowNull: false,
    },
    email: {
      type: STRING(45),
      allowNull: false,
    },
    password: {
      type: STRING(45),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  },
);

export default Users;

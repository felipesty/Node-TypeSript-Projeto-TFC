import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './teams';

class Matches extends Model {
  id!: number;
  username!: string;
  role!: string;
  email!: string;
  password!: string;
}

Matches.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    homeTeam: {
      type: INTEGER,
      allowNull: false,
    },
    homeTeamGoals: {
      type: INTEGER,
      allowNull: false,
    },
    awayTeam: {
      type: INTEGER,
      allowNull: false,
    },
    awayTeamGoals: {
      type: INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'matches',
    timestamps: false,
    underscored: true,
  },
);

Teams.belongsTo(Matches, { foreignKey: 'id', as: 'homeTeam' });
Teams.belongsTo(Matches, { foreignKey: 'id', as: 'awayTeam' });

Matches.hasMany(Teams, { foreignKey: 'id', as: 'homeTeam' });
Matches.hasMany(Teams, { foreignKey: 'id', as: 'awayTeam' });

export default Matches;

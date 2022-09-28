// import { Model, INTEGER, BOOLEAN } from 'sequelize';
// import db from '.';
// import Teams from './teams';

// class Matches extends Model {
//   id!: number;
//   homeTeam!: number;
//   homeTeamGoals!: number;
//   awayTeam!: number;
//   awayTeamGoals!: number;
//   inProgress!: number;
// }

// Matches.init(
//   {
//     id: {
//       type: INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     homeTeam: {
//       type: INTEGER,
//       allowNull: false,
//     },
//     homeTeamGoals: {
//       type: INTEGER,
//       allowNull: false,
//     },
//     awayTeam: {
//       type: INTEGER,
//       allowNull: false,
//     },
//     awayTeamGoals: {
//       type: INTEGER,
//       allowNull: false,
//     },
//     inProgress: {
//       type: BOOLEAN,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: db,
//     modelName: 'matches',
//     timestamps: false,
//   },
// );
// Teams.belongsTo(Matches, { foreignKey: 'id', as: 'homeTeam' });
// Teams.belongsTo(Matches, { foreignKey: 'id', as: 'awayTeam' });

// Matches.hasMany(Teams, { foreignKey: 'id', as: 'homeTeam' });
// Matches.hasMany(Teams, { foreignKey: 'id', as: 'awayTeam' });
// export default Matches;

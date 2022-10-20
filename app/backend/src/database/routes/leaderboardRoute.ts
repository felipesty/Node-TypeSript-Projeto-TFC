import * as express from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const leaderRoute = express.Router();
const leaderboardController = new LeaderboardController();

leaderRoute.get('/leaderboard/home', leaderboardController.homeTeams);
leaderRoute.get('/leaderboard/away', leaderboardController.awayTeams);

export default leaderRoute;

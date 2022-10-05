import * as express from 'express';
import TeamController from '../controllers/teamsController';

const teamRoute = express.Router();
const teamsController = new TeamController();

teamRoute.get('/teams', teamsController.getAll);
teamRoute.get('/teams/:id', teamsController.getById);

export default teamRoute;

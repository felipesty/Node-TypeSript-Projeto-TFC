import * as express from 'express';
import MatcheController from '../controllers/matcheController';

const matchRoute = express.Router();
const matcheController = new MatcheController();

matchRoute.get('/matches', matcheController.getAll);
matchRoute.post('matches', matcheController.create);

export default matchRoute;

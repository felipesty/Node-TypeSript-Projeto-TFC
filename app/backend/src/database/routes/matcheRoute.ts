import * as express from 'express';
import MatcheController from '../controllers/matcheController';

const matcheRoute = express.Router();
const matcheController = new MatcheController();

matcheRoute.get('/matches', matcheController.getAll);
matcheRoute.post('/matches', matcheController.create);

export default matcheRoute;

import * as express from 'express';
import MatcheController from '../controllers/matcheController';
import MatcheValidation from '../middlewares/matcheValidation';

const matcheRoute = express.Router();
const matcheController = new MatcheController();
const validation = new MatcheValidation();

matcheRoute.get('/matches', matcheController.getAll);
matcheRoute.post('/matches', validation.validation, matcheController.create);
matcheRoute.patch('/matches/:id/finish', matcheController.update);
matcheRoute.patch('/matches/:id/', matcheController.updateGoal);

export default matcheRoute;

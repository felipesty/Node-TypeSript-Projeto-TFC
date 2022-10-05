import * as express from 'express';
import LoginController from '../controllers/loginController';
import LoginValitade from '../middlewares/login';

const loginRoute = express.Router();
const loginController = new LoginController();

loginRoute.post('/lohin', LoginValitade, loginController.login);

export default loginRoute;

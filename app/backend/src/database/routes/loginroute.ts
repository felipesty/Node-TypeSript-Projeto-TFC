import * as express from 'express';
import LoginController from '../controllers/loginController';
import LoginValitade from '../middlewares/login';

const loginRoute = express.Router();
const loginController = new LoginController();

loginRoute.post('/login', LoginValitade, loginController.login);
loginRoute.get('/login/validate', loginController.loginValidate);

export default loginRoute;

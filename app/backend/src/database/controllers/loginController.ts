import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class LoginController {
  constructor(private loginService = new LoginService()) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { token } = await this.loginService.login(email, password);
    res.status(200).json({ token });
  };
}

export default LoginController;

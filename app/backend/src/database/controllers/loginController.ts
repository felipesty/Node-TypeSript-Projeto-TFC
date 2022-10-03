import { Request, Response } from 'express';
import LoginService from '../services/login';

class LoginController {
  constructor(private loginService = new LoginService()) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { message, token } = await this.loginService.login(email, password);
    if (message) return res.status(400).json({ message });
    res.status(200).json({ token });
  };
}

export default LoginController;

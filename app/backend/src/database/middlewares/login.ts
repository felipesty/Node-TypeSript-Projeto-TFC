import { NextFunction, Request, Response } from 'express';
import Users from '../models/user';

const LoginValitade = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const result = await Users.findOne({ where: { email } });

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!result) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
};

export default LoginValitade;

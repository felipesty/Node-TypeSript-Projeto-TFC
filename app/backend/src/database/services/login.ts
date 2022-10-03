import { compare } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import Users from '../models/user';

const JWT_SECRET = 'jwt_secret';

type User = {
  message?: string;
  token?: string;
};

class LoginService {
  login = async (email: string, password: string): Promise<User> => {
    const result = await Users.findOne({ where: { email } }) as Users;
    if (!email || !password) {
      return { message: 'All fields must be filled' };
    }

    const passValidation = await compare(password, result?.password);
    if (!passValidation) {
      return { message: 'incorrect password' };
    }

    const token = jwt.sign({ data: email }, JWT_SECRET, { expiresIn: '8h', algorithm: 'HS256' });

    return { token };
  };
}

export default LoginService;

import { compare } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import Users from '../models/user';
import IUser from '../Interfaces/IUser';

const JWT_SECRET = 'jwt_secret';

class LoginService {
  login = async (email: string, password: string): Promise<IUser> => {
    const result = await Users.findOne({ where: { email } }) as Users;
    const passValidation = await compare(password, result.password);
    if (!passValidation) {
      return { message: 'incorrect password' };
    }

    const token = jwt.sign({ data: email }, JWT_SECRET, { expiresIn: '8h', algorithm: 'HS256' });

    return { token };
  };
}

export default LoginService;

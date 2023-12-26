import auth from '../../../config/auth';
import { AppError } from '../../../shared/errors/AppError';
import { IAuthenticateUserDTO } from '../DTOs/IAuthenticateUserDTO';
import { IAccountsRepository } from '../repositories/IAccountsRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IResponse {
  user: {
      name: string;
      email: string;
    };
  token: string;
}

export class AuthenticateUserService {
  constructor(
    private accountsRepository: IAccountsRepository,
  ) {}
  public async execute({ email, password }: IAuthenticateUserDTO): Promise<IResponse> {
    const { secret_token, expires_in_token } = auth;
    let user = await this.accountsRepository.getByEmail(email);
    if (!user) throw new AppError('email or password incorrect', 404);
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new AppError('email or password incorrect', 404);
    const token = sign({}, secret_token, {subject: user.id, expiresIn: expires_in_token});
    delete user.password;
    delete user.isAdmin;
    return {
      token,
      user
    };
  }
}
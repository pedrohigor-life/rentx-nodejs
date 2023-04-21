import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUsersRepository';

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppErrors';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUser(email);

    if (!user) throw new AppError('Email or Password incorrect!', 401);

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError('Email or Password incorrect!', 401);

    const token = sign({}, '75f646a9404a88b5eb590853776ac17b', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };

import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';
import { AppError } from '../errors/AppErrors';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new AppError('Token missing', 401);

    const [, token] = authHeader.split(' ');

    try {
      const { sub: user_id } = verify(
        token,
        '75f646a9404a88b5eb590853776ac17b'
      ) as IPayload;

      const usersRepository = new UserRepository();

      const userExists = await usersRepository.findById(user_id);

      if (!userExists) throw new AppError('User does not exists', 401);

      next();
    } catch (error) {
      throw new AppError('Invalid token', 401);
    }
  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message });
  }
}

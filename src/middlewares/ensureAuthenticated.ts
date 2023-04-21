import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

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

    if (!authHeader) throw new Error('Token missing');

    const [, token] = authHeader.split(' ');

    try {
      const { sub: user_id } = verify(
        token,
        '75f646a9404a88b5eb590853776ac17b'
      ) as IPayload;

      const usersRepository = new UserRepository();

      const userExists = await usersRepository.findById(user_id);

      if (!userExists) throw new Error('User does not exists');

      next();
    } catch (error) {
      throw new Error('Invalid token');
    }
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}

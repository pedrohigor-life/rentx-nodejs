import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { container } from 'tsyringe';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password, email, driver_license, isAdmin } =
      request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      username,
      password,
      email,
      driver_license,
      isAdmin,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };

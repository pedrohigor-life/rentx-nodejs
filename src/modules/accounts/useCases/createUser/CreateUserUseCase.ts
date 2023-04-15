import { inject, injectable } from 'tsyringe';
import { IUserRepositories } from '../../repositories/IUsersRepositories';

interface IRequest {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  isAdmin?: boolean;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepositories: IUserRepositories
  ) {}

  async execute({
    name,
    username,
    password,
    email,
    driver_license,
    isAdmin,
  }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepositories.findByUsers(name);

    if (userAlreadyExists) throw new Error('User already exists');

    await this.usersRepositories.create({
      name,
      username,
      password,
      email,
      driver_license,
      isAdmin,
    });
  }
}

export { CreateUserUseCase };

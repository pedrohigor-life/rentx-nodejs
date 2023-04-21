import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { hash } from 'bcrypt';
import { AppError } from '../../../../errors/AppErrors';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadExists = await this.usersRepository.findByUser(email);

    if (userAlreadExists) throw new AppError('User alredy exists', 401);

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      driver_license,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };

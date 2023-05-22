import { AppError } from '../../../../errors/AppErrors';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UserRepositoryInMemory } from '../../repositories/in-memory/UserRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let userRepository: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe('Authenticate user', () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepository);
    authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
  });
  it('should be able authenticate user', async () => {
    const account: ICreateUserDTO = {
      name: 'test user',
      email: 'test@gmail.com',
      password: '12345678',
      driver_license: '3287432874632',
    };

    await createUserUseCase.execute({
      name: account.name,
      email: account.email,
      driver_license: account.driver_license,
      password: account.password,
    });

    const userAuthenticated = await authenticateUserUseCase.execute({
      email: account.email,
      password: account.password,
    });

    expect(userAuthenticated).toHaveProperty('token');
  });

  it('should be not able to authenticate an noexistent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'false@gmail.com',
        password: '12345678',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorret password', () => {
    expect(async () => {
      const account: ICreateUserDTO = {
        name: 'Incorrect password',
        email: 'incorrect.assword@gmail.com',
        password: '1234567',
        driver_license: '3287432874632',
      };

      await createUserUseCase.execute({
        name: account.name,
        email: account.email,
        driver_license: account.driver_license,
        password: account.password,
      });

      await authenticateUserUseCase.execute({
        email: account.email,
        password: 'incorrectPassword',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

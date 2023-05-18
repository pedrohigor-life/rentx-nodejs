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
    const account = {
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
});

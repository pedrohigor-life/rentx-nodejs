import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUsersRepository';

class UserRepositoryInMemory implements IUserRepository {
  private users: User[] = [];

  async findByUser(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async create(user: ICreateUserDTO): Promise<void> {
    const userCreated = new User();

    Object.assign(userCreated, {
      name: user.name,
      email: user.email,
      driver_license: user.driver_license,
      password: user.password,
    });

    this.users.push(userCreated);
  }

  updateAvatar(userId: string, avatarFile: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  listUsers(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}

export { UserRepositoryInMemory };

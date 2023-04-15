import { Repository, getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { ICreateUsersDTO, IUserRepositories } from '../IUsersRepositories';

class UsersRepositories implements IUserRepositories {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  findByUsers(name: string): Promise<User> {
    return this.repository.findOne({ name });
  }

  async create({
    name,
    username,
    password,
    email,
    driver_license,
    isAdmin,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      email,
      driver_license,
      isAdmin,
    });

    await this.repository.save(user);
  }

  listUsers(): Promise<User[]> {
    return this.repository.find();
  }
}

export { UsersRepositories };

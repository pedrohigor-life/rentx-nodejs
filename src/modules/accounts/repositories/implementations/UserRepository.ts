import { Repository, getRepository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../IUsersRepository';
import { User } from '../../entities/User';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOne(
      { id },
      { select: ['name', 'email', 'driver_license'] }
    );
  }

  async findByUser(email: string): Promise<User> {
    return this.repository.findOne(
      { email },
      { select: ['name', 'email', 'driver_license'] }
    );
  }

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }

  async listUsers(): Promise<User[]> {
    const users = await this.repository.find({
      select: ['name', 'email', 'driver_license'],
    });

    return users;
  }
}

export { UserRepository };
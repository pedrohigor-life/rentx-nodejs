import { Repository, getRepository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../IUsersRepository';
import { User } from '../../entities/User';
import { PostgresDataSource } from '../../../../database/datasources/PostgresDataSource';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = PostgresDataSource.getRepository(User);
  }

  async updateAvatar(userId: string, avatarFile: string): Promise<void> {
    this.repository.update(userId, { avatar: avatarFile });
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOneBy({
      id,
    });
  }

  async findByUser(email: string): Promise<User> {
    return this.repository.findOneBy({ email });
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

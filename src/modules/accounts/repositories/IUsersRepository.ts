import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUserRepository {
  findByUser(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  create(user: ICreateUserDTO): Promise<void>;
  listUsers(): Promise<User[]>;
}
export { IUserRepository };

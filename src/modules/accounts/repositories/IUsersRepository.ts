import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUserRepository {
  findByUser(email: string): Promise<User>;
  create(user: ICreateUserDTO): Promise<void>;
}
export { IUserRepository };

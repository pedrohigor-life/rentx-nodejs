import { User } from '../entities/User';

interface ICreateUsersDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  isAdmin?: boolean;
}

interface IUserRepositories {
  findByUsers(name: string): Promise<User>;
  create({
    name,
    username,
    password,
    email,
    driver_license,
    isAdmin,
  }: ICreateUsersDTO): Promise<void>;
  listUsers(): Promise<User[]>;
}

export { IUserRepositories, ICreateUsersDTO };

import { inject, injectable } from 'tsyringe';
import { User } from '../../entities/User';
import { IUserRepositories } from '../../repositories/IUsersRepositories';

@injectable()
class ListUserUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepositories: IUserRepositories
  ) {}

  async execute(): Promise<User[]> {
    const data = await this.usersRepositories.listUsers();

    return data;
  }
}

export { ListUserUseCase };

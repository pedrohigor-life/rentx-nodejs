import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUsersRepository';
import { User } from '../../entities/User';

@injectable()
class ListUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.listUsers();
  }
}

export { ListUserUseCase };

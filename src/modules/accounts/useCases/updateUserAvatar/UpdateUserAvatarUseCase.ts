import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository
  ) {}

  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    user.avatar = avatarFile;

    await this.usersRepository.updateAvatar(userId, avatarFile);
  }
}

export { UpdateUserAvatarUseCase };

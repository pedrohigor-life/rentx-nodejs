import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../errors/AppErrors';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);

    if (!user) throw new AppError('User not exists', 401);

    await this.userRepository.updateAvatar(user_id, avatar_file);
  }
}

export { UpdateUserAvatarUseCase };

import { inject, injectable } from 'tsyringe';
import { Specification } from '../../../entities/Specification';
import {
  ISpecificationsRepositories,
  ISpecificationDTO,
} from '../../../repositories/ISpecificationsRepositories';
import { AppError } from '../../../../../errors/AppErrors';

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepositories: ISpecificationsRepositories
  ) {}
  async execute({
    name,
    description,
  }: ISpecificationDTO): Promise<Specification> {
    const specificationAlredyExists =
      await this.specificationsRepositories.findBySpecificatoin(name);

    if (specificationAlredyExists)
      throw new AppError('Specification alredy exists', 401);

    return await this.specificationsRepositories.create({ name, description });
  }
}
export { CreateSpecificationUseCase };

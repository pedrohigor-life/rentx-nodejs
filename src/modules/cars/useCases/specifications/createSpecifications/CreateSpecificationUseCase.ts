import { inject, injectable } from 'tsyringe';
import { Specification } from '../../../entities/Specification';
import {
  ISpecificationsRepositories,
  ISpecificationDTO,
} from '../../../repositories/ISpecificationsRepositories';

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
      throw new Error('Specification alredy exists');

    return await this.specificationsRepositories.create({ name, description });
  }
}
export { CreateSpecificationUseCase };

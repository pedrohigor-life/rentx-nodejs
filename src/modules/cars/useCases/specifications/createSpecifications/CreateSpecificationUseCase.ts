import { Specification } from '../../../entities/Specification';
import {
  ISpecificationsRepositories,
  ISpecificationDTO,
} from '../../../repositories/ISpecificationsRepositories';

class CreateSpecificationUseCase {
  constructor(
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

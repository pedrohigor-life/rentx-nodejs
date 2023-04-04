import { Specification } from '../../../model/Specification';
import {
  ISpecificationsRepositories,
  ISpecificationDTO,
} from '../../../repositories/ISpecificationsRepositories';

class CreateSpecificationUseCase {
  constructor(
    private specificationsRepositories: ISpecificationsRepositories
  ) {}
  execute({ name, description }: ISpecificationDTO): Specification {
    const specificationAlredyExists =
      this.specificationsRepositories.findBySpecificatoin(name);

    if (specificationAlredyExists)
      throw new Error('Specification alredy exists');

    return this.specificationsRepositories.create({ name, description });
  }
}
export { CreateSpecificationUseCase };

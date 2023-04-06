import { Specification } from '../../../entities/Specification';
import { ISpecificationsRepositories } from '../../../repositories/ISpecificationsRepositories';

class ListSpecificationsUseCase {
  constructor(
    private specificationsRepositories: ISpecificationsRepositories
  ) {}

  execute(): Specification[] {
    return this.specificationsRepositories.listSpecifications();
  }
}

export { ListSpecificationsUseCase };

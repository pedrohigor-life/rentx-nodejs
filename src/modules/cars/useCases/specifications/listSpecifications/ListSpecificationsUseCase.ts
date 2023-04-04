import { Specification } from '../../../model/Specification';
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

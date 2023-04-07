import { Specification } from '../../../entities/Specification';
import { ISpecificationsRepositories } from '../../../repositories/ISpecificationsRepositories';

class ListSpecificationsUseCase {
  constructor(
    private specificationsRepositories: ISpecificationsRepositories
  ) {}

  async execute(): Promise<Specification[]> {
    return await this.specificationsRepositories.listSpecifications();
  }
}

export { ListSpecificationsUseCase };

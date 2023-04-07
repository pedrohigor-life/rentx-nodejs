import { inject, injectable } from 'tsyringe';
import { Specification } from '../../../entities/Specification';
import { ISpecificationsRepositories } from '../../../repositories/ISpecificationsRepositories';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepositories: ISpecificationsRepositories
  ) {}

  async execute(): Promise<Specification[]> {
    return await this.specificationsRepositories.listSpecifications();
  }
}

export { ListSpecificationsUseCase };

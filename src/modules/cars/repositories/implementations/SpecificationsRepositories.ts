import { Repository, getRepository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ISpecificationDTO,
  ISpecificationsRepositories,
} from '../ISpecificationsRepositories';

class SpecificationsRepositories implements ISpecificationsRepositories {
  private respository: Repository<Specification>;

  constructor() {
    this.respository = getRepository(Specification);
  }

  async findBySpecificatoin(name: string): Promise<Specification> {
    return await this.respository.findOne({ name });
  }

  async create({
    name,
    description,
  }: ISpecificationDTO): Promise<Specification> {
    const specification = this.respository.create({
      name,
      description,
    });

    return await this.respository.save(specification);
  }

  async listSpecifications(): Promise<Specification[]> {
    return await this.respository.find();
  }
}
export { SpecificationsRepositories };

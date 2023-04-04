import { Specification } from '../../model/Specification';
import {
  ISpecificationDTO,
  ISpecificationsRepositories,
} from '../ISpecificationsRepositories';

class SpecificationsRepositories implements ISpecificationsRepositories {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ISpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }

  findBySpecificatoin(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  listSpecifications(): Specification[] {
    return this.specifications;
  }
}
export { SpecificationsRepositories };

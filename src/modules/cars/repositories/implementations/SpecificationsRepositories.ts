import { Specification } from '../../entities/Specification';
import {
  ISpecificationDTO,
  ISpecificationsRepositories,
} from '../ISpecificationsRepositories';

class SpecificationsRepositories implements ISpecificationsRepositories {
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepositories;

  constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepositories {
    if (!SpecificationsRepositories.INSTANCE)
      SpecificationsRepositories.INSTANCE = new SpecificationsRepositories();

    return SpecificationsRepositories.INSTANCE;
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

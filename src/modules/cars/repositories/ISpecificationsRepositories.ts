import { Specification } from '../entities/Specification';

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepositories {
  findBySpecificatoin(name: string): Specification;
  create({ name, description }: ISpecificationDTO): Specification;
  listSpecifications(): Specification[];
}
export { ISpecificationsRepositories, ISpecificationDTO };

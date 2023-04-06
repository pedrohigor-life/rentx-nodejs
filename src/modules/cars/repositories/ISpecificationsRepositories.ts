import { Specification } from '../entities/Specification';

interface ISpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepositories {
  findBySpecificatoin(name: string): Promise<Specification>;
  create({ name, description }: ISpecificationDTO): Promise<Specification>;
  listSpecifications(): Promise<Specification[]>;
}
export { ISpecificationsRepositories, ISpecificationDTO };

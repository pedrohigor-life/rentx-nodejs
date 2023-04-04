import { Category } from '../../model/Category';
import {
  ISpecificationDTO,
  ISpecificationsRepositories,
} from '../ISpecificationsRepositories';

class SpecificationsRepositories implements ISpecificationsRepositories {
  findBySpecificatoin(name: string): Category {
    throw new Error('Method not implemented.');
  }
  create({ name, description }: ISpecificationDTO): Category {
    throw new Error('Method not implemented.');
  }
  listSpecifications(): Category[] {
    throw new Error('Method not implemented.');
  }
}
export { SpecificationsRepositories };

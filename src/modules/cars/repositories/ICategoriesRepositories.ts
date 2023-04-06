import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepositories {
  findByCategory(name: string): Promise<Category>;
  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
  listCategories(): Promise<Category[]>;
}
export { ICategoriesRepositories, ICreateCategoryDTO };

import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepositories {
  findByCategory(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): Category;
  listCategories(): Category[];
}
export { ICategoriesRepositories, ICreateCategoryDTO };

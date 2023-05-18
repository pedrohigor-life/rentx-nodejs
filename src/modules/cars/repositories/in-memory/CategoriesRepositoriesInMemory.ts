import { Category } from '../../entities/Category';
import {
  ICategoriesRepositories,
  ICreateCategoryDTO,
} from '../ICategoriesRepositories';

class CategoriesRepositoriesInMemory implements ICategoriesRepositories {
  private categories: Category[] = [];

  async findByCategory(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);

    return category;
  }

  async listCategories(): Promise<Category[]> {
    return this.categories;
  }
}

export { CategoriesRepositoriesInMemory };

import { Category } from '../../entities/Category';
import {
  ICategoriesRepositories,
  ICreateCategoryDTO,
} from '../ICategoriesRepositories';

import { Repository, getRepository } from 'typeorm';

class CategoriesRepositories implements ICategoriesRepositories {
  private respository: Repository<Category>;

  constructor() {
    this.respository = getRepository(Category);
  }

  async findByCategory(name: string): Promise<Category> {
    return this.respository.findOne({ name });
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.respository.create({
      name,
      description,
    });

    await this.respository.save(category);

    return category;
  }

  async listCategories(): Promise<Category[]> {
    const categories = this.respository.find();

    return categories;
  }
}

export { CategoriesRepositories };

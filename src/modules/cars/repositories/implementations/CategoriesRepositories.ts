import { Category } from '../../model/Category';
import {
  ICategoriesRepositories,
  ICreateCategoryDTO,
} from '../ICategoriesRepositories';

class CategoriesRepositories implements ICategoriesRepositories {
  private categories: Category[];

  private static INSTANCE: CategoriesRepositories;

  constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepositories {
    if (!CategoriesRepositories.INSTANCE) {
      CategoriesRepositories.INSTANCE = new CategoriesRepositories();
    }

    return CategoriesRepositories.INSTANCE;
  }

  findByCategory(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }
  listCategories(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepositories };

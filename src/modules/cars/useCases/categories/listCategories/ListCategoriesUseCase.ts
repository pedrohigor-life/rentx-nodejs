import { Category } from '../../../entities/Category';
import { ICategoriesRepositories } from '../../../repositories/ICategoriesRepositories';

class ListCategoriesUseCase {
  constructor(private categoriesRepositories: ICategoriesRepositories) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepositories.listCategories();
  }
}
export { ListCategoriesUseCase };

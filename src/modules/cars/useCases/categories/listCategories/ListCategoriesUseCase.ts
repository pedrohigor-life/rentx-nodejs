import { Category } from '../../../model/Category';
import { ICategoriesRepositories } from '../../../repositories/ICategoriesRepositories';

class ListCategoriesUseCase {
  constructor(private categoriesRepositories: ICategoriesRepositories) {}

  execute(): Category[] {
    return this.categoriesRepositories.listCategories();
  }
}
export { ListCategoriesUseCase };

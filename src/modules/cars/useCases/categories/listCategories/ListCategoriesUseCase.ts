import { inject, injectable } from 'tsyringe';
import { Category } from '../../../entities/Category';
import { ICategoriesRepositories } from '../../../repositories/ICategoriesRepositories';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositories: ICategoriesRepositories
  ) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepositories.listCategories();
  }
}
export { ListCategoriesUseCase };

import { Category } from '../../../entities/Category';
import { ICategoriesRepositories } from '../../../repositories/ICategoriesRepositories';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepositories: ICategoriesRepositories) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryAlreadyexists =
      await this.categoriesRepositories.findByCategory(name);

    if (categoryAlreadyexists) throw new Error('Category already exists');

    return await this.categoriesRepositories.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };

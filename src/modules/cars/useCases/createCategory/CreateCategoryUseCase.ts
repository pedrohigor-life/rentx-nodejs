import { Category } from '../../model/Category';
import { ICategoriesRepositories } from '../../repositories/ICategoriesRepositories';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepositories: ICategoriesRepositories) {}

  execute({ name, description }: IRequest): Category {
    const categoryAlreadyexists =
      this.categoriesRepositories.findByCategory(name);

    if (categoryAlreadyexists) throw new Error('Category already exists');

    const data = this.categoriesRepositories.create({ name, description });

    return data;
  }
}

export { CreateCategoryUseCase };

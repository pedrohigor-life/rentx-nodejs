import { inject, injectable } from 'tsyringe';
import { Category } from '../../../entities/Category';
import { ICategoriesRepositories } from '../../../repositories/ICategoriesRepositories';
import { AppError } from '../../../../../errors/AppErrors';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositories: ICategoriesRepositories
  ) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryAlreadyexists =
      await this.categoriesRepositories.findByCategory(name);

    if (categoryAlreadyexists)
      throw new AppError('Category already exists', 401);

    return await this.categoriesRepositories.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };

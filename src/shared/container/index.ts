import { container } from 'tsyringe';
import { ICategoriesRepositories } from '../../modules/cars/repositories/ICategoriesRepositories';
import { CategoriesRepositories } from '../../modules/cars/repositories/implementations/CategoriesRepositories';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepositories
);

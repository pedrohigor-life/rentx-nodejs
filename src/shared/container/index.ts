import { container } from 'tsyringe';
import { ICategoriesRepositories } from '../../modules/cars/repositories/ICategoriesRepositories';
import { CategoriesRepositories } from '../../modules/cars/repositories/implementations/CategoriesRepositories';
import { ISpecificationsRepositories } from '../../modules/cars/repositories/ISpecificationsRepositories';
import { SpecificationsRepositories } from '../../modules/cars/repositories/implementations/SpecificationsRepositories';
import { IUserRepositories } from '../../modules/accounts/repositories/IUsersRepositories';
import { UsersRepositories } from '../../modules/accounts/repositories/implementations/UsersRepositories';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepositories
);

container.registerSingleton<ISpecificationsRepositories>(
  'SpecificationsRepository',
  SpecificationsRepositories
);

container.registerSingleton<IUserRepositories>(
  'UserRepository',
  UsersRepositories
);

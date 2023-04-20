import { container } from 'tsyringe';

import { ICategoriesRepositories } from '../../modules/cars/repositories/ICategoriesRepositories';
import { CategoriesRepositories } from '../../modules/cars/repositories/implementations/CategoriesRepositories';
import { ISpecificationsRepositories } from '../../modules/cars/repositories/ISpecificationsRepositories';
import { SpecificationsRepositories } from '../../modules/cars/repositories/implementations/SpecificationsRepositories';
import { IUserRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository';

container.registerSingleton<ICategoriesRepositories>(
  'CategoriesRepository',
  CategoriesRepositories
);

container.registerSingleton<ISpecificationsRepositories>(
  'SpecificationsRepository',
  SpecificationsRepositories
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

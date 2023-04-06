import { CategoriesRepositories } from '../../../repositories/implementations/CategoriesRepositories';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export default (): ImportCategoryController => {
  const categoriesRepository = new CategoriesRepositories();
  const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
  );

  return importCategoryController;
};

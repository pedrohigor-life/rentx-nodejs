import multer from 'multer';

import { Router } from 'express';

import listCategoriesController from '../../cars/useCases/categories/listCategories';
import { CreateCategoryController } from '../../cars/useCases/categories/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../../cars/useCases/categories/importCategory/ImportCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle
);

categoriesRoutes.get('/', (request, response) => {
  listCategoriesController().handle(request, response);
});

export { categoriesRoutes };

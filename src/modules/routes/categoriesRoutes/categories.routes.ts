import multer from 'multer';

import { Router } from 'express';

import listCategoriesController from '../../cars/useCases/categories/listCategories';
import importCategoryController from '../../cars/useCases/categories/importCategory';
import { CreateCategoryController } from '../../cars/useCases/categories/createCategory/CreateCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  importCategoryController().handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  listCategoriesController().handle(request, response);
});

export { categoriesRoutes };

import multer from 'multer';

import { Router } from 'express';

import { createCategoryController } from '../../cars/useCases/categories/createCategory';
import { listCategoriesController } from '../../cars/useCases/categories/listCategories';
import { importCategoryController } from '../../cars/useCases/categories/importCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  listCategoriesController.handle(request, response);
});

export { categoriesRoutes };

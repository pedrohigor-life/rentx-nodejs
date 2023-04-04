import { Router } from 'express';

import { createCategoryController } from '../../cars/useCases/categories/createCategory';
import { listCategoriesController } from '../../cars/useCases/categories/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  listCategoriesController.handle(request, response);
});

export { categoriesRoutes };

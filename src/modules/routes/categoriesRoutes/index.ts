import { Router } from 'express';

import { createCategoryController } from '../../cars/useCases/createCategory';
import { listCategoriesController } from '../../cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  listCategoriesController.handle(request, response);
});

export { categoriesRoutes };

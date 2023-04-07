import multer from 'multer';

import { Router } from 'express';

import { CreateCategoryController } from '../../cars/useCases/categories/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../../cars/useCases/categories/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../../cars/useCases/categories/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle
);

categoriesRoutes.get('/', listCategoryController.handle);

export { categoriesRoutes };

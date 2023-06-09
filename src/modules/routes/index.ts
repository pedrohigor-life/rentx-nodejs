import { Router } from 'express';
import { categoriesRoutes } from './categoriesRoutes/categories.routes';
import { specificationsRoutes } from './specificationRoutes/specificaitons.routes';
import { usersRoutes } from './users/users.routes';
import { authenticateRoutes } from './authenticateRoutes/authenticate.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/specifications', specificationsRoutes);
routes.use('/users', usersRoutes);
routes.use(authenticateRoutes);

export { routes };

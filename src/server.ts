import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import { categoriesRoutes } from './modules/routes/categoriesRoutes/categories.routes';
import { specificationsRoutes } from './modules/routes/specificationRoutes/specificaitons.routes';

/**
 * Database
 */
import './database';

/**
 * Container
 */
import './shared/container';

/**
 * Express
 */
const app = express();

app.use(express.json());

/**
 * Swagger
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

/**
 * Routes
 */
app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => {
  console.log('[APP] Server is running ...');
});

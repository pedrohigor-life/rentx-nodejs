import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import { routes } from './modules/routes';

/**
 * Database
 */
import './database';

/**
 * Container tSyringe
 */
import './shared/container';

/**
 * Express
 */
const app = express();
app.use(express.json());

/**
 * Routes
 */
app.use(routes);

/**
 * Swagger
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => {
  console.log('[APP] Server is running ...');
});

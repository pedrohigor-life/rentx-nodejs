import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import cors from 'cors';

import { routes } from './modules/routes';

/**
 * Database
 */
import './database';

/**
 * Container tSyringe
 */
import './shared/container';
import { AppError } from './errors/AppErrors';

/**
 * Express
 */
const app = express();
app.use(express.json());

/**
 * Cors
 */
app.use(
  cors({
    origin: '*',
  })
);

/**
 * Routes
 */
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError)
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });

    return response.status(500).json({
      status: 'error',
      message: `Internal server error -> ${err.message}`,
    });
  }
);

/**
 * Swagger
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => {
  console.log('[APP] Server is running ...');
});

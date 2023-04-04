import express from 'express';

/**
 * Routes
 */
import { categoriesRoutes } from './modules/routes/categoriesRoutes';

const app = express();

app.use(express.json());
app.use('/categories', categoriesRoutes);

app.listen(3333, () => {
  console.log('[APP] Server is runnin ...');
});

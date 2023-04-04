import express from 'express';

/**
 * Routes
 */
import { categoriesRoutes } from './modules/routes/categoriesRoutes';
import { specificationsRoutes } from './modules/routes/specificationRoutes';

const app = express();

app.use(express.json());
app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => {
  console.log('[APP] Server is runnin ...');
});

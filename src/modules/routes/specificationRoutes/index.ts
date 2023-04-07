import { Router } from 'express';

import createSpecificationController from '../../cars/useCases/specifications/createSpecifications';
import listSpecificationsController from '../../cars/useCases/specifications/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  createSpecificationController().handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  listSpecificationsController().handle(request, response);
});

export { specificationsRoutes };

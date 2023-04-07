import { Router } from 'express';

import { CreateSpecificationController } from '../../cars/useCases/specifications/createSpecifications/CreateSpecificationController';
import { ListSpecificationsController } from '../../cars/useCases/specifications/listSpecifications/LlstSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };

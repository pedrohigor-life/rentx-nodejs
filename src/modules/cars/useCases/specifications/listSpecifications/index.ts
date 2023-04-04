import { SpecificationsRepositories } from '../../../repositories/implementations/SpecificationsRepositories';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';
import { ListSpecificationsController } from './LlstSpecificationsController';

const specificationsRepositories = SpecificationsRepositories.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationsRepositories
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };

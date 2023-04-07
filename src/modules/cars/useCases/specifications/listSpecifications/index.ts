import { SpecificationsRepositories } from '../../../repositories/implementations/SpecificationsRepositories';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';
import { ListSpecificationsController } from './LlstSpecificationsController';

export default (): ListSpecificationsController => {
  const specificationsRepositories = new SpecificationsRepositories();
  const listSpecificationsUseCase = new ListSpecificationsUseCase(
    specificationsRepositories
  );

  const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase
  );

  return listSpecificationsController;
};

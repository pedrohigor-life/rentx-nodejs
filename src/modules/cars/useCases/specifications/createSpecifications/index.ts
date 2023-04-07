import { SpecificationsRepositories } from '../../../repositories/implementations/SpecificationsRepositories';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export default (): CreateSpecificationController => {
  const specificationsRepositories = new SpecificationsRepositories();
  const createSpecificationsUseCase = new CreateSpecificationUseCase(
    specificationsRepositories
  );

  const createSpecificationController = new CreateSpecificationController(
    createSpecificationsUseCase
  );

  return createSpecificationController;
};

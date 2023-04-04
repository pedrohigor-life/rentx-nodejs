import { SpecificationsRepositories } from '../../../repositories/implementations/SpecificationsRepositories';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepositories = SpecificationsRepositories.getInstance();
const createSpecificationsUseCase = new CreateSpecificationUseCase(
  specificationsRepositories
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationsUseCase
);

export { createSpecificationController };

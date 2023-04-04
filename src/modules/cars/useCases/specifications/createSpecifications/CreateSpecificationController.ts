import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(
    private createSpecificationsUseCase: CreateSpecificationUseCase
  ) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const data = this.createSpecificationsUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(data);
  }
}
export { CreateSpecificationController };

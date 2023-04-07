import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { container } from 'tsyringe';

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;

      const createSpecificationsUseCase = container.resolve(
        CreateSpecificationUseCase
      );

      const data = await createSpecificationsUseCase.execute({
        name,
        description,
      });

      return response.status(201).json(data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { CreateSpecificationController };

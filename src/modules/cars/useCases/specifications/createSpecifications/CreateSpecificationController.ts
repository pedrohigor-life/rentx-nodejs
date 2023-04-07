import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(
    private createSpecificationsUseCase: CreateSpecificationUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;

      const data = await this.createSpecificationsUseCase.execute({
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

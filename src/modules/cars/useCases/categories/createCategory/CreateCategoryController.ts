import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { container } from 'tsyringe';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

      const data = await createCategoryUseCase.execute({ name, description });

      return response.status(201).json(data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { CreateCategoryController };

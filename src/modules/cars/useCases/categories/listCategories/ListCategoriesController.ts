import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { container } from 'tsyringe';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listCategoryUseCase = container.resolve(ListCategoriesUseCase);

      const data = await listCategoryUseCase.execute();

      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListCategoriesController };

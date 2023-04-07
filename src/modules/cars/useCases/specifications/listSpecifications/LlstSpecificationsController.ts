import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';
import { container } from 'tsyringe';

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listSpecificationsUseCase = container.resolve(
        ListSpecificationsUseCase
      );

      const data = await listSpecificationsUseCase.execute();

      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { ListSpecificationsController };

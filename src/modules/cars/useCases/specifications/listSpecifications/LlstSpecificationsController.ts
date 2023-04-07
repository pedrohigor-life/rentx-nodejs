import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private specificationsUseCase: ListSpecificationsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.specificationsUseCase.execute();

      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { ListSpecificationsController };

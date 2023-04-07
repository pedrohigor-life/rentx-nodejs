import fs from 'fs';
import { inject, injectable } from 'tsyringe';
import { parse } from 'csv-parse';

import { ICategoriesRepositories } from '../../../repositories/ICategoriesRepositories';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepositories: ICategoriesRepositories
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];

      const stream = fs.createReadStream(file.path);

      const parser = parse({
        delimiter: ',',
      });

      stream.pipe(parser);

      parser
        .on('data', async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async (category) => {
      const { name, description } = category;

      const categoryAlreadyExists =
        await this.categoriesRepositories.findByCategory(name);

      if (!categoryAlreadyExists)
        this.categoriesRepositories.create({ name, description });
    });
  }
}

export { ImportCategoryUseCase };

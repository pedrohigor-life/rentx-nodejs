import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoriesRepositories } from '../../../repositories/ICategoriesRepositories';

class ImportCategoryUseCase {
  constructor(private categoriesRepositories: ICategoriesRepositories) {}

  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);

    const parser = parse({
      delimiter: ',',
    });

    stream.pipe(parser);

    parser.on('data', async (line) => {
      this.categoriesRepositories.create({
        name: line[0],
        description: line[1],
      });
    });
  }
}

export { ImportCategoryUseCase };

import { PostgresDataSource } from './datasources/PostgresDataSource';

PostgresDataSource.initialize().then(() => {
  console.log(`Database postgres is connected!`);
});

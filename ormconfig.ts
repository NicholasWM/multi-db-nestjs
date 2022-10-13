import { DataSource } from 'typeorm';
import { TypeOrmModels } from './src/@common/infra/db/typeorm/models';

export const connectionSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 8801,
  username: 'root',
  password: 'study_projects',
  database: 'backoffice_war_typeorm',
  entities: TypeOrmModels,
  synchronize: true,
  // debug: true,
  logging: ['query', 'error'],
  migrations: ['./dist/@common/infra/db/typeorm/migrations/*.ts'],
  // cli: {
  //   migrationsDir: 'migration',
  // }
});

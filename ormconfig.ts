import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { DataSource } from 'typeorm';
import { TypeOrmModels } from './src/@common/infra/db/typeorm/models';

export const connectionSource = new DataSource({
  name: AVAILABLE_DATA_SOURCES.TYPEORM.MY_SQL,
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

export const connectionSourcePg = new DataSource({
  name: AVAILABLE_DATA_SOURCES.TYPEORM.POSTGRES,
  type: 'postgres',
  host: 'localhost',
  port: 8803,
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

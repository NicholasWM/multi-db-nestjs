import {
  ProviderImplementation,
  ORM_AVAILABLE_DATA_SOURCES,
} from '@/@common/generics/generic.provider';
import { mongooseDatabaseProviders } from '@/@common/infra/db/mongoose/database.provider';
import { sequelizeDatabaseProviders } from '@/@common/infra/db/sequelize/database.provider';
import { typeOrmDatabaseProviders } from '@/@common/infra/db/typeorm/database.provider';

export const databaseProviders: ProviderImplementation = {
  [ORM_AVAILABLE_DATA_SOURCES.IN_MEMORY]: [],
  [ORM_AVAILABLE_DATA_SOURCES.SEQUELIZE]: sequelizeDatabaseProviders,
  [ORM_AVAILABLE_DATA_SOURCES.TYPEORM]: typeOrmDatabaseProviders,
  [ORM_AVAILABLE_DATA_SOURCES.MONGOOSE]: mongooseDatabaseProviders,
};

export const DatabaseStackProviders = [
  ...databaseProviders[ORM_AVAILABLE_DATA_SOURCES.MONGOOSE],
  ...databaseProviders[ORM_AVAILABLE_DATA_SOURCES.TYPEORM],
  ...databaseProviders[ORM_AVAILABLE_DATA_SOURCES.SEQUELIZE],
  ...databaseProviders[ORM_AVAILABLE_DATA_SOURCES.IN_MEMORY],
];

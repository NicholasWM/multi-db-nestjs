import {
  ProviderImplementation,
  ORM_AVAILABLE_DATA_SOURCES,
  ORM_AVAILABLE_DATA_SOURCES_ORM,
} from '@/@common/generics/generic.provider';

import { typeOrmDatabaseProviders } from '@/@common/infra/db/typeorm/database.provider';
import { mongooseDatabaseProviders } from '@/@common/infra/db/mongoose/database.provider';
import { sequelizeDatabaseProviders } from '@/@common/infra/db/sequelize/databases';

export const databaseProviders: ProviderImplementation = {
  [ORM_AVAILABLE_DATA_SOURCES_ORM.IN_MEMORY]: [],
  [ORM_AVAILABLE_DATA_SOURCES_ORM.SEQUELIZE]: sequelizeDatabaseProviders,
  [ORM_AVAILABLE_DATA_SOURCES_ORM.MONGOOSE]: mongooseDatabaseProviders,
  [ORM_AVAILABLE_DATA_SOURCES_ORM.TYPEORM]: typeOrmDatabaseProviders,
};

export const DatabaseStackProviders = [
  ...databaseProviders[ORM_AVAILABLE_DATA_SOURCES.TYPEORM],
  ...databaseProviders[ORM_AVAILABLE_DATA_SOURCES.MONGOOSE],
  // ...databaseProviders[ORM_AVAILABLE_DATA_SOURCES.SEQUELIZE],
  ...databaseProviders[ORM_AVAILABLE_DATA_SOURCES.IN_MEMORY],
];

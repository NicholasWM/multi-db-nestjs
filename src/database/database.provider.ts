import { ProviderImplementation } from '@/@common/generics/generic.provider';
import { sequelizeDatabaseProviders } from '@/@common/infra/db/sequelize/database.provider';
import { typeOrmDatabaseProviders } from '@/@common/infra/db/typeorm/database.provider';

export const databaseProviders: ProviderImplementation = {
  inMemory: [],
  sequelize: sequelizeDatabaseProviders,
  typeorm: typeOrmDatabaseProviders,
};

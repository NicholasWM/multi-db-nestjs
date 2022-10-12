import { ProviderImplementation } from '@/@common/generics/generic.provider';
import { sequelizeDatabaseProviders } from '@/@common/infra/db/sequelize/database.provider';

export const databaseProviders: ProviderImplementation = {
  inMemory: [],
  sequelize: sequelizeDatabaseProviders,
};

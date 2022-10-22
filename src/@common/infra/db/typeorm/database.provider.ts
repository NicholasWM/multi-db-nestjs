import { ORM_AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { connectionSource } from 'ormconfig';

export const typeOrmDatabaseProviders = [
  {
    provide: ORM_AVAILABLE_DATA_SOURCES.TYPEORM,
    useFactory: async () => {
      const dataSource = connectionSource;
      return dataSource.initialize();
    },
  },
];

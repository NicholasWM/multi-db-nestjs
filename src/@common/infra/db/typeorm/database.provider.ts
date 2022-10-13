import { connectionSource } from 'ormconfig';

export const typeOrmDatabaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = connectionSource;
      return dataSource.initialize();
    },
  },
];

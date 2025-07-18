import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { connectionSource, connectionSourcePg } from '../../../../../ormconfig';

export const typeOrmDatabaseProviders = [
  {
    // provide: ORM_AVAILABLE_DATA_SOURCES_ORM.TYPEORM,
    provide: AVAILABLE_DATA_SOURCES.TYPEORM.MY_SQL,
    useFactory: async () => {
      const dataSource = connectionSource;
      console.log('Default ', connectionSource.driver.database);
      return dataSource.initialize();
    },
    // inject: [AVAILABLE_DATA_SOURCES.TYPEORM.MY_SQL],
  },
  {
    provide: AVAILABLE_DATA_SOURCES.TYPEORM.POSTGRES,
    useFactory: async () => {
      const dataSource = connectionSourcePg;
      return dataSource.initialize();
    },
    // inject: [AVAILABLE_DATA_SOURCES.TYPEORM.POSTGRES],
  },
];

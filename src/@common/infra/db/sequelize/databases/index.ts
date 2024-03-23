import { Sequelize } from 'sequelize-typescript';
import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { ContactModelPG } from '@/contacts/@core/infra/db/sequelize/pg/contact.model';

export const connectionSource = new Sequelize({
  define: { name: { singular: AVAILABLE_DATA_SOURCES.SEQUELIZE.MY_SQL } },
  dialect: 'mysql',
  host: 'localhost',
  port: 8801,
  username: 'root',
  password: 'study_projects',
  database: 'backoffice_war_sequelize',
  models: [ContactModelPG],
  dialectOptions: {
    application_name: AVAILABLE_DATA_SOURCES.SEQUELIZE.MY_SQL,
  },
});

export const connectionSourcePg = new Sequelize({
  define: { name: { singular: AVAILABLE_DATA_SOURCES.SEQUELIZE.POSTGRES } },
  dialect: 'postgres',
  host: 'localhost',
  port: 8803,
  username: 'root',
  models: [ContactModelPG],
  password: 'study_projects',
  database: 'backoffice_war_sequelize',
  dialectOptions: {
    application_name: AVAILABLE_DATA_SOURCES.SEQUELIZE.POSTGRES,
  },
});

export const sequelizeDatabaseProviders = [
  {
    // provide: ORM_AVAILABLE_DATA_SOURCES_ORM.TYPEORM,
    provide: AVAILABLE_DATA_SOURCES.SEQUELIZE.MY_SQL,
    useFactory: async () => {
      const dataSource = connectionSource;
      // console.log('Default ', connectionSource.driver.database);
      dataSource.sync();
      return dataSource;

      // return dataSource.initialize();
    },
    // inject: [AVAILABLE_DATA_SOURCES.TYPEORM.MY_SQL],
  },
  {
    provide: AVAILABLE_DATA_SOURCES.SEQUELIZE.POSTGRES,
    useFactory: async () => {
      const dataSource = connectionSourcePg;
      return dataSource.sync();
    },
    // inject: [AVAILABLE_DATA_SOURCES.TYPEORM.POSTGRES],
  },

];

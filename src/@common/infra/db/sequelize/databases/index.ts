import { Sequelize } from 'sequelize-typescript';
import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import { ContactModelPG } from '@/contacts/@core/infra/db/sequelize/pg/contact.model';

export const connectionSource = new Sequelize({
  define: { name: { singular: AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT } },
  dialect: 'mysql',
  host: 'localhost',
  port: 8801,
  username: 'root',
  password: 'study_projects',
  database: 'backoffice_war_sequelize',
  models: [ContactModelPG],
  dialectOptions: {
    application_name: AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT,
  },
});

export const connectionSourcePg = new Sequelize({
  define: { name: { singular: AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2 } },
  dialect: 'postgres',
  host: 'localhost',
  port: 8803,
  username: 'root',
  models: [ContactModelPG],
  password: 'study_projects',
  database: 'backoffice_war_sequelize',
  dialectOptions: {
    application_name: AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2,
  },
});

export const sequelizeDatabaseProviders = [
  {
    // provide: ORM_AVAILABLE_DATA_SOURCES_ORM.TYPEORM,
    provide: AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT,
    useFactory: async () => {
      const dataSource = connectionSource;
      // console.log('Default ', connectionSource.driver.database);
      dataSource.sync();
      return dataSource

      // return dataSource.initialize();
    },
    // inject: [AVAILABLE_DATA_SOURCES.TYPEORM.DEFAULT],
  },
  {
    provide: AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2,
    useFactory: async () => {
      const dataSource = connectionSourcePg;
      return dataSource.sync();
    },
    // inject: [AVAILABLE_DATA_SOURCES.TYPEORM.DB_2],
  },

];

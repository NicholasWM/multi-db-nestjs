import { Sequelize } from 'sequelize-typescript';
import { ContactModel } from '@/contacts/@core/infra/db/sequelize/contact.model';
import { ORM_AVAILABLE_DATA_SOURCES_ORM } from '@/@common/generics/generic.provider';

export const sequelizeDatabaseProviders = [
  {
    provide: ORM_AVAILABLE_DATA_SOURCES_ORM.SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 8801,
        username: 'root',
        password: 'study_projects',
        database: 'backoffice_war_sequelize',
      });
      sequelize.addModels([ContactModel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

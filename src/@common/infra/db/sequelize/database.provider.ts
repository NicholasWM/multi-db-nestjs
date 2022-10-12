import { ContactModel } from '@/contacts/@core/infra/db/sequelize/contact.model';
import { Sequelize } from 'sequelize-typescript';

export const sequelizeDatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 8801,
        username: 'root',
        password: 'study_projects',
        database: 'backoffice_war',
      });
      sequelize.addModels([ContactModel]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

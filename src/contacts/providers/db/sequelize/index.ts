import { FactoryProvider } from '@nestjs/common';
import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';

import {
  ContactRepositorySequelize,
  ContactRepositorySequelize_DB_2,
  ContactRepositorySequelize_DEFAULT,
} from '@/contacts/@core/domain/repository/contact.repository';
import { ContactsSequelizeRepository } from '@/contacts/@core/infra/db/sequelize/contact.implementation.repository';
import { Sequelize } from 'sequelize-typescript';

interface IProvider {
  [AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT]?: FactoryProvider<any>;
  [AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2]?: FactoryProvider<any>;
}

export const sequelizeContactProviders: IProvider = {
  [AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT]: {
    provide: ContactRepositorySequelize_DEFAULT,
    useFactory: async (connectionSource: Sequelize) => {
      // console.log(connectionSource.modelManager);
      const ContactsModel = connectionSource.modelManager.models[0];
      console.log('AAAAAAAAAAAAAAAAAa 1', connectionSource.options);
      // console.log(ContactsModel.sequelize);
      // console.log(ContactsModel.options);
      return new ContactsSequelizeRepository(ContactsModel);
    },
    inject: [AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT],
  },
  [AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2]: {
    provide: ContactRepositorySequelize_DB_2,
    useFactory: async (connectionSource: Sequelize) => {
      // console.log(connectionSource.modelManager);

      console.log('AAAAAAAAAAAAAAAAAa 2', connectionSource.options);
      const ContactsModel = connectionSource.modelManager.models[0];
      // console.log(ContactsModel.options);
      return new ContactsSequelizeRepository(ContactsModel);
    },
    inject: [AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2],
  },
};

import { FactoryProvider } from '@nestjs/common';
import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';

import {
  ContactRepositorySequelize_DB_2,
  ContactRepositorySequelize_DEFAULT,
} from '@/contacts/@core/domain/repository/contact.repository';
import { ContactsSequelizeRepository } from '@/contacts/@core/infra/db/sequelize/contact.implementation.repository';
import { Sequelize } from 'sequelize-typescript';
import { buildInjectorByORM, repositoryBuilderByORM } from '@/database/helpers';

interface IProvider {
  [AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT]?: FactoryProvider<any>;
  [AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2]?: FactoryProvider<any>;
}

export const sequelizeContactProviders: IProvider = {
  [AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT]: {
    provide: ContactRepositorySequelize_DEFAULT,
    useFactory: async (connectionSource: Sequelize) => {
      return new ContactsSequelizeRepository(
        repositoryBuilderByORM(connectionSource, 'SEQUELIZE')('contacts'),
      );
    },
    inject: [
      buildInjectorByORM(AVAILABLE_DATA_SOURCES.SEQUELIZE.DEFAULT, 'SEQUELIZE'),
    ],
  },
  [AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2]: {
    provide: ContactRepositorySequelize_DB_2,
    useFactory: async (connectionSource: Sequelize) => {
      const ContactsModel = repositoryBuilderByORM(
        connectionSource,
        'SEQUELIZE',
      )('contacts');
      return new ContactsSequelizeRepository(ContactsModel);
    },
    inject: [
      buildInjectorByORM(AVAILABLE_DATA_SOURCES.SEQUELIZE.DB_2, 'SEQUELIZE'),
    ],
  },
};

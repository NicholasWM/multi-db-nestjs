import { DataSource } from 'typeorm';

import { FactoryProvider } from '@nestjs/common';

import { AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';

import {
  ContactRepositoryTypeORM_MySQL,
  ContactRepositoryTypeORM_DB_2,
} from '@/contacts/@core/domain/repository/contact.repository';
import { ContactsTypeOrmRepositoryImplementation } from '@/contacts/@core/infra/db/typeorm/contact.implementation.repository';

import { ContactModel } from '@/contacts/@core/infra/db/typeorm/contact.model';

interface IProvider {
  [AVAILABLE_DATA_SOURCES.TYPEORM.MY_SQL]: FactoryProvider<any>;
  [AVAILABLE_DATA_SOURCES.TYPEORM.DB_2]: FactoryProvider<any>;
}

export const typeOrmContactProviders: IProvider = {
  [AVAILABLE_DATA_SOURCES.TYPEORM.MY_SQL]: {
    provide: ContactRepositoryTypeORM_MySQL,
    useFactory: (connectionSource: DataSource) => {
      const repo = connectionSource.getRepository(ContactModel);
      return new ContactsTypeOrmRepositoryImplementation(repo);
    },
    inject: [AVAILABLE_DATA_SOURCES.TYPEORM.MY_SQL],
  },
  [AVAILABLE_DATA_SOURCES.TYPEORM.DB_2]: {
    provide: ContactRepositoryTypeORM_DB_2,
    useFactory: (connectionSource: DataSource) => {
      const repo = connectionSource.getRepository(ContactModel);
      return new ContactsTypeOrmRepositoryImplementation(repo);
    },
    inject: [AVAILABLE_DATA_SOURCES.TYPEORM.DB_2],
  },
};

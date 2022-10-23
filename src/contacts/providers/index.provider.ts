import { Connection } from 'mongoose';
import {
  ORM_AVAILABLE_DATA_SOURCES_ORM,
  AVAILABLE_DATA_SOURCES,
} from '@/@common/generics/generic.provider';

import {
  ContactRepositoryInMemory,
  ContactRepositoryMongoose,
  ContactRepositorySequelize,
  ContactRepositoryTypeORM_DB_2,
  ContactRepositoryTypeORM_DEFAULT,
} from '../@core/domain/repository/contact.repository';

import { ContactsInMemoryRepository } from '../@core/infra/db/in-memory/contacts.implementation.repository';
import { ContactsSequelizeRepository } from '../@core/infra/db/sequelize/contact.implementation.repository';

import { ContactsTypeOrmRepositoryImplementation } from '../@core/infra/db/typeorm/contact.implementation.repository';
import { ContactsMongooseRepositoryImplementation } from '../@core/infra/db/mongoose/contact.implementation.repository';

import { ContactSchema } from '../@core/infra/db/mongoose/contact.schema';
import { DataSource } from 'typeorm';
import { ContactModel } from '../@core/infra/db/typeorm/contact.model';

const contactRepositoryProviders: any = {
  [ORM_AVAILABLE_DATA_SOURCES_ORM.IN_MEMORY]: {
    provide: ContactRepositoryInMemory,
    useClass: ContactsInMemoryRepository,
  },
  [ORM_AVAILABLE_DATA_SOURCES_ORM.SEQUELIZE]: {
    provide: ContactRepositorySequelize,
    useClass: ContactsSequelizeRepository,
  },
  [AVAILABLE_DATA_SOURCES.TYPEORM.DEFAULT]: {
    provide: ContactRepositoryTypeORM_DEFAULT,
    useFactory: (connectionSource: DataSource) => {
      const repo = connectionSource.getRepository(ContactModel);
      return new ContactsTypeOrmRepositoryImplementation(repo);
    },
    inject: [AVAILABLE_DATA_SOURCES.TYPEORM.DEFAULT],
  },
  [AVAILABLE_DATA_SOURCES.TYPEORM.DB_2]: {
    provide: ContactRepositoryTypeORM_DB_2,
    useFactory: (connectionSource: DataSource) => {
      const repo = connectionSource.getRepository(ContactModel);
      return new ContactsTypeOrmRepositoryImplementation(repo);
    },
    inject: [AVAILABLE_DATA_SOURCES.TYPEORM.DB_2],
  },
  [ORM_AVAILABLE_DATA_SOURCES_ORM.MONGOOSE]: {
    provide: ContactRepositoryMongoose,
    useFactory: async (connection: Connection) => {
      const model = connection.model('Contact', ContactSchema);
      const implementation = new ContactsMongooseRepositoryImplementation(
        model,
      );
      return implementation;
    },
    inject: [ORM_AVAILABLE_DATA_SOURCES_ORM.MONGOOSE],
  },
};

export const contactProviders = [
  // contactRepositoryProviders[ORM_AVAILABLE_DATA_SOURCES_ORM.MONGOOSE],
  contactRepositoryProviders[AVAILABLE_DATA_SOURCES.TYPEORM.DB_2],
  contactRepositoryProviders[AVAILABLE_DATA_SOURCES.TYPEORM.DEFAULT],
];

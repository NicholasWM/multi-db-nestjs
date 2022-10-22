import { Connection } from 'mongoose';
import {
  ORM_AVAILABLE_DATA_SOURCES,
  ProviderImplementation,
  DataSourceImplementationTypes,
} from '@/@common/generics/generic.provider';

import {
  ContactRepositoryTypeORM,
  ContactRepositoryInMemory,
  ContactRepositoryMongoose,
  ContactRepositorySequelize,
} from '../@core/domain/repository/contact.repository';

import { ContactsInMemoryRepository } from '../@core/infra/db/in-memory/contacts.implementation.repository';
import { ContactsSequelizeRepository } from '../@core/infra/db/sequelize/contact.implementation.repository';

import { ContactsMongooseRepositoryImplementation } from '../@core/infra/db/mongoose/contact.implementation.repository';
import { ContactsTypeOrmRepositoryImplementation } from '../@core/infra/db/typeorm/contact.implementation.repository';
import { ContactSchema } from '../@core/infra/db/mongoose/contact.schema';

const contactRepositoryProviders: ProviderImplementation = {
  [ORM_AVAILABLE_DATA_SOURCES.IN_MEMORY]: {
    provide: ContactRepositoryInMemory,
    useClass: ContactsInMemoryRepository,
  },
  [ORM_AVAILABLE_DATA_SOURCES.SEQUELIZE]: {
    provide: ContactRepositorySequelize,
    useClass: ContactsSequelizeRepository,
  },
  [ORM_AVAILABLE_DATA_SOURCES.TYPEORM]: {
    provide: ContactRepositoryTypeORM,
    useClass: ContactsTypeOrmRepositoryImplementation,
  },
  [ORM_AVAILABLE_DATA_SOURCES.MONGOOSE]: {
    provide: ContactRepositoryMongoose,
    useFactory: async (connection: Connection) => {
      const model = connection.model('Contact', ContactSchema);
      const implementation = new ContactsMongooseRepositoryImplementation(
        model,
      );
      return implementation;
    },
    inject: [ORM_AVAILABLE_DATA_SOURCES.MONGOOSE],
  },
};

export const contactProviders = [
  // contactRepositoryProviders[ORM_AVAILABLE_DATA_SOURCES.MONGOOSE],
  contactRepositoryProviders[ORM_AVAILABLE_DATA_SOURCES.SEQUELIZE],
];

export class ContactDatabaseProviders {
  providers: ProviderImplementation[];

  constructor(listOfProvidersName: DataSourceImplementationTypes[]) {
    this.providers = listOfProvidersName.map(
      (providerName) => contactRepositoryProviders[providerName],
    );
  }

  getDatabaseProviders() {
    return [].push(...this.providers);
  }
}

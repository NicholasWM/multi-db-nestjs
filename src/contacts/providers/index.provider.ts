import { ORM_AVAILABLE_DATA_SOURCES_ORM } from '@/@common/generics/generic.provider';

import { ContactRepositoryInMemory } from '../@core/domain/repository/contact.repository';

import { ContactsInMemoryRepository } from '../@core/infra/db/in-memory/contacts.implementation.repository';

import { typeOrmContactProviders } from './db/typeorm';
import { mongooseContactProviders } from './db/mongoose';
import { sequelizeContactProviders } from './db/sequelize';

const contactRepositoryProviders = {
  [ORM_AVAILABLE_DATA_SOURCES_ORM.IN_MEMORY]: {
    provide: ContactRepositoryInMemory,
    useClass: ContactsInMemoryRepository,
  },
  ...typeOrmContactProviders,
  ...mongooseContactProviders,
  ...sequelizeContactProviders,
};

// Validar de deixar isso dinamico para modificar apenas em um lugar
export const contactProviders = [
  contactRepositoryProviders.TYPEORM_DB_1,
  contactRepositoryProviders.TYPEORM_DB_2,
  contactRepositoryProviders.MONGOOSE_DATA_SOURCE,
  contactRepositoryProviders.SEQ_DB_1,
  contactRepositoryProviders.SEQ_DB_2,
];

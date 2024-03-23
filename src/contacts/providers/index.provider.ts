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
  contactRepositoryProviders.TYPEORM_MY_SQL,
  contactRepositoryProviders.TYPEORM_POSTGRES,
  contactRepositoryProviders.MONGOOSE_DATA_SOURCE,
  contactRepositoryProviders.SEQ_MY_SQL,
  contactRepositoryProviders.SEQ_POSTGRES,
];

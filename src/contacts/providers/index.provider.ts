import { saveLocation } from '@/@common/constants';
import { ProviderImplementation } from '@/@common/generics/generic.provider';
import { ContactRepository } from '../@core/domain/repository/contact.repository';
import { ContactsInMemoryRepository } from '../@core/infra/db/in-memory/contacts.implementation.repository';
import { ContactsSequelizeRepository } from '../@core/infra/db/sequelize/contact.implementation.repository';
import { ContactsTypeOrmRepositoryImplementation } from '../@core/infra/db/typeorm/contact.implementation.repository';

const contactRepositoryProviders: ProviderImplementation = {
  inMemory: {
    provide: ContactRepository,
    useClass: ContactsInMemoryRepository,
  },
  sequelize: {
    provide: ContactRepository,
    useClass: ContactsSequelizeRepository,
  },
  typeorm: {
    provide: ContactRepository,
    useClass: ContactsTypeOrmRepositoryImplementation,
  },
};

export const contactProviders = [contactRepositoryProviders[saveLocation]];

import { saveLocation } from '@/@common/constants';
import { ProviderImplementation } from '@/@common/generics/generic.provider';
import { DatabaseModule } from '@/database/database.module';
import { ClassProvider, FactoryProvider, ValueProvider } from '@nestjs/common';
import { ContactRepository } from '../@core/domain/repository/contact.repository';
import { ContactsInMemoryRepository } from '../@core/infra/db/in-memory/contacts.implementation.repository';
import { ContactsSequelizeRepository } from '../@core/infra/db/sequelize/contact.implementation.repository';
import { ContactModel } from '../@core/infra/db/sequelize/contact.model';

const contactRepositoryProviders: ProviderImplementation = {
  inMemory: {
    provide: ContactRepository,
    useClass: ContactsInMemoryRepository,
  },
  sequelize: {
    provide: ContactRepository,
    useClass: ContactsSequelizeRepository,
  },
};

export const contactProviders = [contactRepositoryProviders[saveLocation]];

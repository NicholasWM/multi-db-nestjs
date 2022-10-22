import { Connection } from 'mongoose';
import { saveLocation } from '@/@common/constants';
import { ProviderImplementation } from '@/@common/generics/generic.provider';
import { ContactRepository } from '../@core/domain/repository/contact.repository';
import { ContactsInMemoryRepository } from '../@core/infra/db/in-memory/contacts.implementation.repository';
import { ContactsMongooseRepositoryImplementation } from '../@core/infra/db/mongoose/contact.implementation.repository';
import { ContactsSequelizeRepository } from '../@core/infra/db/sequelize/contact.implementation.repository';
import { ContactsTypeOrmRepositoryImplementation } from '../@core/infra/db/typeorm/contact.implementation.repository';
import { ContactSchema } from '../@core/infra/db/mongoose/contact.schema';
import { ContactRepositoryMongo } from '../@core/domain/repository/contactMongo.repository';

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
  mongoose: {
    provide: ContactRepositoryMongo,
    useFactory: async (connection: Connection) => {
      const model = connection.model('Contact', ContactSchema);
      const implementation = new ContactsMongooseRepositoryImplementation(
        model,
      );
      return implementation;
    },
    inject: ['MONGOOSE_DATABASE_CONNECTION'],
  },
};

export const contactProviders = [
  contactRepositoryProviders['mongoose'],
  contactRepositoryProviders[saveLocation],
];

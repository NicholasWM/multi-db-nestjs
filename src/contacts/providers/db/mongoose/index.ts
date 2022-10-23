import { Connection } from 'mongoose';

import { FactoryProvider } from '@nestjs/common';

import { ORM_AVAILABLE_DATA_SOURCES_ORM } from '@/@common/generics/generic.provider';

import { ContactRepositoryMongoose } from '@/contacts/@core/domain/repository/contact.repository';
import { ContactsMongooseRepositoryImplementation } from '@/contacts/@core/infra/db/mongoose/contact.implementation.repository';

import { ContactSchema } from '@/contacts/@core/infra/db/mongoose/contact.schema';

interface IProvider {
  [ORM_AVAILABLE_DATA_SOURCES_ORM.MONGOOSE]: FactoryProvider<any>;
}

export const mongooseContactProviders: IProvider = {
  MONGOOSE_DATA_SOURCE: {
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

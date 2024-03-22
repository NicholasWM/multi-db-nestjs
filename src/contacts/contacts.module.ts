import { Module } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import { ContactRepository } from './@core/domain/repository/contact.repository';
import { DatabaseModule } from '@/database/database.module';
import { ContactsService } from './contacts.service';
import { createDynamicContactsController } from './contacts.controller';
import { contactProviders } from './providers/index.provider';
import { CreateContactsUseCase } from './@core/application/CreateContact.useCase';
import { ContactsInMemoryRepository } from './@core/infra/db/in-memory/contacts.implementation.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [
    createDynamicContactsController({
      tag: 'Contacts In Memory',
      basePath: 'contacts/in-memory',
      // entityName: '',
      providerName: ContactsService,
    }),
    createDynamicContactsController({
      tag: 'Contacts TypeORM MySQL',
      basePath: 'contacts/typeorm/mysql',
      // entityName: '',
      providerName: ContactsService,
    }),
    createDynamicContactsController({
      tag: 'Contacts TypeORM PG',
      basePath: 'contacts/typeorm/pg',
      // entityName: '',
      providerName: ContactsService,
    }),
    createDynamicContactsController({
      tag: 'Contacts Sequelize MySQL',
      basePath: 'contacts/sequelize/mysql',
      // entityName: '',
      providerName: ContactsService,
    }),
    createDynamicContactsController({
      tag: 'Contacts Sequelize PG',
      basePath: 'contacts/sequelize/pg',
      // entityName: '',
      providerName: ContactsService,
    }),
    createDynamicContactsController({
      tag: 'Contacts Mongoose',
      basePath: 'contacts/mongoose/mongodb',
      // entityName: '',
      providerName: ContactsService,
    }),
  ],
  providers: [
    ...contactProviders,
    {
      provide: ContactsService,
      useFactory: (
        defaultRepository: ContactRepository,
        findAllContactsUseCase: FindAllContactsUseCase,
        createContactsUseCase: CreateContactsUseCase,
      ) => {
        return new ContactsService(defaultRepository, {
          findAllUseCase: findAllContactsUseCase,
          createContactsUseCase: createContactsUseCase,
        });
      },
      inject: [
        ContactsInMemoryRepository,
        FindAllContactsUseCase,
        CreateContactsUseCase,
      ],
    },
    {
      provide: CreateContactsUseCase,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase(
          defaultRepository,
        );
        return createContactsUseCase;
      },
      inject: [ContactsInMemoryRepository],
    },
    {
      provide: FindAllContactsUseCase,
      useFactory: (defaultRepository: any) => {
        const findAllUseCase = new FindAllContactsUseCase(defaultRepository);
        return findAllUseCase;
      },
      inject: [ContactsInMemoryRepository],
    },
  ],
})
export class ContactsModule {}

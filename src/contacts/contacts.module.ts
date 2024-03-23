import { Module } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import {
  ContactRepository,
  ContactRepositoryMongoose,
  ContactRepositorySequelize_DB_2,
  ContactRepositorySequelize_DEFAULT,
  ContactRepositoryTypeORM_DB_2,
  ContactRepositoryTypeORM_MySQL,
} from './@core/domain/repository/contact.repository';
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
      providerName: 'ContactsServiceInMemory',
    }),
    createDynamicContactsController({
      tag: 'Contacts TypeORM MySQL',
      basePath: 'contacts/typeorm/mysql',
      // entityName: '',
      providerName: 'ContactsServiceTypeOrmDefault',
    }),
    createDynamicContactsController({
      tag: 'Contacts TypeORM PG',
      basePath: 'contacts/typeorm/pg',
      // entityName: '',
      providerName: 'ContactsServiceTypeOrmDB_2',
    }),
    createDynamicContactsController({
      tag: 'Contacts Sequelize MySQL',
      basePath: 'contacts/sequelize/mysql',
      // entityName: '',
      providerName: 'ContactsServiceSequelizeDefault',
    }),
    createDynamicContactsController({
      tag: 'Contacts Sequelize PG',
      basePath: 'contacts/sequelize/pg',
      // entityName: '',
      providerName: 'ContactsServiceSequelizeDB_2',
    }),
    createDynamicContactsController({
      tag: 'Contacts Mongoose',
      basePath: 'contacts/mongoose/mongodb',
      // entityName: '',
      providerName: 'ContactsServiceMongoose',
    }),
  ],
  providers: [
    ...contactProviders,
    {
      provide: 'ContactsServiceMongoose',
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
        ContactRepositoryMongoose,
        FindAllContactsUseCase,
        CreateContactsUseCase,
      ],
    },
    {
      provide: 'ContactsServiceTypeOrmDB_2',
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
        ContactRepositoryTypeORM_DB_2,
        FindAllContactsUseCase,
        CreateContactsUseCase,
      ],
    },
    {
      provide: 'ContactsServiceTypeOrmDefault',
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
        ContactRepositoryTypeORM_MySQL,
        FindAllContactsUseCase,
        CreateContactsUseCase,
      ],
    },
    {
      provide: 'ContactsServiceSequelizeDefault',
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
        ContactRepositorySequelize_DEFAULT,
        FindAllContactsUseCase,
        CreateContactsUseCase,
      ],
    },
    {
      provide: 'ContactsServiceSequelizeDB_2',
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
        ContactRepositorySequelize_DB_2,
        FindAllContactsUseCase,
        CreateContactsUseCase,
      ],
    },
    {
      provide: 'ContactsServiceInMemory',
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

    // Exemplo de como da para injetar use cases
    // Dentro das services
    {
      provide: CreateContactsUseCase,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase(
          defaultRepository,
        );
        return createContactsUseCase;
      },
      inject: [ContactRepositorySequelize_DB_2],
    },
    {
      provide: FindAllContactsUseCase,
      useFactory: (defaultRepository: any) => {
        const findAllUseCase = new FindAllContactsUseCase(defaultRepository);
        return findAllUseCase;
      },
      inject: [ContactRepositorySequelize_DB_2],
    },
  ],
})
export class ContactsModule {}

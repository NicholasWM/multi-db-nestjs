import { Module } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import {
  ContactRepository,
  ContactRepositoryMongoose,
  ContactRepositorySequelize_DB_2,
  ContactRepositorySequelize_DEFAULT,
  ContactRepositoryTypeORM_DB_2,
  ContactRepositoryTypeORM_DEFAULT,
} from './@core/domain/repository/contact.repository';
import { DatabaseModule } from '@/database/database.module';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { contactProviders } from './providers/index.provider';
import { CreateContactsUseCase } from './@core/application/CreateContact.useCase';
import { repositoryBuilderByORM, buildInjectorByORM } from '@/database/helpers';
import { CreateContactsUseCase_2 } from './@core/application/CreateContact_2.useCase ';
import { CreateContactsUseCase_3 } from './@core/application/CreateContact_3.useCase';
import { CreateContactsUseCase_4 } from './@core/application/CreateContact_4.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [
    ...contactProviders,
    {
      provide: ContactsService,
      useFactory: (
        defaultRepository: ContactRepository,
        findAllContactsUseCase: FindAllContactsUseCase,
        createContactsUseCase: CreateContactsUseCase,
        createContactsUseCase_2: CreateContactsUseCase_2,
        createContactsUseCase_3: CreateContactsUseCase_3,
        createContactsUseCase_4: CreateContactsUseCase_4,
      ) => {
        return new ContactsService(defaultRepository, {
          findAllUseCase: findAllContactsUseCase,
          createContactsUseCase: createContactsUseCase,
          createContactsUseCase_2: createContactsUseCase_2,
          createContactsUseCase_3: createContactsUseCase_3,
          createContactsUseCase_4: createContactsUseCase_4,
        });
      },
      inject: [
        ContactRepositorySequelize_DEFAULT,
        FindAllContactsUseCase,
        CreateContactsUseCase,
        CreateContactsUseCase_2,
        CreateContactsUseCase_3,
        CreateContactsUseCase_4,
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
      inject: [ContactRepositorySequelize_DB_2],
    },
    {
      provide: CreateContactsUseCase_2,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase_2(
          repositoryBuilderByORM(defaultRepository, 'TYPEORM')(),
        );
        return createContactsUseCase;
      },
      inject: [buildInjectorByORM(ContactRepositoryTypeORM_DEFAULT, 'TYPEORM')],
    },
    {
      provide: CreateContactsUseCase_3,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase_3(
          repositoryBuilderByORM(defaultRepository, 'TYPEORM')(),
        );
        return createContactsUseCase;
      },
      inject: [ContactRepositoryTypeORM_DB_2],
    },
    {
      provide: CreateContactsUseCase_4,
      useFactory: (defaultRepository: any) => {
        const createContactsUseCase = new CreateContactsUseCase_4(
          repositoryBuilderByORM(defaultRepository, 'MONGOOSE')(),
        );
        return createContactsUseCase;
      },
      inject: [ContactRepositoryMongoose],
    },
    {
      provide: FindAllContactsUseCase,
      useFactory: (defaultRepository: any) => {
        const findAllUseCase = new FindAllContactsUseCase(defaultRepository);
        return findAllUseCase;
      },
      inject: [ContactRepositorySequelize_DEFAULT],
    },
  ],
})
export class ContactsModule {}

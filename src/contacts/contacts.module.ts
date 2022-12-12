import { Module } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import {
  ContactRepository,
  ContactRepositorySequelize_DB_2,
  ContactRepositorySequelize_DEFAULT,
} from './@core/domain/repository/contact.repository';
import { DatabaseModule } from '@/database/database.module';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { contactProviders } from './providers/index.provider';
import { CreateContactsUseCase } from './@core/application/CreateContact.useCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [
    ...contactProviders,
    ContactsService,
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
        ContactRepositorySequelize_DEFAULT,
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
      inject: [ContactRepositorySequelize_DB_2],
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

import { Module } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import {
  ContactGenericRepository,
  ContactRepositorySequelize,
  ContactRepositoryTypeORM,
  ContactRepositoryTypeORM_DB_2,
  ContactRepositoryTypeORM_DEFAULT,
} from './@core/domain/repository/contact.repository';
import { DatabaseModule } from '@/database/database.module';
import { ContactServiceDTO, ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { contactProviders } from './providers/index.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [
    ...contactProviders,
    {
      provide: ContactsService,
      useFactory: (defaultRepository: ContactGenericRepository) => {
        const contactServiceDTO: ContactServiceDTO = {
          repository: defaultRepository,
          useCases: {
            findAllUseCase: new FindAllContactsUseCase(defaultRepository),
          },
        };
        return new ContactsService(contactServiceDTO);
      },
      inject: [ContactRepositoryTypeORM_DEFAULT],
    },
  ],
})
export class ContactsModule {}

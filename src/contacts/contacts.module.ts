import { Module } from '@nestjs/common';
import { FindAllContactsUseCase } from './@core/application/FindAllContacts.useCase';
import { ContactRepository } from './@core/domain/repository/contact.repository';
import { DatabaseModule } from '@/database/database.module';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { contactProviders } from './providers/index.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [
    ContactsService,
    ...contactProviders,
    {
      provide: FindAllContactsUseCase,
      useFactory: (repository: ContactRepository) => {
        return new FindAllContactsUseCase(repository);
      },
      inject: [ContactRepository],
    },
  ],
})
export class ContactsModule {}

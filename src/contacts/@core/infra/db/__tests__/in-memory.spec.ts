import { Test } from '@nestjs/testing';
import { ContactsService } from '../../../../contacts.service';
import { CreateContactsUseCase } from '../../../application/CreateContact.useCase';
import { FindAllContactsUseCase } from '../../../application/FindAllContacts.useCase';
import { ContactRepository } from '../../../domain/repository/contact.repository';
import { ContactsController } from '../../../../contacts.controller';
import { Contact } from '../../../domain/entity';
import { AppModule } from '@/app.module';
import { ContactsInMemoryRepository } from '../in-memory/contacts.implementation.repository';

describe('ContactsController InMemory', () => {
  let contactsService: ContactsService;
  let contactsController: ContactsController;
  let app: any;
  let httpServer: any;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ContactsService)
      .useFactory({
        factory: (
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
      })
      .compile();

    contactsService = moduleRef.get<ContactsService>(ContactsService);
    contactsController = moduleRef.get<ContactsController>(ContactsController);
    app = moduleRef.createNestApplication();
    await app.init();

    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('add', () => {
    const contact: Contact = {
      type: 'phone',
      value: '1231232',
      ownerId: '1',
      status: 'active',
    };

    describe('when add is called', () => {
      test('then it should call usersService', async () => {
        const payload = await contactsController.add(contact);
        expect(payload).toMatchObject({
          ownerId: payload.ownerId,
          status: payload.status,
          type: payload.type,
          value: payload.value,
        });
      });
    });
  });
});

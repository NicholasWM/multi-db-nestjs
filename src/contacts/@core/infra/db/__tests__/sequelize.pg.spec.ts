import { Test } from '@nestjs/testing';
import { ContactsService } from '../../../../contacts.service';
import { CreateContactsUseCase } from '../../../application/CreateContact.useCase';
import { FindAllContactsUseCase } from '../../../application/FindAllContacts.useCase';
import {
  ContactRepository,
  ContactRepositorySequelize_DB_2,
} from '../../../domain/repository/contact.repository';
import { ContactsController } from '../../../../contacts.controller';
import { Contact } from '../../../domain/entity';
import { AppModule } from '@/app.module';

describe('ContactsController Sequelize MySQL', () => {
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
          ContactRepositorySequelize_DB_2,
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

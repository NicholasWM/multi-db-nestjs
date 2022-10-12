import { Contact } from '../domain/entity';
import { ContactsInMemoryRepository } from '../infra/db/in-memory/contacts.implementation.repository';
import { FindAllContactsUseCase } from './FindAllContacts.useCase';

describe('UseCase: FindAllContacts', () => {
  const repository = new ContactsInMemoryRepository();

  test('Should return all contacts', async () => {
    const contact: Pick<Contact, 'ownerId' | 'status' | 'type' | 'value'> = {
      type: 'phone',
      value: '123123123123',
      ownerId: '1231',
      status: 'active',
    };
    await repository.create(contact);
    await repository.create(contact);
    await repository.create(contact);

    const useCase = new FindAllContactsUseCase(repository);

    const allContacts = await useCase.execute();

    expect(allContacts).toHaveLength(3);
  });
});

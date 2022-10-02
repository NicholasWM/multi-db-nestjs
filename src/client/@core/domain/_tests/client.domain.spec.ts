import { Contact } from '@/contacts/@core/domain/entity';
import { Client } from '../entity';

describe('Client Domain', () => {
  test('Must create a client without contacts', () => {
    const clientData: Pick<Client, 'email' | 'name'> = {
      email: 'nicholas@email.com',
      name: 'Nicholas',
    };

    const client = new Client(clientData.name, clientData.email);

    expect(client.name).toBe(clientData.name);
    expect(client.email).toBe(clientData.email);
  });

  test('Must create a client with contacts', () => {
    const clientData: Pick<Client, 'email' | 'name'> = {
      email: 'nicholas@email.com',
      name: 'Nicholas',
    };

    const contactsData: Pick<Contact, 'value' | 'type'>[] = [
      { type: 'email', value: 'nicholas@email.com' },
      { type: 'email', value: 'nicholas2@email.com' },
      { type: 'email', value: 'nicholas3@email.com' },
    ];

    const client = new Client(clientData.name, clientData.email, contactsData);

    expect(client.name).toBe(clientData.name);
    expect(client.email).toBe(clientData.email);

    expect(client.contacts).toHaveLength(contactsData.length);
    client.contacts.forEach((contact, index) => {
      expect(contact.type).toBe(contactsData[index].type);
      expect(contact.value).toBe(contactsData[index].value);
    });
  });

  test('Must create a client and add contacts later', () => {
    const clientData: Pick<Client, 'email' | 'name'> = {
      email: 'nicholas@email.com',
      name: 'Nicholas',
    };

    const contactsData: Pick<Contact, 'value' | 'type'>[] = [
      { type: 'email', value: 'nicholas@email.com' },
      { type: 'email', value: 'nicholas2@email.com' },
      { type: 'email', value: 'nicholas3@email.com' },
    ];

    const client = new Client(clientData.name, clientData.email);

    client.addContacts(contactsData);

    expect(client.name).toBe(clientData.name);
    expect(client.email).toBe(clientData.email);

    client.contacts.forEach((contact, index) => {
      expect(contact.type).toBe(contactsData[index].type);
      expect(contact.value).toBe(contactsData[index].value);
    });
  });
});

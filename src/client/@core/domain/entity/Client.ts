import { Contact } from '@/contacts/@core/domain/entity';

export type IClientProps = 'name' | 'contacts' | 'email';

export class Client {
  contacts: Contact[];

  constructor(
    readonly name: string,
    readonly email: string,
    contacts: Contact[] = [],
  ) {
    this.contacts = contacts;
  }

  addContacts(contacts: Contact[]) {
    const newContacts = contacts.map((contact) => {
      const { status, type, value } = contact;
      return new Contact(value, type, status);
    });
    this.contacts.push(...newContacts);
  }
}

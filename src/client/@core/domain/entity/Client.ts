import { Contact } from '@/contacts/@core/domain/entity';
import { randomUUID } from 'crypto';

export type IClientProps = 'name' | 'contacts' | 'email';

export type IClientAttributes = {
  name: any;
  email: any;
  contacts: Contact[];
  id?: string;
};
export interface CreateClientDomainDTO {
  name: any;
  email: any;
  id?: string;
  contacts?: Contact[];
}
export class Client implements CreateClientDomainDTO {
  id: string;
  name: any;
  email: any;
  contacts?: Contact[];

  constructor(createClientDTO: CreateClientDomainDTO) {
    const { id, contacts, email, name } = createClientDTO;
    this.name = name;
    this.email = email;
    this.contacts = contacts || [];
    this.id = !id ? randomUUID() : id;
  }

  addContacts(contacts: Pick<Contact, 'value' | 'type'>[]) {
    const newContacts = contacts.map((contact) => {
      const { type, value } = contact;
      return new Contact(value, type, 'active', this.id);
    });
    this.contacts.push(...newContacts);
  }
}

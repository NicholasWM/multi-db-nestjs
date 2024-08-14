import { randomUUID } from 'crypto';
import { Contact } from '../entity';
import { ContactDTO } from '../entity/Contact.dto';

describe('Contact Domain', () => {
  test('Must create a contact', () => {
    const contactData: ContactDTO = {
      type: 'phone',
      value: '(13)12312-9923',
      ownerId: randomUUID(),
      status: '',
    };

    // const contact = new Contact(contactData.value, contactData.type);
    const contact = new Contact(contactData);

    expect(contact.value).toBe(contactData.value);
    expect(contact.type).toBe(contactData.type);
  });
});

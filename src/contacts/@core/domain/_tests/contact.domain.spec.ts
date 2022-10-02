import { Contact } from '../entity';

describe('Contact Domain', () => {
  test('Must create a contact', () => {
    const contactData: Pick<Contact, 'value' | 'type'> = {
      type: 'phone',
      value: '(13)12312-9923',
    };

    const contact = new Contact(contactData.value, contactData.type);

    expect(contact.value).toBe(contactData.value);
    expect(contact.type).toBe(contactData.type);
  });
});

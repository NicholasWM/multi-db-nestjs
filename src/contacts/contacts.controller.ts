import { Controller, Get, Inject } from '@nestjs/common';
import { Contact, IContactAttributes } from './@core/domain/entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  defaultContact: Contact = {
    type: 'phone',
    value: '123211232',
    ownerId: '3',
    status: 'active',
  };

  constructor(private contactsService: ContactsService) {}

  @Get()
  async findAll() {
    const payload = await this.contactsService.findAll();
    return payload;
  }

  @Get('add')
  async add(contact: Contact): Promise<IContactAttributes> {
    const payload = await this.contactsService.createWithService(contact);
    return payload;
  }
}

import { Controller, Get } from '@nestjs/common';
import { Contact } from './@core/domain/entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  async findAll() {
    const payload = await this.contactsService.findAll();
    return payload;
  }

  @Get('add')
  async add() {
    const contact: Contact = {
      type: 'phone',
      value: '1231232',
      ownerId: '1',
      status: 'active',
    };

    const payload = await this.contactsService.create(contact);
    return payload;
  }
}

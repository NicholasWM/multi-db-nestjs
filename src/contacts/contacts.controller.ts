import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Contact, IContactAttributes } from './@core/domain/entity';
import { ContactsService } from './contacts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateContactDTO } from './DTOs/create.dto';

@ApiTags('# Contacts')
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
  async findAll(): Promise<Contact[]> {
    const payload = await this.contactsService.findAll();
    return payload;
  }

  @Post()
  async add(@Body() contact: CreateContactDTO): Promise<IContactAttributes> {
    const payload = await this.contactsService.createWithService(contact);
    return payload;
  }
}

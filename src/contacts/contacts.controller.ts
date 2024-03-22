import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { Contact, ContactDTO } from './@core/domain/entity';

import { CreateContactDTO } from './DTOs';
import { ContactsService } from './contacts.service';

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
  @ApiOkResponse({ type: [ContactDTO] })
  async findAll(): Promise<Contact[]> {
    const payload = await this.contactsService.findAll();
    return payload;
  }

  @Post()
  async add(@Body() contact: CreateContactDTO): Promise<ContactDTO> {
    const payload = await this.contactsService.createWithService(contact);
    return payload;
  }
}

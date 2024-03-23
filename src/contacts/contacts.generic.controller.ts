import { Get, Post, Body } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Contact } from './@core/domain/entity';
import { ContactDTO } from './@core/domain/entity/Contact.dto';
import { CreateContactDTO } from './DTOs';
import { ContactsService } from './contacts.service';

export class ContactsControllerGeneric {
  contactsService: ContactsService;
  constructor(
    // @Inject(controllerOptions.providerName)
    contactsService: ContactsService,
  ) {
    this.contactsService = contactsService;
  }

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

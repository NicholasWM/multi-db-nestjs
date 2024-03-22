import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import { Contact } from './@core/domain/entity';

import { CreateContactDTO } from './DTOs';
import { ContactsService } from './contacts.service';
import { ContactDTO } from './@core/domain/entity/Contact.dto';

interface Options {
  tag: string;
  basePath: string;
  // entityName: string; // you could even pass down DTO classes here, for maximum flexibility.
  providerName: any;
}

export const createDynamicContactsController = (controllerOptions: Options) => {
  @ApiTags(controllerOptions.tag)
  @Controller(controllerOptions.basePath)
  class ContactsController {
    constructor(
      @Inject(controllerOptions.providerName)
      readonly contactsService: ContactsService,
    ) {}

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

  return ContactsController;
};

import { ApiTags } from '@nestjs/swagger';
import { Controller, Inject } from '@nestjs/common';

import { ContactsService } from './contacts.service';
import { ContactsControllerGeneric } from './contacts.generic.controller';

interface Options {
  tag: string;
  basePath: string;
  providerName: any;
}

export const createDynamicContactsController = (controllerOptions: Options) => {
  @ApiTags(controllerOptions.tag)
  @Controller(controllerOptions.basePath)
  class ContactsController extends ContactsControllerGeneric {
    constructor(
      @Inject(controllerOptions.providerName)
      readonly contactsService: ContactsService,
    ) {
      super(contactsService);
    }
  }
  return ContactsController;
};

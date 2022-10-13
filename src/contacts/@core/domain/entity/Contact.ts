import { randomUUID } from 'crypto';

export type IContactProps = 'ownerId' | 'value' | 'type' | 'status';

export type IContactAttributes = {
  ownerId: any;
  value: any;
  type: any;
  status: any;
  id?: string;
};

export class Contact implements IContactAttributes {
  status: string;
  ownerId: string;
  id?: string;
  constructor(
    readonly value: string, // info
    readonly type: string, // description
    status?: string,
    ownerId?: string,
  ) {
    if (ownerId) this.ownerId = ownerId;
    if (status) this.status = status;
    this.id = randomUUID();
  }
}

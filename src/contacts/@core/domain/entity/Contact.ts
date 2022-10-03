export type IContactProps = 'ownerId' | 'value' | 'type' | 'status';

export class Contact {
  constructor(
    readonly value: string, // info
    readonly type: string, // description
    readonly status?: string,
    readonly ownerId?: string,
  ) {}
}

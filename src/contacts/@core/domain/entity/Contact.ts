export class Contact {
  constructor(
    readonly value: string, // info
    readonly type: string, // description
    readonly status?: string,
  ) {}
}

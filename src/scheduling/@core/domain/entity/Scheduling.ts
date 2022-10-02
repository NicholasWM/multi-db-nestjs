import { Client } from '@/client/@core/domain/entity';

export class Scheduling {
  client: Client;
  constructor(
    readonly date: Date,
    readonly numberOfPeople: number,
    client?: Client,
  ) {
    if (client) {
      this.client = client;
    }
  }

  addOwner(client: Client) {
    this.client = client;
  }
}

import { Client } from '@/client/@core/domain/entity';
import { Scheduling } from '../entity';

describe('Scheduling Domain', () => {
  test('Must create a Scheduling', function () {
    const schedulingData: Pick<Scheduling, 'numberOfPeople' | 'date'> = {
      date: new Date(),
      numberOfPeople: 10,
    };

    const scheduling = new Scheduling(
      schedulingData?.date,
      schedulingData?.numberOfPeople,
    );

    expect(scheduling.date).toBe(schedulingData?.date);
    expect(scheduling.numberOfPeople).toBe(schedulingData?.numberOfPeople);
  });

  test('Must create a Scheduling and with a Owner', function () {
    const client: Pick<Client, 'email' | 'name'> = {
      name: 'Nicholas',
      email: 'nicholas@email.com',
    };

    const clientOwner = new Client({
      name: client.name,
      email: client.email,
    });

    const schedulingData: Pick<
      Scheduling,
      'numberOfPeople' | 'date' | 'client'
    > = {
      date: new Date(),
      numberOfPeople: 10,
      client: clientOwner,
    };

    const scheduling = new Scheduling(
      schedulingData.date,
      schedulingData.numberOfPeople,
      schedulingData.client,
    );

    expect(scheduling.date).toBe(schedulingData?.date);
    expect(scheduling.numberOfPeople).toBe(schedulingData?.numberOfPeople);

    expect(scheduling.client).toStrictEqual(schedulingData.client);
  });

  test('Must create a Scheduling and associate a Owner later', function () {
    const schedulingData: Pick<Scheduling, 'numberOfPeople' | 'date'> = {
      date: new Date(),
      numberOfPeople: 10,
    };

    const scheduling = new Scheduling(
      schedulingData?.date,
      schedulingData?.numberOfPeople,
    );

    const client: Pick<Client, 'email' | 'name'> = {
      name: 'Nicholas',
      email: 'nicholas@email.com',
    };

    const clientOwner = new Client({
      name: client.name,
      email: client.email,
    });
    scheduling.addOwner(clientOwner);

    expect(scheduling.date).toBe(scheduling?.date);
    expect(scheduling.numberOfPeople).toBe(scheduling?.numberOfPeople);

    expect(scheduling.client).toStrictEqual(clientOwner);
  });
});

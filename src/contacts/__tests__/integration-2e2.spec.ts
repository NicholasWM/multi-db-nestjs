import * as request from 'supertest';

// Make sure the URL matches the URL where your application is running
const url = 'http://localhost:3000';

const allPaths = [
  '/contacts/in-memory',
  '/contacts/typeorm/mysql',
  '/contacts/typeorm/pg',
  '/contacts/sequelize/mysql',
  '/contacts/sequelize/pg',
  '/contacts/mongoose/mongodb',
];

describe('API Tests by Database', () => {
  test.each(allPaths)(`should get contacts from %s`, async (path) => {
    const response = await request(url).get(path);
    expect(response.status).toEqual(200);
  });

  test.each(allPaths)(
    `should create a contact via POST to %s`,
    async (path) => {
      const mockedContact = {
        ownerId: 'testId',
        value: 'Jorge da Silva',
        type: 'Cellphone',
        status: true,
      };
      const response0 = await request(url).get(path);
      const initialLength = response0.body.length;
      expect(response0.status).toEqual(200);

      const response = await request(url).post(path).send(mockedContact);
      expect(response.status).toEqual(201);

      const response1 = await request(url).get(path);
      expect(response1.status).toEqual(200);
      console.log(response1.body);
      expect(response1.body.length).toBe(initialLength + 1);
    },
  );
});

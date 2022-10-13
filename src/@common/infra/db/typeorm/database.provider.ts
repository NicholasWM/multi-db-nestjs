import { ContactModel } from '@/contacts/@core/infra/db/typeorm/contact.model';
import { DataSource } from 'typeorm';

export const typeOrmDatabaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 8801,
        username: 'root',
        password: 'study_projects',
        database: 'backoffice_war_typeorm',
        entities: [ContactModel],
        synchronize: true,
        // debug: true,
        logging: ['query', 'error'],
      });

      return dataSource.initialize();
    },
  },
];

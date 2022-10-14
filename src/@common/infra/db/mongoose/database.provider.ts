import * as mongoose from 'mongoose';

export const mongooseDatabaseProviders = [
  {
    provide: 'MONGOOSE_DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:8804', {
        authMechanism: 'DEFAULT',
        dbName: 'war',
        auth: { password: 'study_projects', username: 'root' },
      }),
  },
];

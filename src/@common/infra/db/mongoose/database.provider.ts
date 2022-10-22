import { ORM_AVAILABLE_DATA_SOURCES } from '@/@common/generics/generic.provider';
import * as mongoose from 'mongoose';

export const mongooseDatabaseProviders = [
  {
    provide: ORM_AVAILABLE_DATA_SOURCES.MONGOOSE,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:8804', {
        authMechanism: 'DEFAULT',
        dbName: 'war',
        auth: { password: 'study_projects', username: 'root' },
      }),
  },
];

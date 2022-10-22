import { Module, Logger } from '@nestjs/common';
import { DatabaseStackProviders } from './database.provider';

@Module({
  providers: DatabaseStackProviders,
  exports: DatabaseStackProviders,
})
export class DatabaseModule {
  private readonly logger = new Logger(DatabaseModule.name);
  // Pensar em algumas configurações para serem realizadas por aqui
  // Dar log da implementação usada...
  constructor() {
    DatabaseStackProviders.map((d) => {
      this.logger.debug(`Database Connection ${d.provide}`);
    });
  }
}

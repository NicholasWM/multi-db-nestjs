import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class create_constacts_table_1665627059231
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contacts',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true },
          { name: 'ownerId', type: 'varchar' },
          { name: 'status', type: 'varchar' },
          { name: 'value', type: 'varchar' },
          { name: 'type', type: 'varchar' },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacts');
  }
}

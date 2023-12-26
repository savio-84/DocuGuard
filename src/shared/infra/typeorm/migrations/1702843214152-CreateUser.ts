import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1702843214152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryRunner.createTable(new Table({
            name: 'accounts',
            columns: [
                { name: 'id', type: 'uuid', generationStrategy: 'uuid', default: 'uuid_generate_v4()', isUnique: true, isPrimary: true, isNullable: false },
                { name: 'name', type: 'varchar', isNullable: false },
                { name: 'email', type: 'varchar', isNullable: false, isUnique: true },
                { name: 'password', type: 'varchar', isNullable: true },
                { name: 'is_admin', type: 'boolean', default: false },
                { name: 'created_at', type: 'timestamp with time zone', default: 'now()' },
                { name: 'updated_at', type: 'timestamp with time zone', default: 'now()' }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('accounts');
    }

}

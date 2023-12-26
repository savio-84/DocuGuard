import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateDocuments1702848400088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'documents',
            columns: [
                { name: 'id', type: 'uuid', generationStrategy: 'uuid', default: 'uuid_generate_v4()', isUnique: true, isPrimary: true, isNullable: false },
                { name: 'title', type: 'varchar', isNullable: false },
                { name: 'user_id', type: 'uuid', isNullable: false },
                { name: 'integrity_hash', type: 'varchar', isNullable: false },
                { name: 'file_url', type: 'varchar', isNullable: false },
                { name: 'created_at', type: 'timestamp with time zone', default: 'now()' },
                { name: 'updated_at', type: 'timestamp with time zone', default: 'now()' }
            ],
            foreignKeys: [
                {
                    name: 'user',
                    referencedColumnNames: ['id'],
                    referencedTableName: 'accounts',
                    columnNames: ['user_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('documents');
    }

}

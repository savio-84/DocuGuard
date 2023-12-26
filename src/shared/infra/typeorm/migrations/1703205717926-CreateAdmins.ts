import { MigrationInterface, QueryRunner } from "typeorm"
import { AppDataSource } from "../data-source"
import { Account } from "../../../../modules/accounts/entities/Account"
import { hash } from "bcrypt";



export class CreateAdmins1703205717926 implements MigrationInterface {
    private repository = AppDataSource.getRepository(Account);

    public async up(queryRunner: QueryRunner): Promise<void> {
        const adminData = this.repository.create({
            name: 'admin',
            email: 'admin@gmail.com',
            password: await hash('adminadmin', 8),
            isAdmin: true,
        })
        await this.repository.save(adminData);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await this.repository.delete({ email: 'admin@gmail.com' });
    }
}

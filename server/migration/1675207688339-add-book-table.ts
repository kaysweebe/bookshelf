import { MigrationInterface, QueryRunner } from "typeorm"

export class addBookTable1675207688339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE book (
                id string,
                title string, 
                author string,
                genre string,
                description string
            )`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE book (
                id string,
                title string, 
                author string,
                genre string,
                description string
            )`
        )
    }

}

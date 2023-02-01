import { MigrationInterface, QueryRunner } from "typeorm"

export class addBookTable1675207688339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE book (
                id uuid PRIMARY KEY,
                title varchar(50), 
                author varchar(50),
                genre varchar(50),
                description varchar(255),
                notesLink varchar(100)
            );`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE book;`
        )
    }

}

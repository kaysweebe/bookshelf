import { DataSource } from "typeorm";
import { Book } from "./entity/Book";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "bookshelf-1-instance-1.civwluscxgf9.us-west-2.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "UyIYLc9MpP1HJC2gK~C+q*I5wOB_",
    database: "bookshelf",
    synchronize: false,
    logging: true,
    entities: [Book],
    subscribers: [],
    migrations: ['migration/**/*.ts'],
})
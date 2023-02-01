"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
var typeorm_1 = require("typeorm");
var Book_1 = require("./entity/Book");
exports.appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "bookshelf-1-instance-1.civwluscxgf9.us-west-2.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "UyIYLc9MpP1HJC2gK~C+q*I5wOB_",
    database: "bookshelf",
    synchronize: true,
    logging: true,
    entities: [Book_1.Book],
    subscribers: [],
    // migrations: ['migration/**/*.ts'],
});

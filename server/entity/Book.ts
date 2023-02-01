import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    genre: string

    @Column()
    description: string

    @Column()
    notesLink: string
}
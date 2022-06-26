import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 10,
    })
    name: string

    @Column({
        length: 255,
    })
    email: string

    @Column({
        length: 100,
    })
    password: string

}

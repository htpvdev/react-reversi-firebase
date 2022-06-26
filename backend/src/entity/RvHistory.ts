import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class RvHistory {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rv_match_id: number

    @Column()
    turn: number

    @Column()
    point: number

}

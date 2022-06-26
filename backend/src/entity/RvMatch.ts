import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class RvMatch {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    black_user_id: number

    @Column()
    white_user_id: number

    @Column({
      length: 1000,
    })
    current_board_json: string

    @Column()
    result: number

  }

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateRvHistory1000000000000 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE IF NOT EXISTS rv_history (
          id SERIAL PRIMARY KEY
          , rv_match_id INTEGER
          , turn SMALLINT
          , point SMALLINT
        )
        ;
      `,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS rv_history;
      `,
    )
  }

}

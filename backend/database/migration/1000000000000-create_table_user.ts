import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUser1000000000000 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE IF NOT EXISTS "user" (
          "id" SERIAL PRIMARY KEY
          , "name" VARCHAR(10)
          , "email" VARCHAR(255)
          , "password" VARCHAR(100)
        )
        ;
      `,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS "user";
      `,
    )
  }

}

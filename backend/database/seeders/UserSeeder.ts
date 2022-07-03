import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserSeeder implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // データ作成
    const table = 'user'
    const insertColumnList = [ 'name', 'email', 'password' ]
    const insertDataList = [
      [ 'hashimoto', 'hashimoto@example.com', 'password' ]
    ]

    // テーブルを空にする
    await queryRunner.query(
      `
        DELETE FROM "${table}";
      `,
    )
    // データ投入
    await queryRunner.query(
      `
        INSERT INTO "${table}"
          ( ${insertColumnList.join(', ')} )
        VALUES
          ${
            insertDataList.map(
              data => data.join('\', \'') 
            )
          }
        ;
      `,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}

}

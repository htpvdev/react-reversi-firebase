import * as dotenv from 'dotenv'

/** .envがあるディレクトリから、このモジュールのディレクトリまでの相対パス */
const currentPath = 'database'
// backend/.envを読み込む
dotenv.config({ path: __dirname.slice(0, -currentPath.length) + '.env' })
const { DB_DIARECT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, DB_LOGGING } = process.env

import { DataSource, DataSourceOptions } from 'typeorm';
// マイグレーションファイルを読み込み
import { CreateRvRoom1000000000000 } from './migration/1000000000000-create_table_rv_room';
import { CreateRvMatch1000000000000 } from './migration/1000000000000-create_table_rv_match_table';
import { CreateRvHistory1000000000000 } from './migration/1000000000000-create_table_rv_history';
import { CreateUser1000000000000 } from './migration/1000000000000-create_table_user';


export const MigrationDataSource = new DataSource({
  type: DB_DIARECT,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: true,
  entities: [],
  migrations: [
    CreateUser1000000000000,
    CreateRvRoom1000000000000,
    CreateRvMatch1000000000000,
    CreateRvHistory1000000000000,
  ],
  subscribers: [],
} as DataSourceOptions)

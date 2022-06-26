import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from "../entity/User"

const { DB_DIARECT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, DB_LOGGING } = process.env

export const AppDataSource = new DataSource({
  type: DB_DIARECT,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: Boolean(DB_LOGGING),
  entities: [User],
  migrations: [],
  subscribers: [],
} as DataSourceOptions)

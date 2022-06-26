import { DataSourceOptions } from "typeorm"

// 現在、有効になっていない
declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly NODE_ENV: 'development' | 'production' | 'test'

    readonly APP_ENV: 'development' | 'production'
    readonly APP_URL: string
    readonly SERVER_PORT: Number
    
    readonly DB_DIARECT: DataSourceOptions
    readonly DB_NAME: string
    readonly DB_HOST: string
    readonly DB_PORT: number
    readonly DB_USER: string
    readonly DB_PASSWORD: string
    readonly DB_LOGGING: boolean
  }
}
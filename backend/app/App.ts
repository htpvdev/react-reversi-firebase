// process.envを使うモジュールの先頭に必ず書く
import * as config from './common/config'
config.setDotenv()
const { SERVER_PORT } = process.env

import express from 'express'
import routes from './routes'

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

// すべてのルーティングはroutes/index.tsに集約して管理する
app.use('/', routes)

// リクエスト待機状態を開始
app.listen(SERVER_PORT, () => {
    console.log(`Start on port ${SERVER_PORT}.`)
})

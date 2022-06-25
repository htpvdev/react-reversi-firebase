// .envの設定を読み込む。一番最初にこのファイルが実行されるため、ここで.envの値をprocess.envにセットすることで、全てのファイルで.envの値を取得できるようになる
import config from './common/config'
config()

import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./common/data-source"
import { Routes } from "./routes"

const { APP_URL, SERVER_PORT } = process.env

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: any) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(SERVER_PORT)

    console.log(`Backend Server has started on ${APP_URL}:${SERVER_PORT}.`)

}).catch(error => console.log(error))

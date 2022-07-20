// .envの設定を読み込む。一番最初にこのファイルが実行されるため、ここで.envの値をprocess.envにセットすることで、全てのファイルで.envの値を取得できるようになる

import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { Server, Socket } from 'socket.io';
import * as http from 'http';
import { AppDataSource } from './common/data-source';
import { Routes } from './routes';
import config from './common/config';

config();

const { APP_URL, SERVER_PORT } = process.env;

const app: express.Express = express();

// //CROS対応（というか完全無防備：本番環境ではだめ絶対）
// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*")
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// })

const server: http.Server = http.createServer(app);
const io = new Server(server, {
  serveClient: false,
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// io.on('connect', (socket) => {
//   socket.on('sendChat', (msg) => {
//     console.log('called.');
//     socket.emit('recieveChat', msg);
//   });
// });
io.on('connection', (socket) => {
  console.log('connection called.');
  socket.on('sendChat', (msg) => {
    console.log('sendChat called.');
    io.emit('recieveChat', msg);
  });
});

// io.on('connection', (socket: Socket) => {
//   // shori
//   console.log(socket.rooms)
//   socket.join('room1')
//   console.log(socket.rooms)
// })

server.listen(Number(SERVER_PORT));

console.log('haruki made this server.');

// app.get('/', (req, res) => {
//   res.send('<h1>Hessssss</h1>')
// })

// io.on('eventName', (socket: Socket) => {
//   console.log('user connected')
// })

// server.listen(Number(SERVER_PORT), () => {
//   console.log(`Backend Server has started on ${APP_URL}:${SERVER_PORT}.`)
// })

// const io: Server = new Server(Number(SERVER_PORT))

// io.on('connection', (socket: Socket) => {
//   // socket.emit('hello from server', 1, '2', { 3: Buffer.from([4]) })
//   socket.emit('eventName', 'This is Response daze!', (response: string) => {
//     console.log(response)
//   })

//   socket.on('hello from client', (...args) => {

//   })
// })

// AppDataSource.initialize().then(async () => {

//     // create express app
//     const app = express()
//     app.use(bodyParser.json())

//     // register express routes from defined application routes
//     Routes.forEach(route => {
//         (app as any)[route.method](route.route, (req: Request, res: Response, next: any) => {
//             const result = (new (route.controller as any))[route.action](req, res, next)
//             if (result instanceof Promise) {
//                 result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

//             } else if (result !== null && result !== undefined) {
//                 res.json(result)
//             }
//         })
//     })

//     // setup express app here
//     // ...

//     // start express server
//     app.listen(SERVER_PORT)

//     console.log(`Backend Server has started on ${APP_URL}:${SERVER_PORT}.`)

// }).catch(error => console.log(error))

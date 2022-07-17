# Reactでオセロを作ろうの巻

Angular で、一度オセロの制作をしました。今度はReactで！

- フロントエンドはReact(TypeScript)、バックエンドはExpress(TypeScript)、コード評価ツールのESLintを使う！
- プレイヤー同士の通信対戦(双方向通信)を実現するため、Socket.ioを使う！

## 開発環境

- nodeのバージョン: 18.3.0
- npmのバージョン: 8.12.2

ローカル環境構築の要件
1. 上記のnode.jsがインストールされており、PATHが通っていること(voltaを推奨します)
2. Dockerがインストールされていること
3. VSCodeで開発すること(自動タスクやデバッガなどを使う場合)

#### 初回環境構築手順
1. client/.envを作成して、client/.env.local.exampleの内容をすべてコピペする
2. clientディレクトリに移動して、`npm ci`を実行。
3. backend/.envを作成して、backend/.env.local.exampleの内容をすべてコピペする
4. backendディレクトリに移動して、`npm ci`を実行。
5. reversi-dbディレクトリに移動して、`docker compose up -d --build`を実行

...とやってもいいが、一括でやってくれる「タスク」を作成したので、VSCodeであれば簡単に環境構築できる

1. VSCodeで、F1キーなどでコマンドパレットを呼び出し、`>task`と入力すると、「タスクの実行(Run Tasks)」という項目が出てくるので、それを選択
2. `初回環境構築 全部セット(Windows)`を選択すると環境構築が始まる(MacOSの場合は、`初回環境構築 全部セット(Mac)`を選択する)。
3. 「このタスクをスキャンせずに続行」的なやつを選択する。


### ローカルサーバ起動方法(2回目以降)

フロントエンドサーバとバックエンドサーバ、DBサーバの3つを起動する必要がある。

1. clientディレクトリに移動して、`npm start`を実行する。
2. backendディレクトリに移動して、`npm start`を実行
3. reversi-dbディレクトリに移動して、`docker compose up -d`を実行

...とやってもいいが、一括でやってくれる「タスク」を作成したので、VSCodeであれば簡単に起動できる。

1. VSCodeで、F1キーなどでコマンドパレットを呼び出し、`>task`と入力すると、「タスクの実行(Run Task)」という項目が出てくるので、それを選択
2. ` 全てのローカルサーバ起動`を実行するとすべてのサーバが起動する(個別で起動もできる)。
3. 停止するときは、再度1の手順を行い、「タスクの実行(Run Task)」の中からpostgresqlサーバの停止タスク`postgresqlサーバ終了`を実行する。
4. その後、コマンドパレットで`>task`と入力して、「タスクの終了(Terminate Task)」を選択し、「全てのタスクを終了」を実行する。

### client

Reactフロントエンドサーバ。ユーザ向けの画面を表示する。http://localhost:3000


また、VSCodeだとブレークポイントを置いたデバッグが使える。  
1. まずは、clilent(react)サーバを**起動**する。
2. Ctrl + Shift + D でデバッグタブを開き、client(Debug)の実行ボタンを押すと、デバッグサーバが起動する。

  (clientの実行ボタンを押すと、デバッグせずにclientサーバを起動できる。ただし、タスクやnpm startの方が高速)

### backend

ExpressバックエンドAPIサーバ。postgresqlのDBサーバと通信してデータを取得し、APIでフロントエンドにデータを供給する。http://localhost:4000


また、バックエンドも同様にブレークポイントでのデバッグができる。
1. まずは、バックエンドサーバがすでに起動していれば**終了**する(clientとは手順が違うので注意)。
2. Ctrl + Shift + D でデバッグタブを開き、backend(Debug)の実行ボタンを押すと、デバッグサーバが起動する。



## 知見まとめ

ES Modules == ESM (import/export)
CommonJS   == CJS (require/module.exports)

しばしば、対比の言葉として使われる



## やったことメモ

アプリのインストール
- `npx create-react-app . --template typescript`

ESLintのローカルインストール
- `npm i eslint`

ESLint セットアップ
- `npx eslint --init`
- 以下のように質問が出てくる。それぞれこのように回答した。
- 参考
  - https://zenn.dev/jpn_asane/articles/d7f44682b74fdc
  - https://zenn.dev/ro_komatsuna/articles/eslint_setup
  - https://saki-htr.hatenablog.com/entry/2021/08/26/145418#1-npmを使ってインストールする
  - https://qiita.com/uhooi/items/f22b53b6e39228fc4826

```
PS C:\work\react-reversi> npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
√ How would you like to use ESLint? · [problems]
√ What type of modules does your project use? · [esm]
√ Which framework does your project use? · [react]
√ Does your project use TypeScript? · No / [Yes]
? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Where does your code run? · [browser]
√ What format do you want your config file to be in? · [JSON]
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
√ Would you like to install them now with npm? · No / [Yes]
Installing eslint-plugin-react@latest, @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest
```

SCSS導入方法
- 以下のコマンドを順に実行
  - `npm add node-sass`
  - `npm i -s node sass`
  - `npm i add node-sass`

ルーティングをするためにreact-router-domというライブラリをインストールする
- `npm i react-router-dom`

Material-UIのインストール
`npm install @mui/material @emotion/react @emotion/styled`

ループで複数生成する要素に与えるkeyについて
 - https://qiita.com/koba04/items/a4d23245d246c53cd49d
 - https://dev.classmethod.jp/articles/avoiding-warningeach-child-in-a-list-should-have-a-unique-key-prop-in-react-apps-is-called-and-not-on-the-side-do-it-on-the-caller/

バックエンドサーバを作るため、一旦開発環境を整えた。
その時、Reactアプリをブレークポイントを置いてデバッグできるように設定を追加。
- (参考):https://zenn.dev/rhene/articles/setup-vscode-to-react-debug

バックエンドサーバの作成
1. `npm init -y`でpackage.jsonを作成(パッケージをインストールするために)
2. backendディレクトリで、以下のパッケージをインストール
  - `npm i typescript`
  - `npm i @types/node`
  - `npm i -D ts-node` (ts-nodeはTypeScriptをコンパイルせずに実行するためのもの。本番環境には不要なので、-Dで本番環境にはインストールしない設定にする)
  - `npm i express`

(参考)
- https://qiita.com/zaburo/items/69726cc42ef774990279
- https://zenn.dev/chida/articles/882d9fb1d71fa1

双方向通信用のライブラリsocket.ioとかの整備
- socket.ioの、React側のインストール
  - `npm i socket.io-client @types/node`

バックエンド側で、環境変数を使うためdotenvをインストール
- `npm i dotenv`
- (参考)
  - https://zenn.dev/maztak/articles/00aa3fcc643550
  - また、Reactアプリで使う環境変数は、頭文字に`REACT_APP`とある必要がある

バックエンド側で、sqlite3をインストール
- `npm i @types/sqlite3`
- (参考)
  - (公式) https://github.com/TryGhost/node-sqlite3
- 追記：sqliteではHerokuデプロイするのはリスクが高いので、普通にPostgreSQLに変更、npm uninstallでこのライブラリを削除した。

バックエンド側で、sequelizeをインストール
- sequelizeは、DBマイグレーション、ORM(モデルとかの機能)等をサポートしてくれて、様々なDBMSに対応している。最強。
- (参考)https://sequelize.org/docs/v6/getting-started/
  - `npm i sequelize`
  - また、公式ドキュメントではDBMSごとの「ドライバ」のインストールが必要なので、インストール
  - `npm i pg`
  - `npm i pg-hstore`
  - また、sequelizeのマイグレーションコマンドなどを実行するためのCLIをインストール(参考： https://qiita.com/cobot00/items/0bc0da1095e09bcd0d5f )
  - `npm i sequelize-cli-typescript`
  - DB接続の設定ファイル(config.json)等を生成する
  - `npx sequelize init`
  - .envに接続設定
  - (参考)https://qiita.com/murasuke/items/091066161aaff76db9be
  - `npx sequelize-cli model:generate --name rv_room --attributes name:string,password:string --underscored`

  - **sequelizeを取りやめました。**代わりに、TypeORMというパッケージを使うよう変更。以下のサイトを見て決断。
    - (参考)https://qiita.com/tejitak/items/b6965380afd600db6513
    - (参考)https://scrapbox.io/dojineko/Sequelize_から_TypeORM_に移行してみた
  - typescriptの情報がなかったり、サイト通りやっても動かなかったり、いろんなサイト見たがうまくいかなかった。グッバイ、sequelize。

バックエンド側にTypeORMのインストール
  - (参考)https://typeorm.io/
  - `npm i typeorm`
  - (typeorm公式ドキュメントによると、typeorm以外にも、reflect-metadataというライブラリと、各DBMSごとのドライバもインストールしなくてはいけないらしい)
  - typeormをインストールすると、cliツールも使えるらしい。初期設定用のコマンドを実行。以下のコマンド一つで、expressを初期設定済みでインストールしてくれるらしい。これをexpress入れる前に知っていれば…。さらに、デコレータ(@から始まるやつ)の構文を使えるようになるreflect-metadataというライブラリもインストールされる。
  - `npx typeorm init --database postgres --express`
  - モデルの使い方的なやつ参考： https://www.tabnine.com/code/javascript/functions/typeorm/Repository/findOne
  - マイグレーションのやり方については、こちらの神記事が教えてくれてる。
  - https://qiita.com/qualitia_cdev/items/eb8f2c614c0435b9a120
  - マイグレーションファイルを作成するには、以下のコマンドを実行する
  typeorm migration:create ./カレントディレクトリからmigrationディレクトリまでのパス/マイグレーションファイル名
  - マイグレーション実行は以下の通り
  - `npx typeorm-ts-node-esm migration:run`

##### socket.ioを本腰入れて勉強していく

- backendにsocket.ioのインストール
- `npm i socket.io-client`
- clientにsocket.ioのインストール
- `npm i socket.io`

- 公式ドキュメントを読んでいこう。
  - https://socket.io
    - 曰く、どうやら双方向通信にはWebSocketという技術規格があるらしく、これをそのまま使うためのnpmパッケージも
      存在するらしい。Socket.ioは、より記述をシンプルにして実装できるらしいが、内部でWebSocketライブラリを使っているわけではないらしい。
    - Socket.ioの、Websocketにない機能
      - 自動再接続（いい感じにやってくれてる）
      - 

```
import { Photo } from "./entity/Photo"
import { AppDataSource } from "./index"

const photo = new Photo()
photo.name = "Me and Bears"
photo.description = "I am near polar bears"
photo.filename = "photo-with-bears.jpg"
photo.views = 1
photo.isPublished = true

await AppDataSource.manager.save(photo)
console.log("Photo has been saved. Photo id is", photo.id)
```

### 【備忘】@types/～ から始まるパッケージについて

- この記事に全部書いてある。
- https://qiita.com/pepo/items/81e2b71b624633ba272e



### メモ

今後の作業計画

1. 部屋を作成して、知り合い同士で試合をするやつを作成

2. マッチングシステムを作成
  - 

3. 戦績管理システムを作成

4. レーティングシステムを作成

5. レーティングによるマッチングの偏りを作成

6. CPUサーバを作成

7. 機械学習システムを作成


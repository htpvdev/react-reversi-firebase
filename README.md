# Reactでオセロを作ろうの巻

Angular で、一度オセロの制作をしました。今度はReactで！

- フロントエンドはReact(TypeScript)、バックエンドはExpress(TypeScript)、コード評価ツールのESLintを使う！
- プレイヤー同士の通信対戦(双方向通信)を実現するため、Socket.ioを使う！

## 開発環境

- nodeのバージョン: 18.3.0
- npmのバージョン: 8.12.2

### ローカルサーバ起動方法(2回目以降)

フロントエンドサーバとバックエンドサーバの2つを起動する必要がある。

1. clientディレクトリに移動して、`npm start`を実行する。
2. その後、backendディレクトリに移動して、`npx ts-node app/App.ts`

...とやってもいいが、一括でやってくれる「タスク」を作成したので、VSCodeであれば簡単に起動できる。

1. VSCodeで、F1キーなどでコマンドパレットを呼び出し、`>task`と入力すると、「タスクの実行(Run Tasks)」という項目が出てくるので、それを選択
2. `Run Client and Backend`を選択するとすべてのサーバが起動する。

### client

Reactフロントエンドサーバ。ユーザ向けの画面を表示する。http://localhost:3000

#### 初回環境構築手順
1. client/.envを作成して、client/.env.local.exampleの内容をすべてコピペする
2. clientディレクトリに移動して、`npm i`を実行。

また、VSCodeだとブレークポイントを置いたデバッグが使える。  
1. まずは、clilent(react)サーバを起動する。
2. Ctrl + Shift + D でデバッグタブを開き、client(Debug)の実行ボタンを押すと、デバッグサーバが起動する。

  (clientの実行ボタンを押すことで、clientサーバを起動できる)

### backend

Expressバックエンドサーバ。sqliteデータソースからデータを取り出し、APIでフロントエンドにデータを供給する。http://localhost:4000

#### 初回環境構築手順
1. backend/.envを作成して、backend/.env.local.exampleの内容をすべてコピペする
2. backendディレクトリに移動して、`npm i`を実行。


## やったことメモ

Reactのインストールやってくれるやつ(create-react-app)のインストール
- `npm i -g create-react-app`

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
  - `npm i ts-node`
  - `npm i express`

(参考)
- https://qiita.com/zaburo/items/69726cc42ef774990279
- https://zenn.dev/chida/articles/882d9fb1d71fa1

双方向通信用のライブラリsocket.ioとかの整備
- socket.ioの、React側のインストール
  - `npm i socket.io-client @types/node`

バックエンド側で、環境変数を使うためdotenvをインストール
- `npm i dotenv`
(参考)
- https://zenn.dev/maztak/articles/00aa3fcc643550
- また、Reactアプリで使う環境変数は、頭文字に`REACT_APP`とある必要がある

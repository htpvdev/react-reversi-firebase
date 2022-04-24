# Reactでオセロを作ろうの巻

Angular で、一度オセロの制作をしました。
⇒今度はReactで！

- React + TypeScript , ESLint を使う！

## やったことメモ

Reactのインストールやってくれるやつ(create-react-app)のインストール
- `npm i -g create-react-app`

アプリのインストール
- `npx create-react-app . --template typescript`

ESLintのローカルインストール
- `npm i eslint --save-dev`

ESLint セットアップ
- `npx eslint --init`
- 以下のように質問が出てくる。それぞれこのように回答した。

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
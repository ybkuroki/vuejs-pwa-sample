[English Version](./README-EN.md)

# vuejs-pwa-sample

## はじめに
本プロジェクトは、[Vue.js](https://jp.vuejs.org/index.html)、[Vue Material](https://vuematerial.io/)と[PWA(Progressive Web Apps)](https://developers.google.com/web/progressive-web-apps/)を用いて実装したサンプルである。
本サンプルでは、[Connpass Web API](https://connpass.com/about/api/)を利用している。

## 開発環境構築手順
以下の手順で開発環境を構築する。

1. [Node.js](https://nodejs.org/ja/)をダウンロード・インストールする。

1. [Visual Studio Code](https://code.visualstudio.com/)(以下、VS Code)をダウンロード・インストールする。

1. VS Codeの拡張機能である[vetur](https://github.com/vuejs/vetur)をインストールする。

1. 依存関係のあるライブラリをダウンロードする。
    ```bash
    npm install
    ```

## 動作確認手順
以下の手順で動作を確認する。

1. 本リポジトリをクローンする。

1. ソースコードをビルドし実行する。
    ```bash
    npm run serve
    ```

1. ブラウザで[http://localhost:8080/home](http://localhost:8080/home)にアクセスする。

開発環境では、Service Workerは動作しない設定となっている。
Service Workerの動作確認には[Service Worker for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)を使うと良い。

1. Chromeブラウザに「Service Worker for Chrome」をインストールする。

1. 「Service Worker for Chrome」を起動する。

1. 「Service Worker for Chrome」の「choose folder」で``dist``ディレクトリを選ぶ。

1. 「Web Server URL」にアクセスする。

## 配布用ビルド手順
以下の手順でビルドする。

1. 配布用ビルドを実行する。
    ```bash
    npm run build
    ```

## 画面一覧
表示する画面は以下の通りである。

|画面名|ファイル名|概要|
|:---|:---|:---|
|ホーム画面|``Home.vue``|Connpassでイベントを検索する画面|
|アプリ情報画面|``About.vue``|本アプリの情報を表示する画面|

## コンポーネント一覧
上記画面で利用するコンポーネントは以下の通りである。

|コンポーネント名|ファイル名|概要|
|:---|:---|:---|
|ヘッダー|``Header.vue``|Webアプリのヘッダーを定義|
|カード|``Card.vue``|コンテンツを表示するためのカードを定義|

## 利用ライブラリ
以下のライブラリを主に利用している。

|ライブラリ名|バージョン|概要|
|:---|:---:|:---|
|Vue.js|``2.6.10``|Javascriptフレームワーク|
|Vue Router|``3.0.3``|Vue.jsのためのルーティングライブラリ|
|Vue Material|``1.0.0-beta-10.2``|Vue.jsのためのマテリアルデザイン|

## ライセンス
本プロジェクトのライセンスは、MITライセンスです。


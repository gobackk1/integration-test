# 結合テスト
## 概要
単体テストに対して、それぞれのモジュールを組み合わせて一連の流れをテストする手法。
JavaScriptにおける結合テストは、HTMLやCSSも含めた実際のWebアプリケーションをブラウザで実行し、期待通りに動作するかを確認する。

## PhantomJSを使う
[PhantomJS - Scriptable Headless Browser](https://phantomjs.org/index.html)
PhantomJSはGUIをもたない（画面表示のない）WebKitベースのヘッドレスブラウザです。

### ヘッドレスブラウザ
GUIを持たないブラウザ

### 利点
- GUIを持たないサーバーでもJavaScriptのテストを実行できる
- JavaScriptがないとデータが表示されないサイトのスクレイピングなどができる。
- ブラウザの表示がないだけで、内部では画像やCSSのレンダリングを行っているから、レンダリング結果をキャプチャし画像で表示することもできる。

### CasperJS
[CasperJS, a navigation scripting and testing utility for PhantomJS and SlimerJS](http://casperjs.org/)
PhantomJS自身はテストのための機能は持っていないので、テストのためにCasperJSというPhantomJS上で動くテストフレームワークを利用する。

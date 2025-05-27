---
title: "npmパッケージのアップデート"
date: "2025-05-26 22:00:00"
slug: 'npm-packages-update'
description: "Dependabotに薦められたが手動でやったw"
book:
music:
# featuredImage: "asset/Dependabot.avif"
featuredImage: "asset/outdated0250526.avif"
---

仕事が忙しいと、趣味の侘しい開発環境は長らく放置で、世界もNodeもドンチャカ進んでいく。<br>
その間、GitHubのディペンダボットからたくさんのお便りをいただいた。

<span style="display: block;margin-bottom: 4em;"></span>
## GitHub security alert digest

彼もしくは彼女は、なんでハニカム構造を尊ぶがごとし見た目で愛らしいハニカム面しているんでしょうか。<br>

「はにかむ」は漢字だと「含羞む」<br>

ハニカム<ruby>面<rt>ヅラ</rt></ruby>なのか<ruby>含羞<rt>はにか</rt></ruby>んだお顔なのか、よくわからないが<br>
何度もお便りをいただいているうちに「共感羞恥」顔にも見えてくる。

はいはい、そのうちやります。の度がすぎて、アイコンに人格を付与する妄想に入った。<br>
やるならやらねば。

<img src="asset/Dependabot.avif" loading="lazy" width="100vw" alt="">

ただし、この記事の主題は、npmでパッケージ個別アップデートをする方法の備忘録で<br>
ハニカム氏については、対処法や使い方、いくらでも良記事があるはずなので、他をご参考いただくとして。


わたくしの備忘録としては、
<span style="display: block;margin-bottom: 3em;"></span>

## 手動とオートメーションを混ぜるな危険

いくら良記事があって、（<b>お任せ</b>でやってみようかなぁ）と楽しげな誘惑に駆られても

あとで焦れったくなって手動に切り替えるくらいなら、最初から手動でコツコツやれ。<br>
ローカルとリモートで同時進行すると、その気紛れは、あとでgit pushに同期拒否される。<br>
この自己反省のみ。

要はあっちゃこっちゃ、同時にやるな。
（特に頭にパーテンションのない桐山零タイプは）

<hr>

## まずは完了形

<img src="asset/outdated-After.avif" loading="lazy" width="100%" alt="">

そこそこ我慢ごろというか安定かつ警鐘なしになった画面が上。

<span style="display: block;margin-bottom: 2em;"></span>

作業前が記事のフィーチャー画像にした↓なので<br>
どれほど健闘したか
というより
・・・どんだけ放置してきた
という話である。

<img src="asset/outdated0250526.avif" loading="lazy" width="100%" alt="">

<span style="display: block;margin-bottom: 2em;"></span>
まぁいいんだ。制作費を稼げるサイトが先なのでね。<br>
ここは学習能力の無さを、暇な時に振り返って痛感するための別荘ともいえる。

<hr>

```bash
npm outdated
```
<span style="color: crimson;">前提として、node.js , Gatsby.js , Gatsby CLI , は適宜アップデートしたあと</span>

プロジェクトフォルダでNodeパッケージマネージャに、時代遅れになっているものを訊く。<br>
<u>Current</u> /
<u>Wanted</u> /
<u>Latest</u>
<span style="margin-left: 1em;"></span>がわかりやすい表になっており、

- **Wanted** 以上に達しているバージョンはイエロー文字
- 未満バージョンが「問題あり」としてオレンジ文字
- 最新バージョン**Latest**以上のパッケージは載らない

差し替え対象は、オレンジ文字の行数だけある。
先は長い。

<hr>



<span style="display: block;margin-bottom: 4em;"></span>


```bash
npm install --save-dev
```
量が多すぎたので！<br>
作業用のメモ帳的なアプリに、npm install --save-dev + 半角スペースを<br>
だだーっとコピペしまくって、オレンジ文字の中で目につくパッケージから上書きインストールしていきました。

<span style="display: block;margin-bottom: 3em;"></span>

```bash
npm install --save-dev sass
```
<span style="display: block;margin-bottom: 4em;"></span>

## update ではなく --save-dev を使う。

今回のお題目として、まともにセキュリティ脆弱性を排除した安定版の開発環境にもっていくこと、
package.json の dependencies 対処でディペンダボットに泣き止んでいただくこと。

npm update では package.json の更新をしないので
dependencies 対処として、<br>**update** ではなく **--save-dev** を使い1つ1つ地道に潰していったんですが。

<span style="display: block;margin-bottom: 2em;"></span>

## npm-check-updates を使う。

という便利な方法があるらしい。

<span style="display: block;margin-bottom: 2em;"></span>

<img src="asset/outdated-After.avif" loading="lazy" width="100%" alt="">

<span style="display: block;margin-bottom: 2em;"></span>
再びもってきた現状の最終形。

<b>package.json に記載された semver のルールに従うため、^ つきの記載だとメジャーバージョンのアップデートまでは行ってくれない。</b> ・・・ によって、残されたもの。

<b>^</b>（キャレット）つきの記載は互換性のあるバージョンということで、


```bash
@mdx-js/react    2.3.0    2.3.0   3.1.0
gh-pages         3.2.3    3.2.3   6.3.0
```
mdx-js は、2.3.0 から 3.1.0 へ<br>
gh-pages は、3.から6.へ<br>
reactは、18.から19.へ<br>メジャーバージョンアップができなかった結果。

<hr>

数あるパッケージをまとめてメジャーバージョンアップするには、**npm-check-updates**が良い。とわかったところで、参考記事をリンクしておく。


- [npm installしたパッケージの更新確認とアップデート(npm-check-updates) - dackdive's blog](https://dackdive.hateblo.jp/entry/2016/10/10/095800)


- [package.json dependencies メンテの仕方 最短ルート #JavaScript - Qiita](https://qiita.com/alfe_below/items/1141ec9acbb81b504855)


- [package.json に記載されているパッケージのバージョンアップ方法 【 npm-check-updates, outdated 】 #npm - Qiita](https://qiita.com/sugurutakahashi12345/items/df736ddaf65c244e1b4f)

<hr>

今回はある意味、Contentful周辺の除外が目的だったのもあり、それこそ1行ずつ確実に消したり上書きする作業を目視したかった、時間かけたい系「鈍行」気分だったのですが、次回**npm-check-updates**知見を活かしたいと思います。

<span style="display: block;margin-bottom: 4em;"></span>

ところで、今時「鈍行」なんて単語通じるのか・・・と思いググると、現代語では「各停」「各駅停車」だそうで。

おぉ、そうまさに「各駅停車」でいちいちホームを眺めて運行確認したかったため、表現は合ってた。

<span style="display: block;margin-bottom: 4em;"></span>

そんなわけで、Contentfulからすっかり足を洗うリモデル完了。<br>
外観テーマを先に手掛け、あとからpackage.json書き換え込みのNodeパッケージ改め。

ContentfulのRich-textエディターもWPのブロックエディターも、よく出来てはいるけど、所詮HTML書けるやつのMarkdownの楽さ、速さには適わない。

<span style="display: block;margin-bottom: 8em;"></span>
余談ですが、わたくしのMarkdownはかなりインチキで（笑）

Markdownで空白行を複数挿むとか、この無骨モノには（なにその繊細な話・・・）だけど

```html
<span style="display: block;margin-bottom: 3em;"></span>
```
と、これブロックエディターの「スペース」ブロックで思いついた。<br>
3emの値を変えれば、100行の空白も造作なく作れる、空白おきには便利。

WPの場合は透明なdivをデフォルトで100px挿入するブロック、あれはまるで今時のスペーサーGIF

必要な要件は今も昔もたいして変わらんのねー。て事でMarkdownも半分はHTMLで書いている。<br>
通常のMarkdownエディタのプレビューに直タグは表現されないけど、VS Code使いにはEmmetが速度の鍵。

## Notion

も、やたらと便利なタスク管理、くらいな気でライトユーザーでいましたが、今回コード転記に使っていて、（これ、つまりMarkdownだな）と気づき、いちいち「コードを挿入」するのが面倒で、
<span style="font-weight:bold; color:crimson;">```</span>記号（アクサンクラーブ3つ）打った時点で、ちゃんと「コードを埋め込む」マウス操作と同じく、スニペット枠の中にいました。

ハニカムちゃんの話題からだいぶ遠かったところで、終わり。
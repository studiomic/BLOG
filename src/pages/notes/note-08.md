---
title: "さようならGatsby Cloud。そして再びのNetlify"
date: "2024-03-24 10:00:00"
slug: 'note-08-BonjourTristesse'
description: "おかげでダークモードも長いお別れで筆者がダークモードに"
book:
music:
featuredImage: "asset/Frame.avif"
---

<img src="asset/GatsbyCloud.avif" alt="Gatsby Cloud" width="100%">

<section style="margin-bottom: 5em;">

なんとのうGatsbyがNetlifyに買収されたことは知っていたような、昨年末くらいだったかサイト移行しなきゃならんの・・・？　と締切を頭の片隅に見つつ、忙しくて忙殺されていた。

今も忙しいのだが、WordPressばかり触っていると苦しくなるので、息抜きにローカルでGatsbyの開発環境立ち上げて、Github Pagesにでも移行するかと腰をあげ、やっているうちにGithub Pagesのパス周りに虚しさを感じたので結局は当初から（きっとそうなるんだろうなぁ）と思っていたNetlifyへの移行とあいなりました。

<hr>

というわけで、今日からこのサイトは<br>
Netlifyサブドメイン : [stylode.netlify.app ](https://stylode.netlify.app/)へ引っ越した。<br>
 [https://studiomic.net/ ](https://studiomic.net/)へのDNS設定も23：33、たった今反映されたのを確認。

さて、この記事のスラッグをURLで確認できる人はどうぞ見て。

<h2 class="bold blue-col">Bonjour Tristesse</h2>

サガンの「悲しみよこんにちは」ままである。<br>
Gatsby Cloud、速いし操作性いいし狙い目すぎて、そら狙われるわねぇと年末あたりに溜息まじりで舌打ちしていた。

古くはAppleの「無料ホームページ」スペースたらいうものから始まって、GMOのブログサービスが突然移行になるとか、本当にタダほど高いものはない。（後でかかるコストと失せもの被害が大きい）

<hr>


あぁ、WordPressの改変＋改変も、良く進んでるなという客観視から、もぅ少し他人事にまで距離を置くと、まさに（でも待て。そこまでの学習コストかけてまで関わりたいほど魅力的ではない）と気づいてしまったり。

オープンソースもフリーも、無料であると同時に創作側にこそ手放す自由があるのかもね。<br>
と閑話休題。
</section>

<section style="margin-bottom: 6em;">


<h1>Gatsbyの移行はスムーズ</h1>

もともと動いていたもの、かつソースはGithubリポジトリにあるため、ホスティング先で成果物に大差はないはずなのだが、うちの場合は前記事の「use-dark-mode」がネックになって2度ほどデプロイに失敗し、エラーログを見ると（あぁやっぱり）そこで躓くか・・・ということで、

ライト・ダークモード切り替えトグルを書いていたcomponents：navigationを編集手当てして<br>
gatsby-plugin-use-dark-mode + use-dark-modeをアンインストール

```jsx
8:11:26 PM: npm ERR! code ERESOLVE
8:11:26 PM: npm ERR! ERESOLVE could not resolve
8:11:26 PM: npm ERR!
8:11:26 PM: npm ERR! While resolving: use-dark-mode@2.3.1
8:11:26 PM: npm ERR! Found: react@18.1.0
```
次ですんなりとパブリッシュ完了。

あ。Netlifyは前に使っていたので、アカウントはすでにあり前準備のようなことは全部はしょり。<br>
ContentfulがわりとNetlifyへの連携しやすかったんですよね。<br>
そのため使いはじめた当初は苦労した覚えがない。
<hr>


<h2>DNS設定</h2>
<img src="asset/2024-03-24-22.00.13.avif" alt="Set up DNS" width="100%">

カスタムドメイン追加ボタンから、入力フィールドへ進み「studiomic.net」と打ち込むと、しばし調べたあと「使われてますね」とお返事された。

そこだけ少し戸惑って（そら私がオーナーですもの）　えっと、ここで取得済みドメインを指定するんじゃないの・・・？と一度キャンセルして他の画面を探したが、ここでは

「持ち主のいるドメインを指定しているが、これで構わないんだね？」と訊かれているらしく<br>
そのまま進むと <span class="bold">2.Add new record</span> この画面へ入れた。
<hr>

つまり <span class="bold">空いているドメイン</span> をこの流れで取得できるんでしょうね。<br>
考えたらホスティングサービスなら当然か。<br>

んー。ドメイン検索＆取得の画面て、.comならX円/年 .jpならX円/年みたいなのがずらーりと出るような思い込みが過ぎて気づかなかった。

そうそうテンプレートもあるのでね、Siteテンプレートを選んでそのプロジェクトをGithubにクローンしてリポジトリ作ってくれて、編集できるようになったところで、あるいは完成させたところでドメイン購入。あるあるですわね。

当然ながら気になったらやってみた。（Now

<img src="asset/2024-03-25-3.08.35.avif" alt="" width="100%">

レジスター・ドメイン・なぅ・フォー・＄13.99<br>
paymentへ進むか、Try anotherするか。なるほど。


<img src="asset/2024-03-25-3.09.17.avif" alt="" width="100%">

<h3>カスタム ドメインをサイトに追加する</h3>

すでに所有しているドメイン名を使用することも、新しいドメイン名を購入することもできます。 弊社でドメインを購入すると、DNS 設定が自動的に構成され、ドメインのワイルドカード証明書がプロビジョニングされます。（Google翻訳）
<hr>

ふ。　いかに私が読まずに進んだか、今発覚する。

まぁでもこのPOSTを書き出したときタイトルを「さようならGatsby Cloud。そしてまたおまえかNetlify！」としかけていた気分がだいぶ和んでます。

話の外れ逸れまくったDNS設定値は、実際のドメイン管理をしているホスティングサービス側でタイプAとCNAMEを編集・追加して完了。

<img src="asset/2024-03-25-2.13.22.avif" alt="Gatsby Cloud" width="100%">
<hr>

<img src="asset/2024-03-24-22.26.47.avif" alt="Gatsby Cloud" width="100%">

</section>


<section style="margin-bottom: 4em;">

<h1>Github Pages却下の理由</h1>

疲れたのはこっちかな。

[How to deploy the /public folder](https://github.com/orgs/community/discussions/21853)

Githubのコミュニティページを翻訳で読んで萎えた笑

2022年7月に GitHub Pages: Custom GitHub Actions Workflows (beta)というオフィシャルブログの記事があり、新しいGitHub Actionsについて解説してくれている日本語サイトもありました。

古い手法とどっちでやれば？ で迷って専用ブランチを追加したり錯綜したのが悪いともいえるけども、その経緯の中でズバリ英語検索して出てきたのが上のコミュニティページ。


<span class="bold">Q.）Index.html が /public/ フォルダーにある場合、どのようにデプロイすればよいですか?</span>

にはじまり、途中の<span class="bold">スレッド）/public などの任意のフォルダーから gh-page を提供する機能を追加してください。</span>

に至るまで、何年越しで放置されてきたんだ、この仕様。<br>

途中腹を空かせて買い物に出て、机を離れて空の下にいるとシラフに戻るんですよね。

<span class="bold">（あ、ダメだ。この知見をモノにしたところで、1円にもならない。）</span>
<hr>
いやいや。1銭にもならないことに血道を上げるタイプですけども！<br>
それは面白い・やら、楽しい・やら、達成感・自己満足、なにがしかの見返りある場合で、どうしてもuser_name.github.io を使いたいどころか最後にはカスタムドメイン充ててしまうものに、パスの変更あっては面倒すぎる。

単発で使いたいときや、Gatsbyでモックアップ作ったときなど用途によっては無料かつリポジトリと直結してて忘れにくいけども「長居」向きではない。そんな判断ですかね。
<hr>
<span class="bold">！</span>コストかけずに知人のサイトをViteでつくっちゃる。なんて場合は向いてるかなぁ。

</section>

<!-- EOF -->
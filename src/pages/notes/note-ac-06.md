---
title: "Gatsby Cloud"
date: "2023-05-21 10:00:00"
slug: 'gatsby-cloud'
description: "Gatsby Cloudにホスティングすることにした🎵"
featuredImage: "asset/Gloria.avif"
tag: 'Contentful,Gatsby Cloud,Gatsby.js,Rich-Text'
---

つい昨日、このブログはGatsby＋Contentful＋netlifyで、と書いたばかりだが舌の根が乾かないうちにお引越しだ。

Netlifyはわかりやすくて便利なサービスだが、いずれ自分の借りてるレンタルサーバーにホストしたくなるかなーとか迷いながらお試ししていて、ビルドとデプロイ数回したところで

Bandwidth used **22MB/100GB** と、これ無料枠で収まるんかなと気になって。

まぁ最初だけなんでしょうが、ブログでもテーマでも触るときは集中して触るが、放置も長いという性分でとりあえず従量制に向いてない自覚ありのところへ（Gatsby Cloud速いよ）という記事を読み、試してみたらホントに待たされなかったので、そのまま何となく想定していたホスティング先も試さずにカスタムドメインを設定して、studiomicドメインへ戻ってきた。

どこでもかしこでも気軽にお試しがしやすいのは一重にGitHubのリポジトリとGoogle IDのおかげさまだ。

<hr>

とは別に。 Contentfulのリッチテキストのエディターは本当に使いづらくて、WordPressのクラシックエディターのような感じなんすね。

私はあれ、ビジュアルエディターとやらで使ったことほとんどなくて、HTMLを直書きできるモードの方は救いだったけどもContentfulにそれはない。

前記事のcodeだらけのPostだけが、閉じてないよとエラーを吐かれまくり泣きそうになってようやくコツを覚えるまでに四苦八苦。

<hr>

一応ローカルでは、ヘッドレスCMS としてWordPressと繋ぐブログやStaticなタイプや一通り試しているので、インプットの楽さを採るべきか・・などと悶々しながら、しかし。 Contentfulは外せんとなった理由はInstagramですの。

自分のアカウントと連携して写真選んできてフューチャーイメージにできますよ、とか他のサービスではあるんだろうか。 とてもありそうだけどWordPressでは経験なかったんで嬉しかったんですよね。

フューチャーイメージでもHeroイメージでもアイキャッチ画像でもなんでもいいけど、写真選定は苦手、だいたい「ただのおしゃべり」に相応わしい画像なんてないでしょう、上沼恵美子さんしか浮かばん。徹子さんでもいいけど。

<hr>

だがしかしインスタの猫写真は理由もなく載せたい。そこは外せない理由になったんだった。

あ、Markdownがあるぢゃない・も途中頭をよぎりましたが、うーん。Markdownで書くならHTMLで書いた方が速いしなぁ、でやっぱりブロックエディタかリッチテキストと消去法でオチがつくのだった。

リッチテキストのエディタ以外は、コンテンツモデルのバリデーションとかくっきり明快で使い心地はとてもいい。


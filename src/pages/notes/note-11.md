---
title: "最近のGatsbyでGoogleFontを使う方法"
date: "2025-05-14 19:00:00"
slug: 'note-11-GoogleFont-on-Gatsby'
description: "Gatsbyプラグインとかなしで。SEOに書くだけ"
book:
music:
featuredImage: "asset/Google_Fonts_logo.svg.png"
---
<section style="margin-bottom: 5em;">

ググると、方法としてはプラグインをインストールして、configに加筆して・・とか<br>
npmパッケージ「Fontsource」でセルフホスティングして・・など<br>
いくつかやり方はあるようなんですが。


Google fontって、所詮HTML/head内に読み込みを書くものなので<br>
「react-helmet」が非推奨になって、**components/seo.js　を使用している今**<br>

Googleさんからコピーできるソースを

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
```

seo.jsコンポーネントのreturn ()文の中にペーストすれば、解決でした。

```html
return ()
	<>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
		<title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
		<meta name="description" content={metaDescription} />
		以下略・・・
		{children}
	</>
)
```
</section>

この記事の肝は、**components/seo.js　を使用している今** ってところですね。<br>
react-helmetを使っていた時代の記事が蔓延しているため、何かと紛らわしいけど<br>
Gatsbyはたいてい案ずるより産むが易し<br>

考えると、2分くらいでシンプルな答えを思い出すところが好き。
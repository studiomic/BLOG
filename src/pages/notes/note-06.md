---
title: "React-helmetを脱いでGatsby Head APIを冠る"
date: "2023-06-17 16:00:00"
slug: 'note-05-Hello-GatsbyHeadAPI'
description: "Bye, React-helmet to Gatsby Head API"
book:
music: "松任谷由美「DESTINY」"
---
<section style="margin-bottom: 6em;">

<details>
  <summary>もくじ</summary>

- [チュートリアルと参考サイト・ソース](#src)
- [&lt;title&gt;タグを繋げる（React-Helmet）](#title)
- [Gatsby Head APIでtitleを繋ぐ](#title-API)
- [固定ページとテンプレート](#page-template)
- [metadataの書き方](#metadata)
- [Gatsby Head API版 Seoコンポーネント](#seo-js)
- [lang属性は、gatsby-ssr.jsへ](#lang)
- [index.js](#index-js)
- [三項演算子を見直してなおす](#ternary-operator)
- [Gatsby Head API いいですね！](#nice)

</details>
</section>

<section style="margin-bottom: 6em;">

このブログサイトを公開する前からGatsby.jsを触りはじめていたとはいえ、最初からv5で、多分早いうちに
[gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=he)が非推奨だと知った。

かといって、開発環境で興に乗って楽しんでいるときに、大急ぎで対応する気はなかったのだが。<br>
Git branchを3つ使い分けていて・・というかmainと開発環境と2つ使い分けていて、途中で1つ永久保存版に封印したbranchがあった。

その封印ブランチで、```<html lang="ja">``` となおしていたのをmainに反映し忘れていて、後日、```<html lang="en">``` が残っているのに気づき、「カッときてやりました」😆

自分のミスなのにw なんじゃこりゃ〜と松田優作になって、Headごと挿げ替えることに。<br>
どちらかというと「なんだとー！」の発音で「enだとー！」と苦笑した勢いだけでスタート。

咄嗟の思い立ちでいくつかのサイトを参考にさせていただきました。<br>

<a name="src"></a>

列挙：

<blockquote>

[gatsby-plugin-react-helmetが廃止予定に！ヘッダはAPIを使おう【Gatsby.js】 | 謎の技術研究部](https://www.ultra-noob.com/blog/2022/47/)


[非推奨になるreact-helmetからGatsby Head APIに書き換える方法 | ベル15の開発ブログ](https://bel-itigo.com/how-to-use-gatsby-head-api/)

</blockquote>

Gatsby Docs：

<blockquote>

[Gatsby Head API | Gatsby](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/)

[Adding an SEO Component | Gatsby](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/#prerequisites)

</blockquote>

そして何よりも、人気starterのsource（gatsby-starter-blog）

<blockquote>

[gatsby-starter-blog/src/components/seo.js at master · gatsbyjs/gatsby-starter-blog
· GitHub](https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/src/components/seo.js)

</blockquote>
</section>

<section style="margin-bottom: 6em;">


このサイトで使っているスターターは[Contentful / starter-gatsby-blog](https://github.com/contentful/starter-gatsby-blog/blob/master/src/components/seo.js) なのですが、リンクした
**components/seo.js**　は、「gatsby-starter-blog」の**components/seo.js**　とそっくり。

<strong>
前者はReact-helmet版で、後者はGatsby Head API版<br>
</strong>
<hr>


さすがの人気スターターでGatsby, Inc.提供だから、すでにHead API対応済みで参考になるどころじゃない。


そのまま写経で通用するくらい、変数名や手法も同じなので、GitHubでページごとのソースを確認しながら自分のサイトに適用していきました。

<hr>

<a name="title"></a>


今後、Gatsby Head APIへ移行する方の参考になりそうな要点を書き出してみます。

まず大事な ```<title>Document</title>``` 部分。

実際は　-　Pageタイトル　｜　Siteタイトル　- とパイプなどで繋いで2つの値を入れる要素。

固定ページなら ```　About | Stylo de Cerise　```<br>
ブログのPostページなど、テンプレートから動的につくられるページなら　```　記事タイトル | Stylo de Cerise　```　のようにブラウザで表示されるドキュメント・タイトル。

旧react-helmet版では

```js:title=components/seo.js
title={title}
defaultTitle={defaultTitle}
titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
```

title= でページのタイトルを取得し<br>
defaultTitle= にgatsby-config.jsで記載済みのsiteMetadata.titleを代入<br>
titleTemplate= でdefaultTitleを文字列 | パイプ付に整形し<br>


**title** と
**titleTemplate** がtitle:タグに置かれている模様。

```html
<title>{title}{titleTemplate}</title>
```


SEOコンポーネント全体では、27-29行のところ


```js:title=components/seo.js
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description = '', lang = 'ja', meta = [], title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
```
</section>

<section style="margin-bottom: 6em;">


## Gatsby Head APIでtitleを繋ぐ <a name="title-API"></a>


```js:title=components/seo.js
const metaDescription = description || site.siteMetadata.description
const defaultTitle = site.siteMetadata?.title

return (
	<>
		<title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>

...略
```

同じ変数名defaultTitleへ
siteMetadata.titleを代入したあと6行目で、Helmet版と<span class="crimson-col bold">似たような</span>置き換えをしています。


**${title}**　は、

```HTML
<Seo title="About" />
```
といった書き方でSeoコンポーネントに渡していた値です。<br>
ページdescriptionや、BlogPost「Hero Image」をimage=で渡しているケースが多いかと思います。

```HTML
<Seo
	title={post.title}
	description={plainTextDescription}
	image={`http:${post.heroImage.resize.src}`}
/>
```

上の例は、BlogPostテンプレートで<br>
<Layout ・・・の直下に書いていたものですが、Gatsby Head APIの場合は、

**export const Head =** でHTML ```<head>``` に直接書きだす形になります。

```js:title=templates/blog-post.js
export const Head = ({ data: { contentfulBlogPost: post } }) => {
  const plainTextDescription = documentToPlainTextString(
    JSON.parse(post.description.raw)
  )

  return (
    <Seo
      title={post.title}
      description={plainTextDescription}
      image={`http:${post.heroImage.resize.src}`}
    />
  )
}
```

挿入箇所は[実際のソースを見た方が早い](https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/src/templates/blog-post.js)ですが

export default BlogPostTemplate の直前に配置してあった・・・。

うちは export default BlogPostTemplate 直後、GraphQL前に置いたり、ページ末に置いたり、ページによってまちまちと雑なことしてた。（あとで揃えよう💧）

</section>

<section style="margin-bottom: 6em;">

## 固定ページとテンプレート <a name="page-template"></a>

もともとtwitter:cardやら、SEO方面は何もしてないので、Seoコンポーネントの使用はごく典型的な例が多いです。

```js:title=固定ページ：タイトルのみ
export const Head = () => <Seo title="Blog" />
```

という最小例から、Markdown用テンプレートや

```js:title=templates/note-post.js
export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}
```
タグ一覧のテンプレートでは、pageContextで渡されたTagの表示名「Gatsby.js」などをtitleに入れるようにしたり。

```js:title=templates/tag-index.js
export const Head =  ({ pageContext }) => {
	const names = 'Tags:' + pageContext.name;
  return (
    <Seo
      title={names}
    />
  )
}
```

```HTML:title=OUTPUT
<title>Tags:Gatsby.js | SiteTitle</title>
```

</section>

<section style="margin-bottom: 6em;">

## metadataの書き方 <a name="metadata"></a>

```js:title=react-helmet:seo.js
meta={[
        {
          name: `description`,
          content: metaDescription,
        },
...略...
].concat(meta)}
```

React-helmetプラグイン版で、ずらりと配列されていた部分。


HTML ```<head>``` に何を書くか、なので古式ゆかしくmetaタグ書きをしていく中に、適宜変数を与える感じです。

```HTML
<meta name="description" content={metaDescription} />
<meta property="og:title" content={title} />
<meta property="og:description" content={metaDescription} />
<meta property="og:type" content="website" />
```

これも「gatsby-starter-blog」からマルっとコピーしてきて、該当するHelmet側を1つずつ消していき・・・とやってみると、まったく同じ要素数だったので自分で書き足すこともなかったです。

<hr>

この複写時に、自分でHelmetをゴリゴリ書き換えていた人は、その設定を消してしまわないよう気をつければ良いのでしょう。

意外にも
og:typeなど、最初からwebsiteで固定値になってましたが、createPageから、テンプレートを使う際に
website / blog / article を分けて入れるなど、固定値・変数を使い分けて設定可能。

うちの場合は、使っていないのをまとめてザクっと消したくらいで、妙に短くなったかも💧

</section>

<section style="margin-bottom: 6em;">



## Gatsby Head API版の全体像は <a name="seo-js"></a>

タイトルとディスクリプション重視だなぁ・・・<br>

特記事項は、アンインストールしたHelmetをimportから外して4行目の**const Seo =** が変わった点。<br>
23行目からのreturn ()には、
```<Helmet ..... />``` の代わりに


```<> ..... </>```　Reactフラグメントで囲い<br>
最後に変数受け取り用の **{children}** を4行目と合わせて追加。


```js:title=seo.js
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            developer
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
		<title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
		<meta name="description" content={metaDescription} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={metaDescription} />
		<meta property="og:type" content="website" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:creator" content={site.siteMetadata?.social?.twitter || ``} />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}
export default Seo
```

<hr>


meta={[&emsp;配列&emsp;]} だったのが直書きになったので、

```js
const Seo = ({ description = '', lang = 'ja', meta = [], title, image }) =>
```

↑から、↓になりました。

```js
const Seo = ({ description, title, children }) =>
```

😨 これだとBlogPostが渡した「heroImage」の収まり場がない。と今更気づいたけど、その訂正はさておき
<a name="lang"></a>
```JS
lang = 'jp',

<Helmet
      htmlAttributes={{
        lang,
      }}
```
の行き場。


```HTML
<html lang="ja">
```
	
HTML ```<head>``` 要素ではないlang属性は、サイトのルートに[gatsby-ssr.js](https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/gatsby-ssr.js)ファイルを作成して、

```jsx:title=gatsby-ssr.js
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `ja` })
}

```
と設定することで加筆できます。[Gatsby Server Rendering APIs | Gatsby](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) を見てね！　と書いてあるので素直に開いて日本語表示をGoogleさんにお願いして、
「gatsby-starter-blog」から模倣した振る舞いの理屈を復習します。

<hr>

いつもながら、Gatsbyのドキュメンテーションを見ると（なんでこんなに親切なの？！）と感心・・・をちょっと通り過ぎる、上回るものがあるんですが。

今日わかった、今気づいた。

この網羅感は [MDN Web Docs](https://developer.mozilla.org/ja/) 
を彷彿とする。

そしてグレートなGatsbyはどちらの意味の命名なんだろう。<br>
文学界では、ディケンズ「二都物語」と並んで思い出すような「献身」男の代名詞・・・。<br>
<br>

ともかくも、そこへ行けばどうにかなる！ 絶対感が、（あぁMDNに似てたかぁ）とやっと自分の中で腑に落ちたところで。<br>
この人は、おもむろにiTune Storeを開き、松任谷由実「DESTINY」を購入しましたよね（笑

ー「怖可愛いサンダルがどうとかいう曲」を歌ってくれヒロセちゃん！とカラオケボックスで宣っていた30代もわずかに成長はしている。たぶんおそらく。

閑話休題ー<br>

</section>

<section style="margin-bottom: 6em;">

Gatsby公式サイトの献身性については機会があったら書くとして、最後にいちばんユニークな部分。<br>
サイトルート、トップページ、について書いて終わります。


# index.js <a name="index-js"></a>

まずすごく単純なところを見落として、最後に手間取った**index.js** 処理。<br>

保存版にしているbranchで古いファイルを見ても、特にSeoコンポーネントを呼び出しもせず、<br>
でもgatsby-config.jsの module.exports = {
  siteMetadata: {　の記載内容はしっかり反映されていました。

そもそもReact Helmetプラグインをほぼ無意識に使っていただけなので、今更にサーバーレンダリングだ、Reactフックだと文字面だけ追って理解もなく。ただ何かうまいことやってくれてたんだろなと想像するのみ。

で、途中一度、暴挙に出て。<br>
ただ単純に直に書くことにした。


```js:title=index.js
export const Head = ({ data }) => {
  return (
    <>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </>
  )
}
```

他のページ群で使いまわしているSeoコンポーネントを通すには、title=を渡さないと<br>
```<title></title>``` タグを書いてもらえない。

空白文字列を渡せばパイプはじまりで書かれる。<br>
素直に title="Home"と渡して ```<title>Home | SiteName</title>``` としたって間違いじゃないけど、懐かしのオーサリングソフトにでも書いてもらったか？！な味わい深い感じになる。

まぁそのように書いているわけですからね、Seoコンポーネントで。<br>
むしろ今になって考えると、ブラウザのデベロッパーツールまで使って、いろいろやってみたこの筆者こそ変。

<hr>

あれこれ書いちゃったあとで「gatsby-starter-blog」の方を再度、確認にいくと title= に"All posts"と渡してましたね・・・きゃー。オーサリングソフトノフカイアジワイとか失敬な！輩でごめんなさい。

```js:title=index.js
export const Head = () => <Seo title="All posts" />
```
ま。スターターは学舎ですからね、卒業するまでは汎用性大事。

「gatsby-starter-blog」の通りでいくと、何をやってもパイプが残り、
直書きすると、Seoコンポーネントに書いた内容がルートページのHEADに載せられない😨本末転倒なことになるため、少し改変しました。



</section>

<section style="margin-bottom: 6em;">

## 三項演算子を見直してなおす <a name="ternary-operator"></a>

```jsx
<title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
```

[条件 (三項) 演算子 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator) を見ながら、
似て非なるものを見比べた。

```jsx
titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
```

<blockquote>
条件に続いて疑問符 (?)、そして条件が真値であった場合に実行する式、コロン (:) が続き、条件が偽値であった場合に実行する式が最後に来ます。
</blockquote>

下の、React-helmet向けだった方は
defaultTitleが真値であるため | パイプを前に置く整形をしてたわけで、
siteMetadata.titleを間違って消したりすれば偽値となって、nullが返る。

上は、defaultTitleが真値なら、{title} と {defaultTitle} の間に | パイプを挿んで整形してね<br>
defaultTitleが偽値なら、titleを返せば良いよ。<br>
これはもぅ、siteMetadata.titleを故意に消さないかぎり | パイプから逃れられない式なので、書き換え。


```jsx
<title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
```
titleが真値なら、title｜defaultTitle　になり<br>
titleが偽値なら、defaultTitle　が返る。

つまりページタイトルを設定する気のないサイトルート、index.js は、defaultTitle=siteMetadata.title が表示される。

あー長かった。

それに合わせて、seo.js の冒頭**title,** を空でもいいよーに変更して終わり。

```jsx:title=components/seo.js
const Seo = ({ description, title = '', children }) => {
```
<hr>
あ。肝心なindex.jsはtitle以外の何かを渡さねばSeoコンポーネントを使えないので、姑息にdescriptionを渡しました。


```jsx:title=components/seo.js
export const Head = ({ data }) => {
  return (
    <Seo
      description={data.site.siteMetadata.description}
    />
  )
}
```



</section>

<section style="margin-bottom: 1em;">


## Gatsby Head API いいですね！⭐️⭐️⭐️⭐️⭐️<a name="nice"></a>

先に書いちゃうと、Lighthouseスコアは、React-helmet も Gatsby Head API も 現状では同じでした。<br>
特にSEO部分は注力してないままの数値、内容は前に同じでトレースしただけなのでこれは当然。

非推奨になったから、やむなく移行、しかも主要プラグインをアンインストールしてからの「大工事」みたいに想定してましたが、まーほんとヘルメット脱いでさっぱりしたわぁ、くらいの軽い作業で
HTML``` <head> ``` に直接アクセスできるようになったというのは、考えたら、たまらん恩賜公園なみの解放感。

同じReactでも、先日まで触ってたWordPressでは「functions.php」しかほぼ窓口がない。<br>
そこしかないから、そこを読めばだいたい載ってる・・・てのも、慣れれば都、かもしれないが、再び棲みたいと思えないのもね、うーん。なんだかとても勿体無い。

「Gutenbergはとても魅力的な女の子。だけどあの娘の親がちょっとアレで、特にグランパのPHPが・・・」的な話は詮無いのでやめよう。（Gutenbergは元男の子だけどさ）
<hr>

React-helmet、素晴らしいネーミングセンスだと思ってましたが、最短でのお別れになりました。

</section>

<!-- EOF -->
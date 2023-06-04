---
title: "BlogにTags機能をつける工程"
date: "2023-06-04 19:00:00"
slug: 'note-03'
description: "続・Gatsby+Contentful Tags｜シラフになって考えたら楽しかった"
---
とりあえず、インターネット検索で見かけたTagsページの作り方を、Codeのコピペでは埒が開かないと気づいたときに、ひとまずシラフになって設計図とはいえないポンチ図を書き出しました。

制作の鍵は**Pen**です。紙とペン。<br>&emsp;<br>

- まずは気ままにPostたちにつけられたTagを、クリックした先に表示する **/tags/$display_tag/** というページ群が、無計画につけられたTagの数だけ必要。<br>動的につくるページだが、外観は「リストである」ため[Bolg](/blog)トップページと同レイアウトで。<br>[💙できたもの：Mac mini というタグ名を押下した例：/tags/macMini/](/tags/macMini/)<br>&emsp;<br>

- リストから開く、各Postページはすでにあるので不要だが、PostページのTag群は、それぞれ該当の **/tags/$display_tag/** へリンクさせる。displayに見せる表示<br>このStarterの場合は、Tags表示はされていたのを**Contentful Tags**に差し替えてリンクもつけるという工程。<br>[💙できたもの：4つのタグがPostの末尾に表示されている例：/blog/gatsby-cloud/](/blog/gatsby-cloud/)<br>&emsp;<br>

- タグ一覧表。WordPressウィジェットで「タグ・クラウド」と呼ばれているもの。<br>（うちのBlogに要るかぁ？）とあまり必要を感じなかったが「一望できる・網羅された」はユーザー体験としては大切と考えるタチなので、 **/tags/$display_tag/** 各ページのフッター近くに**TAG Cloud**として載せた。<br>TAG Cloudを書くために作業用でつくった1枚もの[⭐️ALL TAGS](/tags/)もTAG Cloudの右隅にひっそり鎮座。<br>大量に多方面記事を載せるBlogなら重宝するもの。<br>&emsp;<br>

___

# createPage
```graphql:title=gatsby-node.js
tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.contentful_id}/`,
      component: tagIndex,
      context: {
        slug: tag.contentful_id,
        name: tag.name,
      },
    })
  })
```
すでにあるBlog Post用の **createPage** と同じ要領でサクッと書ける。<br>
Postの場合は、**if (posts.length > 0) {&emsp;}** &emsp; （0でなければ）条件下にあるが、IFは書かなかった乱暴者。<br>
この粗暴さが後でちょっとした仇になる。<br>
&emsp;

forEachで置き換え元となる **tags.** は result.のContentful Tag（33行目）


```graphql:title=gatsby-node.js
const { createPage } = actions

const blogPost = path.resolve('./src/templates/blog-post.js')
const tagIndex = path.resolve('./src/templates/tags-index.js')

const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
            metadata {
              tags {
                contentful_id
                name
              }
            }
          }
        }
        allContentfulTag {
          nodes {
            contentful_id
            name
          }
        }
      }
    `
  )
// ...略...
// ▼ ▼ ▼ resultで得られた　allContentfulTag.nodes　を代入

const tags = result.data.allContentfulTag.nodes
```

**component: tagIndex,** はテンプレートファイルを指すパスを直接書くケースを多く見たが、このStarterの場合は、3行目のように先に代入しておく手法だったのでTgasも4行目
**path.resolve()**
で同様にテンプレートを渡している。
___

## 余談：ケバブケースじゃなくていい

Gatsbyのタグ、ContentfulTaulのTags、といったキーワードから来た人なら、ニッチでないメジャーなMarkdownの**frontmatter**での手法はとっくに目にしていると思う。

例でいうと製品名：Mac mini をタグ付けしたとき<br>
Display表示はスペースありでも、slugとしてはよろしくないためハイフンを挟んだ **kebab-case** に置き換える手法。
frontmatterのTagsは、Tags[0],Tags[1],Tags[2],・・・と一次元配列なので、取り出し方は単純だが、実態とslugを置き換える必要が生じる場合あり。

漢字が入ると急にむずかしく感じるが、要は「空白スペース」を見つけたら「ハイフン」に置き換えてslugとする。<br>
他方、Contentful Tags は最初から名前とIDを持ってつくられているため<br>
&emsp;<br>
実態：自分がつけたタグそのもので、Displayに表示する名　=　tag.name　と<br>
slug：にすべきID　=　tag.contentful_id　をそのまま使い分けられる。

createPage の **context:** として渡しているのはCodeに載せたとおり。

**context:** として渡されるんだから、Postページでの扱いはお茶の子さいさいだろう！と思いきや、これがなかなか慣れない初心者には難関になった。
___

# context:の受け渡し

書籍もチェートリアルも読まずに他人のソースだけ見て、どうにかしようという魂胆がまず遠回りの要因なんすが！<br>
パターンとして多かったのが、こういうdataをマルッと渡すもの

```js
const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
```
渡す側は

```graphql:title=gatsby-node.js
context: {
	slug: post.slug,
	previousPostSlug,
	nextPostSlug,
	article: post,
}
```
slugと
**article: post** （マルッとdata）
と next / previous など前後ページの繋がりをつくったものを渡すケースが当然ながら情報として多く

contextで渡されたものは **$context_name** : **$slug** などで
Queryのフィルターに使える。という理解までは
localhost:8000/___graphql でじっくりGraphQLを見ると気づくのだが

```js
const tagname = get(this, 'props.pageContext')
```
ズバリのたったこれだけが、導き出されるまでに時間を喰った。<br>&emsp;<br>

**結局・・・本家がわかりやすかった。**<br>
https://www.gatsbyjs.com/docs/creating-and-modifying-pages/<br>&emsp;<br>

ドキュメントを翻訳も交えて真剣に眺めた結果、直接的なコピペネタはなくても、**props** なんだよな、
**pageContext** はいつもキャメルケースだな、とか「目に伝えてくる」<br>
今読み返すと下から2番目のcodeSnippetで

<p class="crimson-col bold">On your pages and templates, you can access your context via the prop pageContext like this:<br>「ページとテンプレートでは、次のように prop pageContext を介してコンテキストにアクセスできます。」</p>

```js
import React from "react"

const Page = ({ pageContext }) => {
  return <div>{pageContext.house}</div>
}

export default Page
```
と、手法が少し違うだけな代入ケースが見えたら自分のStarterに合わせた
```js
const tagname = get(this, 'props.pageContext')
```









pageContext




*************

props

小道具

gatsby-node.js

すぐできたが


http://







:title=gatsby-node.js

<br><br><br><br><br>

slug: tag.contentful_id,
        name: tag.name,
IDは「名前」をキャメルケースにして付ける模様。

Mac miniは「macMini」・FIFA-WCは「fifaWc」




macMini

 FIFA-WC

キャメルケース
fifaWc

自
Postページ
<b>tags.</b>


❤️


<br><br><br><br><br><br><br>



```js
path: `/tags/${tag.contentful_id}/`,
```






### Marakdown3333はじめての記事

コードスニペット使えると良いね。



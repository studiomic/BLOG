---
title: "BlogにTags機能をつける工程"
date: "2023-06-04 19:00:00"
slug: 'note-03-ContentfulTags2'
description: "続・Gatsby+Contentful Tags｜シラフになって考えたら楽しかった"
---
[BlogにContentfulのTags機能を追加した](/notes/note-02/)
(2023/06/04 : Gatsby+Contentful Tags)の続きです。

<details open>
  <summary>もくじ</summary>

- [createPage](#createPage)
- [余談：ケバブケースじゃなくていい](#kebabCase)
- [context:の受け渡し](#context)
- [TagIndexQueryのソース](#TagIndexQuery)
- [PostページにTags <Link to={ $slug }>をリンクを表示する](#Tagslink)
- [?.オプショナルチェイング演算子をつけずにBuild Error](#BuildError)

</details>



<hr>


とりあえず、インターネット検索で見かけたTagsページの作り方を、Codeのコピペでは埒が開かないと気づいたときに、ひとまずシラフになって設計図とはいえないポンチ図を書き出しました。

制作の鍵は**Pen**です。紙とペン。

&emsp;

- まずは気ままにPostたちにつけられたTagを、クリックした先に表示する **/tags/$display_tag/** というページ群が、Tagの数だけ必要。<br>定数のない動的につくるページだが、外観は「リストである」ため[Bolgトップ](/blog)と同レイアウトで。<br>

🩷[成果物：Mac mini というタグ名を押下した例：/tags/macMini/](/tags/macMini/)<br>&emsp;<br>

- リストから開く、各Postページはすでにあるので不要だが、PostページのTag群は、それぞれ該当の **/tags/$display_tag/** へリンクさせる。displayに見せる表示<br>このStarterの場合は、Tags表示はされていたのを**Contentful Tags**に差し替えてリンクもつけるという工程。<br>
🩷[成果物：4つのタグがPostの末尾に表示されている例：/blog/gatsby-cloud/](/blog/gatsby-cloud/)<br>&emsp;<br>

- タグ一覧表。WordPressウィジェットで「タグ・クラウド」と呼ばれているもの。<br>（うちのBlogに要るかぁ？）とあまり必要を感じなかったが「一望できる・網羅された」はユーザー体験としては大切と考えるタチなので、 **/tags/$display_tag/** 各ページのフッター近くに**TAG Cloud**として載せた。<br>TAG Cloudを書くために作業用でつくった1枚もの[⭐️ALL TAGS](/tags/)もTAG Cloudの右隅にひっそり鎮座。<br>大量に多方面記事を載せるBlogなら重宝するもの。

- 因みに[Blogトップ](/blog/)では以前と同じくTagを表示するのみでLinkをしないため、Linkのあるなしでブロックの高さに変化をつけている。


___

# createPage<a name="createPage"></a>

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
Tagページの動的な生成は、すでにあるBlogPost用の**createPage**と同じ要領でサクッと書ける。<br>
Postの場合は、**if (posts.length > 0) {&emsp;}** &emsp; （0でなければ）条件下にあるが、IFは書かなかった乱暴者。<br>

forEachで置き換え元となる**tags.** は result.のContentful Tag（33行目）

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

## 余談：ケバブケースじゃなくていい<a name="kebabCase"></a>

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


# context:の受け渡し<a name="context"></a>

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
**pageContext** はキャメルケースだな、とか「目に伝えてくる」<br>
今読み返すと下から2番目のcodeSnippetで気づいたのか。<br>&emsp;<br>

<p class="crimson-col bold">On your pages and templates, you can access your context via the prop pageContext like this:<br>（ページとテンプレートでは、次のように prop pageContext を介してコンテキストにアクセスできます）</p>

```js
import React from "react"

const Page = ({ pageContext }) => {
  return <div>{pageContext.house}</div>
}

export default Page
```
手法が少し違うだけな代入ケースが見えたら自分のStarterに合わせた3行目を加筆し

```js
const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
const tags = get(this, 'props.data.allContentfulTag.nodes')
const tagname = get(this, 'props.pageContext')
	return (
		........
	)	
```
createPageでつくられる **/tags/$display_tag/** のテンプレートで

```js:title=/src/templates/tags-index.js
<h1 className={styles.title}>TAGS : {tagname.name}</h1>
```
ようやく対象のTag名をページのタイトルとして埋められました。

たったこれだけだが、Tagリンクを表示するよりずっと難関だった件。<br>&emsp;<br>
___

# TagIndexQueryのソース<a name="TagIndexQuery"></a>
```graphql:title=/src/templates/tags-index.js
export const pageQuery = graphql`
query TagIndexQuery ($slug: String!){
	allContentfulTag {
		nodes {
			contentful_id
			name
		}
	}
	allContentfulBlogPost(
		sort: { publishDate: DESC }
		filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: $slug }}}}}
	){
		nodes {
			title
			slug
			publishDate(formatString: "YYYY/MM/DD")
			metadata {
				tags {
					contentful_id
					name
				}
			}
			heroImage {
				gatsbyImage(
					layout: FULL_WIDTH
					placeholder: BLURRED
					width: 424
					height: 212
				)
			}
			description {
			raw
			}
		}
	}
}
`
```

まずTagsリンクから対象となるPostを絞り込むフィルターに、gatsby-node.jsのcreatePageから
**context:**
として渡された **slug: tag.contentful_id,**
を11行目で使っています。{eq: $slug }

```JS
filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: $slug }}}}}
```
そのPostが持つTagsの中に **$slug** と同じ文字列の **contentful_id** があるかどうか。
**elemMatch:** で確認。

事前に $slug を文字列化する処理が2行目 **($slug: String!)**<br>
allContentfulTag {&emsp;}<br>
allContentfulBlogPost(&nbsp;) {&emsp;}<br>

TagとPost 両方のdataを
GraphQLに要求するpageQuery<br>&emsp;<br>
___

# PostページにTags <Link to={ $slug }>をリンクを表示する<a name="Tagslink"></a>

```html:title=/src/templates/blog-post.js
<small className={tagstyles.tags}>
{post.metadata.tags.map(tag => (
	<div key={tag} className={tagstyles.tag}>
		<Link to={`/tags/${tag.contentful_id}`}>{tag.name}</Link>
	</div>
	))}
</small>
```
styleやHTMLタグもそのまま転記してますが、2行目から6行目のマッピングで置き換え。<br>

日本語で（写像とは）とググると、めちゃくちゃ的確な説明が出てきました。

<blockquote>
集合の各元(げん)を他の集合（または同じ集合）の元にそれぞれ対応させること。<br>
「実数の対から虚数への―」<br>
map(ping) の訳。同一集合内で行うのは特に「変換」と言う。
</blockquote>

上のソースは、Postページや **/tags/${tag.contentful_id}** 自身にも「TAG Cloud」として載せています。<br>
[Bolgトップ](/blog)だけは、Tag表示のみリンクなしの使い方をしていますが、Gatsby developの開発環境では問題なかったものが、Buildエラーになりました。
&emsp;<br><a name="BuildError"></a>

path/ に問題がある<br>
post.metadata.tags. は未定義だ<br>

といったエラー内容で思い当たることが一つ。<br>
Contentful製のこのStarterは、Webで見る見本ソースより小洒落ているというか、スマートというか・・・だらだらと1ページに書かずに適度にcomponents化してあるのも、お手本になるなぁと気に入っていますが、components化すると階層は深くなるんですね。

その一例が問題になった[Bolgトップ](/blog)で<br>
src/pages/blog.js 本体にはごく短くHero-Imageと「BLOG」というページタイトルまで。<br>
Postを並べているGridは

```html:title=/src/pages/blog.js
<ArticlePreview posts={posts} />
```
とcomponentsに渡して任せている。<br>
見当はつくが対処法はまったく思いつかん。というときに救いの記事💜



⭐️ [gatsby build 時の「WebpackError: TypeError: Cannot read property 'hoge' of undefined」対処法](https://qiita.com/yosh1ba/items/6c2299813dcc76d910d7)

> 対処法：エラーとなっているプロパティ（この場合はhoge）の前に?.を付け、?.hogeとすることで解消

```html:title=/src/components/ArticlePreview.js
<ArticlePreview posts={posts} />
// で{posts}を渡された先のcomponentsで、metadata?. とオプショナルチェイング演算子を挿入

<small className={tagstyles.tags}>
	{post.metadata?.tags.map(tag => {
	return (
		<div key={tag.contentful_id} className={tagstyles.tag}>
		{tag.name}
		</div>
	)
	})}
</small>
```
説明が的確だったのでそのまま引用します。

<blockquote>
<h3>?.とは何なのか</h3>
調べてみると、オプショナルチェイング演算子と呼ばれるものみたいです。

[MDNによると](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)、深い入れ子構造になったサブプロパティにアクセスする際は、各プロパティ間の参照を確認する必要があるとのこと。今回のコードで言うと、data.allFile.nodes内にfindでヒットした要素が存在することを確認した上で、publicURLを取得する必要があるようです。

これを暗黙的にやってくれるのが、オプショナルチェイング演算子です。
</blockquote>

<!-- EOF -->
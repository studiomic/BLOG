---
title: "Gatsby Code SyntaxHighlighter"
date: "2023-05-20 10:00:00"
slug: 'code-syntaxHighlighter'
description: "contentful リッチテキストで codeシンタックスハイライトを使う"
featuredImage: "asset/Caelus.png"
tag: 'Contentful,Gatsby.js,Rich-Text'
---
このブログポストは今日現在、Gatsby＋Contentful＋netlifyで公開している。 プロジェクトスターターにContentful社のstarter-gatsby-blogを使ったので、ContentfulにあるBlog Postとの連携まではやたらスムーズだった。

これは他のThema、スターターを利用した場合と比較にならないくらい。 理由は、Contentful側でスターター用のContent modelとサンプルPostが用意されているのでローカルdevelopの初っ端からページ間の移動などわかりやすく構成されているためである。

ただしPostの中にあるコードにシンタックスハイライトをつけるのは、少々手間取った。 MarkdownのPostにprismjsでシンタックスハイライトをつける方法はググるとすぐ出てくるのだが、「Contentful＋RichText」だと情報量がグッと減ってしまう。

途中少し諦めモードに入りそうだったが、Reactで考えると、ありそうなんだよなーと探し続け、ドンピシャの記事

Gatsby（GatsbyJS）× Contentful RichText Markdownそれぞれのcodeシンタックスハイライトの適用方法

ー　GatsbyのMarkdownと、RichText、両ケースでの方法を併記してある　のおかげで即解決しました。感謝！

かいつまんで違いを説明すると、Markdownの方は「gatsby-remark-prismjs」をプラグインとして適用するためConfig（gatsby-config.js）の加筆から入るが、RichTextの方は、Reactのフックと呼んでいいのか、Blog Postの[BLOCKS.PARAGRAPH] 部分で「code」を見つけたら抽出・置き換えという方法。

まずは開発環境に react-syntax-highlighter をインストール

```bash
yarn add react-syntax-highlighter
```

Blog Postを表示するテンプレートファイルのimportを書き換える。


```js
// import { BLOCKS } from '@contentful/rich-text-types'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
```

render() {・・・} の中で、const options = {　} の適切な位置 renderNode: {・・・} に [BLOCKS.PARAGRAPH]と renderMark: {・・・} の [MARKS.CODE]を加筆。


```js
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
    const { gatsbyImage, description } = node.data.target
    return (
      <GatsbyImage
          image={getImage(gatsbyImage)}
          alt={description}
        />
      )
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        node.content[0].marks.find((x) => x.type === "code")
      ) {
        return <div>{children}</div>;
      }
      return <p>{children}</p>;
    },
  },
  renderMark: {
    [MARKS.CODE]: text => (
      <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers>
        {text}
      </SyntaxHighlighter>
    ),
  },
};
```

[BLOCKS.PARAGRAPH]のIFの戻り値を、最初は

```js
return <div><pre>{children}</pre></div>;
```

とPreタグを入れていたのですが・・・

<a href="https://mykii.blog/nextjs-react-syntax-highlighter/" target="_blank" rel="noopener noreferrer">Next.jsにreact-syntax-highlighterを導入する</a>
という記事を最後まで読むと、SyntaxHighlighterにはPreタグも含まれると書いてあったので、この長い記事を書いたあとローカル検証してPreは消しました。

Markdownの「gatsby-remark-prismjs」は prismjs 「react-syntax-highlighter」はおそらく highlightjs をベースにしてるんだろうなーと思った時に、highlightjs ならPreタグさえ入れときゃどうにかしてくれる！ 感があって（←思い込み）

当初はPreだけで囲い、次にDiv＋Preで囲い、結局Divだけに戻したという迷走w コードの色をつけるCSSは、ファイル冒頭のimportで

```js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
```

と元記事に倣ってそのままにしてますが、Next.jsの記事で紹介されていた
<a href="https://k8shiro.github.io/ReactCompareCodeHighlighter/" target="_blank" rel="noopener noreferrer">React Syntax Highlight Sample Page</a>
 のスタイルも適用できるはず。

<hr>

後日早々に { dracula } テーマへ変えたときに、本家のDemoを見つけました。

<a href="https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/" target="_blank" rel="noopener noreferrer">React Syntax Highlighter Demo</a>



Highlight.js (default)がベースで、Prism.jsも使えてと、すごい汎用度。






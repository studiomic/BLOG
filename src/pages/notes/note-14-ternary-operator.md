---
title: "Gatsbyページネーションと三項演算子の話"
date: "2025-06-06 22:00:00"
slug: 'ternary-operator-14'
description: "わかってみるとスマートだったかもという理解"
book:
music:
# featuredImage: "asset/Dependabot.avif"
featuredImage: "asset/ternary-operator-14.png"
---

サイトのデザインを一新した際に、当初はBlogとNotesと2つメニューに分けていた記事群を、一つにまとめた。<br>
内訳はBlog（Contentful）とNotes（Markdown）の棲み分けだったに過ぎず、コンテンツとしてはまったく同種、他人様から見たら、なぜ分けているのか意味不明・・・どっちもBlogじゃん。を、Markdownへ合算したため、急に一覧表示対象の記事数が増えた。

個人的には、アイキャッチ画像などない全記事一覧を一望ってのもわりと好きなんだけども。<br>
どこまでもスクロール長が伸びていくのもな、という心境から、ページネーション（ページャー）を実装した。

<img src="asset/ternary-operator-14.png" loading="lazy" width="100%" alt="">

見た目がこんなやつ。

<hr>

各ページへの（丸数字）を載せるまでは、サンプルコードを載せている方もおり、比較的簡単なのと、この記事の「三項演算子」本題ではないので割愛。

（丸数字）の左右にある、PREV ・ NEXT リンクを書くのに、以前の記事の
**まさに「例題」**
だったので振り返ってみた。

<hr>

```JS
String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";
```

条件式が2つある連鎖した三項演算子。

<span style="display: block;margin-bottom: 3em;"></span>


[**条件式が複数ある三項演算子に混乱した話** - Qiita](https://qiita.com/riekure/items/e510dba2e507403d990a?utm_source=pocket_saves)　を読んだときに書いた

[部屋とTシャツとダークモードと三項演算子](/notes/note-07-darkMode-ternaryOperator/)では、私はまだ「三項演算子」の呼び名も知らず、（IF文だと思っていた）と正直に書いており、
ただ読んで（おもしろっ）と反応していた。

<span style="display: block;margin-bottom: 3em;"></span>


元記事では「混乱」しないように可読性の低さを、括弧をつけて解消できるか、改行を挿めば読みやすくなるか、等々の試みをしていて、それがおもしろかったのだが。

いざ自分が必要になって使う段になってみると、もしかしてコレ、めちゃくちゃスマートなんじゃね？　と感心して見直してしまった話。

<hr>

簡単に説明すると、よく見る条件式が1つの三項演算子がIF文の代替なら、条件式が2つあるコレは、「IF文のネスト」代替だ。

と文脈ありで考えたとき、条件式が最初に2つ並んでいるのは、まず「ネストしとります、入れ子は1つ、結果は3通り」とサラリと書かれているようで、あれ？親切か。むしろ解りやすく直感的なのでは？　と一旦、目を見張った。

混乱するコードとされつつ、書いた人むちゃくちゃ賢いんじゃ。という見直し。

<span style="display: block;margin-bottom: 3em;"></span>

```JS
String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";
```

あらためて説明すると、条件式1にも条件式2にも合致すれば"A"<br>
条件式1は真だが条件式2が偽なら弾かれて"B"<br>
それ以外は"C"

まぁ流れるような「狭き門」順

"C" はelse中のelseなのね、おぉ。となった。（男の中の男、みたいに言うんじゃないw）

しつこく書くと

```JS
String str = "";
if (条件式1) {
    if (条件式2) {
        str = "A";
    } else {
        str = "B";
    }
} else {
    str = "C";
}
```
の代替であるのが、並び順が同じなために、書いた人には↑↓が双子に見えている、あるいは鏡映しなわけだ。

```JS
String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";
```

美しいというか、IF文のネストを三項演算子に速記できる人、だよね。少なくとも。

<span style="display: block;margin-bottom: 3em;"></span>

というようなことを（あれ？）となったときに感じたわけで、（文章にしなきゃ感じるのは一瞬）ぜひにも

こう書いてみたかったんですけども！

結論として

```JS
String str = !条件式1 ? "C" : 条件式2 ? "A" : "B";
```
こうなりました。

<span style="display: block;margin-bottom: 5em;"></span>


## previousリンクの特異性

というか、Webページのパスの特性ですよね。

<img src="asset/ternary-operator-14.png" loading="lazy" width="100%" alt="">

（丸数字）はカレントページ現在地なので、生成されたページ数だけある。<br>
NEXTページは、**currentPage + 1**
で加算していくだけ。

表示されないのは、1ページに表示するパラメータが10件なのにPOSTがまだ10件未満のうちと、ラストページだけ。<br>
previousを略したPREVページは、**currentPage - 1**の場合が圧倒多数だが、1ページ目には不要であり、2ページ目には数値でなく「/」ルートを渡すべき、という制約2件。

<hr>

ちなみに簡単だといった（丸数字）の方も（1）の戻り先は、/blog/やサイトルート/なのを、

```js:title=gatsby-node
createPage({
	path: i === 0 ? `/blog` : `/blog/${i + 1}`,
	// 任意のサブディレクトリ指定↑か、ルート↓指定
	path: i === 0 ? `/` : `/${i + 1}`,
```

Gatsbyの場合、ページを生成するgatsby-node.jsの中で、createPageメソッドに書いている。

<span style="display: block;margin-bottom: 3em;"></span>

さて。<br>
1ページでもなけりゃ、2ページでもない、3ページ目以降なら**currentPage - 1**<br>
1ページでは表示しないのでnullを返す。<br>
2ページでは数値ではなく「/」を渡したい。

これを例題に落とし込みたかったんだけど

```JS
String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";
```

結果

```JS
const previousPage = currentPage !== 1 ? currentPage !== 2 ? `/${currentPage -1}`: `/` : null
```

・・・嘘書いた。
<span style="display: block;margin-bottom: 3em;"></span>
あー前述の

結論として

```JS
String str = !条件式1 ? "C" : 条件式2 ? "A" : "B";
```
こうなりました。　←ここ、嘘でしたね。<br>
条件式にnotイコール
**!==**
を使ってるだけで "A" : "B" : "C" と並べてました。


<span style="display: block;margin-bottom: 3em;"></span>

そう、途中ちょっと反発を感じてたんですよね。

〔壱であるならば〕も、〔壱でないならば〕も、どっちも等しく「条件式」ですけど？ と。<br>
重箱の隅ですが「!条件式1」てなんね？

<span style="display: block;margin-bottom: 2em;"></span>


もちろん元記事を書いた人の混乱したコードが何を条件にしていたか、どんな3種の結果を導くためのコードか不明なので、例題だけをみた評価なんですけど

<hr>

私が人間言葉で考えた<br>
1ページでもなけりゃ、2ページでもない、3ページ目以降なら**currentPage - 1**<br>

```JS
String str = 条件式1 ? 条件式2 ? "A"
```

まさにドンピシャではまりました。

```JS
currentPage !== 1 ? currentPage !== 2 ? `/${currentPage -1}`
```
あとは1ページの場合と、2ページの場合を: "B" : "C"へ振り分けて書けば良さげですが。

# ふ。

スマートに書いてみたくてはじめた試みがまったく賢くない事に気づきます。

ここでしたいことは、三項演算子を使った代入なので、


1ページでは表示しないのでnullを返す。




<span style="display: block;margin-bottom: 13em;"></span>


nullかundefined


<span style="display: block;margin-bottom: 3em;"></span>








画像では、**PREV ・ NEXT**
が両方表示される真ん中の「2ページ目」を撮っているが、最初と最後で、**PREV**
と
**NEXT**
は、ぞれぞれ消える。<br>


平たく1ページ目に**PREV**は不要。<br>
この場合の最終3ページでは**NEXT**が不要となる。

<span style="display: block;margin-bottom: 3em;"></span>

**NEXT**
は単純で、最後のページでは消えて欲しいので、**null**を返す。<br>
それ以外は、ずっと
**currentPage + 1**
で加算していくだけ。

```js
const nextPage = currentPage < numPages ? `/${currentPage + 1}` : null
```
全ページ数numPagesより現在ページが小さければ、nextPageは、現在ページ + 1<br>

<hr>


が、**PREV**は逆に
**currentPage - 1**
と減算していくだけでは、2ページ目の前ページは
**/1/**　や　**/blog/1/**　といったURIパスとしておかしなことになる。

一般に生成されるページ、Webページのパスは

/<br>
/2/<br>
/3/<br>

あるいは、/blog/ディレクトリ下の例で

/blog/<br>
/blog/2/<br>
/blog/3/<br>

 故に、（説明が恐ろしく長くなったが！）
 やりたいことは、
 
 1ページ目ではnull<br>
 2ページ目では "/"<br>
それ以外はすべて
**currentPage - 1** で前のページ値を渡したい。

よって、前に見覚えのあった


の出番である。

<hr>

# 振り返り


<span style="display: block;margin-bottom: 2em;"></span>

「問題となったコード」とされている
```JS
String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";
```

条件式が1つの「三項演算子」がIF文の代替なら、条件式が2つあるコレは、「IF文のネスト」代替だ。

と文章で考えたとき、条件式がいきなり2つ並んでいるのは、逆に「ネストしとります、入れ子は1つ、結果は3通り」とサラリと書かれているようで、あれ？むしろ解りやすく直感的なスマートさを感じた。

<span style="display: block;margin-bottom: 3em;"></span>

結果：ABCを真偽に置き換えると

```JS
String str = 条件式1 ? 条件式2 ? "真1/真2" : "真1/偽2" : "偽1/偽2||偽1/真2";
```
なんてことはメモらないで

```JS
String str = 条件式1 ? 条件式2 ? "正・正" : "正・誤" : "正・誤・誤";
```
のようなテキトーを頭に描いて、うん、たぶんスマート！きっとスマート！と（ジョジョ台詞っぽく）今更になって感心した。






わかりやすいでん








2ページ目から currentPage - 1　を計算して
**/1/**
や
**/blog/1/**



<span style="display: block;margin-bottom: 2em;"></span>

生成されるページのPathは、ルートや

```
/
/2/
/3/
```

Gatsbyの場合、ページを生成する方法は、gatsby-node.jsの中で、createPageメソッドを使い、

/
/2/
/3/

```

```


<span style="display: block;margin-bottom: 13em;"></span>


Gatsbyの場合、ページを生成する方法は、gatsby-node.jsの中で、createPageメソッドを使い、その際「pageContext」でテンプレートに必要な値も渡せる。<br>
たとえば現在地であるカレントページなど。

```js
currentPage: i + 1,
```






<hr>






問題となったコード

```JS
String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";
```

---
title: "Gatsbyページネーションと三項演算子の話"
date: "2025-06-06 22:00:00"
slug: 'ternary-operator-14'
description: "わかってみるとスマートだったという理解"
book:
music:
# featuredImage: "asset/Dependabot.avif"
featuredImage: "asset/ternary-operator-14.png"
---

サイトのデザインを一新した際に、当初はBlogとNotesと2つメニューに分けていた記事群を、一つにまとめた。<br>
内訳はBlog（Contentful）とNotes（Markdown）の棲み分けだったに過ぎず、コンテンツとしてはまったく同種、他人様から見たら、なぜ分けているのか意味不明・・・どっちもBlogじゃん。を、Markdownへ合算したため、急に一覧表示対象の記事数が増えた。

個人的には、アイキャッチ画像などない全記事タイトル一覧を一望ってのもわりと好きなんだけども。<br>
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

と、文脈ありで考えたとき、条件式が最初に2つ並んでいるのは、まず「ネストしとります、入れ子は1つ、結果は3通り」とサラリと書かれているようで、あれ？親切か。むしろ解りやすく直感的なのでは？　と一旦、目を見張った。

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

<hr>

一応、対抗馬として元の記事で「より見やすい」とされた例も掲載しておく。<br>

```JS
String str = !条件式1 ? "C" : 条件式2 ? "A" : "B";
```


<span style="display: block;margin-bottom: 5em;"></span>


## previousリンクの特異性

というか、Webページのパスの特性ですよね。<br>
パスが「増」へ進むのは数の増で済むが、「減」へ進むと、ルートにぶつかる。

<img src="asset/ternary-operator-14.png" loading="lazy" width="100%" alt="">

（丸数字）はカレントページ現在地なので、生成されたページ数だけある。<br>
NEXTページは、**currentPage + 1**
で加算していくだけ。<br>
表示されないのは、1ページに表示するパラメータがn件なのにPOSTがまだn件未満のうちと、ラストページ。

previousを略したPREVページは、**currentPage - 1**の場合が圧倒多数だが、1ページ目には不要であり、2ページ目には数値「1」でなく「/」ルートを渡すべき、という制約2件。

<hr>

ちなみに簡単だといった（丸数字）の方も（1）の戻り先は、/blog/やサイトルート/なのを、

```js:title=gatsby-node
createPage({
	path: i === 0 ? `/blog` : `/blog/${i + 1}`,
	// 任意のサブディレクトリ指定↑か、ルート↓指定
	path: i === 0 ? `/` : `/${i + 1}`,
```

Gatsbyの場合、ページを生成するgatsby-node.jsの中で、createPageメソッドに書いている。

<span style="display: block;margin-bottom: 2em;"></span>

文章がおかしいな。<br>
戻り先としてpath:を充てているわけではなく、そのパス・位置にページをつくらせている。<br>
ために、ページネーションで〔PREV ・ NEXT〕をつけたい時は、そのパスを拾いにいく。当然だが文章はこちらが正しい。（言い方！とツッコみたくなった）

pageContextで何を渡すかは、作り手の作り方、好みで構わないが、あまりに色々と渡そうとすると、開発環境で
**Warn when pageContext is too large**
と注意されたりする。

<hr>



さて。<br>
1ページでもなけりゃ、2ページでもない、3ページ目以降なら**currentPage - 1**<br>
1ページでは表示しないのでnullを返す。<br>
2ページでは数値ではなく「/」を渡したい。

これを例題に落とし込みたかった

```JS
String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";
```

結果

```JS
const previousPage = currentPage !== 1 ? currentPage !== 2 ? `/${currentPage -1}`: `/` : null
```


<span style="display: block;margin-bottom: 3em;"></span>

少しだけ、対抗馬として置いた↓に似てます。（似てねぇけど）


```JS
String str = !条件式1 ? "C" : 条件式2 ? "A" : "B";
```

条件式にnotイコール
**!==**
を使ってるだけで "A" : "B" : "C" と行儀よく並べました。


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

スマートに書いてみたくてはじめた試みが、うん、なかなか泥臭いな、と気づきます。

ここでしたいことは、三項演算子を使った代入なので、

1ページでは表示しないのでnullを返す。という野暮ったさは避けられない。「空白文字」を返す、でも良いのだけど「代入しない」「何もしない」を選択できない。これがIF文との違いだったんですね。

```JS
if (currentPage >= 3) {
    previousPage = `/${currentPage -1}`;
} else {
    if (currentPage == 2) {previousPage = `/`;}
}
```
IF文の場合、そもそもpreviousPageは2ページ目以上にしか登場しないものとして、はなから1ページ目は除外された書き方。


三項演算子に置き換えるに、条件の書き方はいろいろ考えられるけど

```JS
const previousPage = currentPage > 1 ? currentPage === 2 ?  `/` : `/${currentPage -1}` : null
```
先に書いたのと似たり寄ったり。まぁ得たい結果が同じ3パターンなので当然か。と思いつつ、色々書き試ししてみました。<br>
今回は理想の "A" : "B" : "C";　を辿る旅回みたいな位置付けだったので（笑）

<span style="display: block;margin-bottom: 2em;"></span>

で、一目瞭然なのは、何もしなければ勝手に「undefined（未定義）」とされるのを、nullやundefinedを渡すのを「泥臭い」とか野暮を言わなければ！ 代入や二択が一気に一行でできる三項演算子、やはり便利ですね、と。

<hr>

余談ですが、三項演算子、長らく呼び名を知らなかったけれど、もうとっくに長らく「編集」はしてました。<br>
WordPress案件はいつからか何十年も多く受けているため、やたら見かける「ハテナ・コロン」<br>
天然なので、PHP特有のIF文の書き方なんだろーなぁと思っていた。

そういう意味では（可読性わりぃー）を自分こそ散々感じていたわけだが、IF文を挿むには、<code><?php</code>をいちいち切らなきゃいけないとか、別の不便を避けるに、良い方便だなと使い分けていた。<br>

しかし・・・

<span style="display: block;margin-bottom: 4em;"></span>


# おさらい

曖昧に使い分けてきた、あるいはもっと天然にどっちもIF文だと思ってた！ぐらいの輩は、下手な考えを引き延ばすより、辞書を引いた方が早い。

AIは文章力があるので説得力もありました。


IF関数とは、ある条件が「真」の場合と「偽」の場合で、それぞれ異なる結果を返す関数です。

三項演算子（ternary operator）とは、3つの項（被演算子）を用いて一つの結果を求める演算子です。

<hr>

シラフで読むと、ぜんぜん違う。


そうそう、IF文というのは、Aという値を持って処理1へ進む、Bという値を保持して処理1へ進む、それ以外のC群：つまりelse群は処理2へ・・・みたいな分岐がイメージですよね。

に対して、三項演算子は、たしかに真偽を問うて一つの結果を求める。だから代入にも適している。

<span style="display: block;margin-bottom: 2em;"></span>

### 関数（function）と演算子（operator）

あぁ本当にごめんなさい。味噌も糞も一緒にしてた・・・というフレーズしか浮かばなかった。

とどのつまり、可読性が良いか悪いか、悪いと感じるのは個人のレベルだなと薄々気づいてました途中から。<br>
レベルというのが感じが悪ければ「慣れ」<br>
どうやら由来はC言語らしいので、慣れている人には、長けたやり方なんだろうと想像できます。

<span style="display: block;margin-bottom: 3em;"></span>

先に断ると、元記事で「より見やすい」とされた例を挙げたコメント欄にはきちんと、

<blockquote>

三項演算子は可読性が低いと思っている人がたまにいますが、可読性が低いのは三項演算子自体ではなくネストした条件です。
ネストした条件はif文で書いても三項演算子で書いても可読性は低いです。

例に挙げている条件も２つの条件がネストしていますが、工夫すればフラットな条件に書き直すことで見やすくできます。
</blockquote>

と、前置きありで書かれたコード。

<span style="display: block;margin-bottom: 2em;"></span>

途中「!条件式1」てなんね？ と噛みついてますが、本音は、コメントの大事なところを省いて、「より見やすい」は短絡すぎるだろう・・・です。

<span style="display: block;margin-bottom: 3em;"></span>

最後に
[MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
に載っていた連鎖の2例をトレースします。

```js
function example() {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}
```

```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```
条件によるが、少なくとも代入が目的なら、どちらが可読性が高いか、顕著ですよね。

前に書いたpreviousPageへの代入も改行を入れて、このようにも書ける。

```js
const previousPage = 
    currentPage >= 3 ? `/${currentPage -1}`
    : currentPage === 2 ? `/`
    : null
```

でも、最初の「1ページでもなけりゃ、2ページでもない」も捨てがたい。

```JS
const previousPage = 
    currentPage !== 1 ? currentPage !== 2 ? `/${currentPage -1}`
    : `/`
    : null
```
だが改行は断る！　って感じで解りにくくなりましたわ。


<span style="display: block;margin-bottom: 2em;"></span>

# 結論

<blockquote>

三項演算子は可読性が低いと思っている人がたまにいますが、可読性が低いのは三項演算子自体ではなくネストした条件です。

</blockquote>

これが金言だったって、ことと。


```JS
String str = 条件式1 ? 条件式2 ? "A" : "B" : "C";
```
このコードは使い慣れるか、具体例をおけば、とてもスマートだとわかった話でした。

<span style="display: block;margin-bottom: 6em;"></span>


# PREV ・ NEXT実例

長々と代入のネタになっていた
**previousPage**
と
**nextPage**
<br>実際の配置は、以下のように使います。

```JSX:title=components/pagination.js
return (
    <div className={styles.peger}>
    { previousPage ? <Link to={previousPage}>&lsaquo; Prev</Link> : null }
    
    {/*ここに（丸数字）の処理*/} 
    
    { nextPage ? <Link to={nextPage}>Next &rsaquo;</Link> : null }
    </div>
)
```

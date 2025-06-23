---
title: "CODE1"
date: "2025-06-15 19:00:00"
slug: 'cssGrid-4'
type: ""
---
<style>
  article {
    padding-left: calc(var(--size-gutter)*2);
    padding-right: calc(var(--size-gutter)*2);
    line-height: 2.1;
    font-size: var(--text-xl);
  }
  .half {
    width: 50%;
    /* border-top: 4px solid tomato; */
  }
  .samplelayoutGrid-fill {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(6svw, 1fr));
	gap: 1em;
  }
  .samplelayoutGrid-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6svw, 1fr));
    gap: 1em;
  }
</style>
<!-- sample -->
# Auto Track List

# auto-fill

```css
.layoutGrid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(6svw, 1fr));
	gap: 1em;
}
```

# auto-fit

```css
.layoutGrid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(6svw, 1fr));
	gap: 1em;
}
```


<!-- hr -->
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>

## 明示的で中身(item)のないGridコンテナ

<div style="display: grid;grid-template-columns: repeat(16, 1fr);grid-template-rows: repeat(9, 1fr);gap:.5em;background:rgba(137,221,255,0.3)"></div>

## 明示的で中身(item)のないGridコンテナ

KOKO-KARA
<div style="display: grid;grid-template-columns: repeat(16, 1fr);grid-template-rows: repeat(9, 1fr);background:rgba(137,221,255,0.3)"></div>
KOKO-MADE




# CSS Grid Layout - Aspect Ratio 16 : 9

グリッドレイアウトの基本をディスプレイ・サイズに多い16 : 9で考える項。

<span style="font-size:.9em;color:#cc6698;font-style:italic;">Gridは黙してトラックリストを設計する
<a href="#AspectRatio-article">( Jump Scroll )</a></span>

<!-- <div class="grid-container"> -->
<div style="display: grid;grid-template-columns: repeat(16, 1fr);grid-template-rows: repeat(9, 1fr);gap:.5em;margin: 3em auto 1em;width: 92%;background:rgba(137,221,255,0.3)">
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
</div>



<article id="AspectRatio-article" style="padding-top:var(--size-gutter);">

グリッドコンテナのトラックは単調に
<code>　1fr　</code>を16列、9行、repeatと定義した。<br>
トラックリストをわかりやすくするために、gap と背景色をつけている。<br>
中に置いた144個の <strong>item</strong> にも、Grid Cell（セル）サイズを可視化するために枠と背景色、高さを指定した。


```css
.layoutGrid {
  display: grid;
	grid-template-columns: repeat(16, 1fr);
	grid-template-rows: repeat(9, 1fr);
	gap: .5em;
  background:rgba(137,221,255,.3);
}
```
<span style="display: block;margin-bottom: 1em;"></span>
このショートハンドは、
**fr = fraction（分数）**
であることが、いちばんわかりやすい。

<span style="font-size: 1.5em;margin: 0 .8em;">
<math>
  <mfrac>
    <mtext><strong>1</strong></mtext>
    <mtext><strong>9</strong></mtext>
  </mfrac>
</math>
</span>
と
<span style="font-size: 1.5em;margin: 0 .8em;">
<math>
  <mfrac>
    <mtext><strong>1</strong></mtext>
    <mtext><strong>16</strong></mtext>
  </mfrac>
</math>
</span>
を、それぞれ分母の数だけリピート。

<span style="display: block;margin-bottom: 1em;"></span>

声に出して、九分の一や十六分の一と云う順番で書けば済む。<br>
そろばん塾風に「リピートすることのォ、九分の一」<br>
と分数表記にあまり凝るのは辛いので、以下「1/9」「1/16」等々とスラッシュ書きする。

<span style="display:block;margin-bottom:2em;"></span>
簡単な例題で

```css
.container {
  display: grid;
	grid-template-columns: 3fr 3fr 3fr;
	grid-template-rows: 3fr 3fr 3fr;
	width: 300px;
	height: 300px;
}
```
は、

```css
.container {
  display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
  width: 300px;
	height: 300px;
}
```
と書くのと結果は同じ描画になる。


**1fr**
も
**3fr**
も、固定幅の中に3つあるなら、どちらも幅「1/3」だからだ。


## まずここがFlexBoxと決定的に違うところ。


横へ進むトラック（グリッド列）は3つと親（Grid）が定義したら、子であるセルは行儀よく3列目で折り返す。

FlexBoxは一種の配列、充填式の配列なので、基本は横一列に並び、
**flex-wrap**
で「折り返す」と指定した場合も「どこで」と位置は決められず、あくまで表示幅が足りなくなったら（自然な解釈で）折り返す。

ふだん3列目や4列目できれいに揃って折り返す、item サイズを調節した「整形済みFlexBox」ばかり見ていると、このあたりを混同しやすい。GridとFlexBoxのどちらが用途に合っているのだろう？と当初は迷うことが多かった。

Gridは親の指示した位置で折り返す。トラックの数、トラックリスト、Grid Track (グリッドトラック)が肝心なのだ。

<!-- hr -->
<span style="display: block;margin-top:2em;height:2em;border-top: 1px solid var(--border2);"></span>

FlexBoxは配列らしく、普通は書いた順番にAtoZと昇順で並んでいくが、降順Z ... Aとリバース表示は簡単にできる。

が、グリッドコンテナの中に置かれた
**item**
は、僕はセルを2列にまたがって使う！だの、3列2行にわたって僕のエリアだ！のと好きな位置を指定できる。

<span style="display: block;margin-bottom: 1em;"></span>
**item**
同士の領域が重なってもいいし、使われない空のセルがトラックの中に生じてもいい。<br>

トラックリスト上で
**item**
に出来ないことは、テトリスブロックのように
L字
や
T字
ブロックにはなれない。<br>
CSSのblockはあくまで長方形か正方形「四角形」の領域をもつから、グリッドセルも四角の線番で指定する。
<!-- 
```css
grid-column: 1 / -1;
grid-row: 1 / 2;

（または）

grid-area: 1 / 1 / 2 / -1;
```
<span style="display: block;margin-bottom: 2em;"></span> -->
**item**
たちはかならずしも順番を守る必要がないので、A _ B _ C _ V _ D と、
**V**
が思いがけない場所に描画されても良い。

<span style="display: block;margin-bottom: 1em;"></span>
うーん。例えばウルトラワイドモニターで見る来訪者には目立たせておきたい「Vキャッチー」も、狭いスマホ画面では C _ D 間を遮ってまで表示すべきではない、ごく後方Vらしき位置で表示せよ、とかだろうか。

とりあえずすぐ想像できるのは、
<code>　&lt;main&gt;　</code>
<code>　&lt;nav&gt;　</code>
<code>　&lt;aside&gt;　</code>
などを、書いた順番にかかわらず好ましい位置に配置しやすいこと。

FlexBoxが単純な配列なら、Gridは配列にもハッシュにもなれる。

<!-- hr -->
<span style="display: block;margin:1em 0 1em;height: 1em;border-top: 1px solid var(--border2);"></span>
トラックリストは「透明な方眼紙」を準備する罫線テンプレートというイメージだが、ここで、Grid Axis (グリッド軸)
Grid Line (グリッド線)
の違いをしっかり憶えてしまおう。

<div style="display: grid;grid-template:repeat(3, 1fr) / repeat(3, 1fr);gap: .5em;margin: 1em auto;width:150px;height:150px;background:rgba(137,221,255,0.3);">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
</div>

16 : 9 のサンプルが視界から消えたので、3 : 3 ミニチュアで数える。

**Grid Axis (グリッド軸)**
は列トラック数 - 1本<br>
行トラック数 - 1本<br>
上サンプルで gap により青い線に見えているのが「column軸」と「row軸」だ。<br>
えーと。豆腐を切り分けるときに包丁が入る位置が、縦横軸。<br>
「軸」は外側にはないものですもんね。3 : 3 Grid は2本の縦軸・2本の横軸が内側にある。

<span style="display: block;margin-bottom: 1em;"></span>

**Grid Line (グリッド線)**
は列トラック数 + 1本<br>
行トラック数 + 1本<br>
縦、横の罫線は1本目からはじまり、トラックが終わったあとの線で終わる。

<div style="display: grid;grid-template:repeat(3, 1fr) / repeat(3, 1fr);gap:0;margin: 1em auto;width:150px;height:150px;border: 1px solid var(--text-color);">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
</div>

黒線の交差でつくられたマス目ブロックが、Gridの最小単位セル。<br>
「表におけるセルと考え方はほぼ同じ」だが、中身itemが入らなかった空のセルは、0pxかける0pxのサイズまで縮小する。<br>
例えば2行目・2列目つまり中央のセルが空白であってもレイアウトが崩れないのは、見えない軸をトラックリストが先につくってあるから。

<!-- hr -->
<span style="display: block;margin:1em 0 1em;height: 1em;border-top: 1px solid var(--border2);"></span>
実に話がくどいけれど、Gridプロパティのあれこれ書き方いろいろ、よりもトラックリストが描く構造を知った方が、初心者を脱するには近道だと思う。

# Basic 9 Grid

<div style="display: grid;grid-template: repeat(3, 1fr) / repeat(3, 1fr);gap: 1em;margin: 0 auto;width: 300px;height: 300px;">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 1/2;grid-row: 1/2;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 2/3;grid-row: 1/2;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 3/4;grid-row: 1/2;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 1/2;grid-row: 2/3;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 3/4;grid-row: 2/3;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 1/2;grid-row: 3/4;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 3/4;grid-row: 3/4;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 2/3;grid-row: 3/4;"></div>
</div>



<span style="display: block;margin-bottom: 5em;"></span>





<span style="display: block;margin-bottom: 5em;"></span>


</article>



















<span style="display:block;margin-bottom:4em;"></span>

<span style="display:block;margin-bottom:4em;"></span>

<span style="display:block;margin-bottom:20em;"></span>

<span style="display: block;margin-bottom: 2em;"></span>

<span style="display: block;margin-bottom: 2em;"></span>

<span style="display:block;margin-bottom:3em;"></span>






<span style="display: block;margin-bottom: 1em;"></span>



<span style="display: block;margin-bottom: 1em;"></span>
<span style="display: block;margin-bottom: 1em;"></span>
<span style="font-size: 1.5em;margin-left: .8em;"></span>
<span style="display: block;margin-bottom: 1em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display:block;margin-bottom:4em;"></span>



<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>


<span style="display: block;margin-bottom: 1em;"></span>

<span style="display: block;margin-bottom: 1em;"></span>

<span style="display: block;margin-bottom: 1em;"></span>


<span style="display: block;margin-bottom: 1em;"></span>


<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>








<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>

<span style="display: block;margin-bottom: 2em;"></span>



<span style="display: block;margin-bottom: 20em;"></span>






<span style="display: block;margin-bottom: 20em;"></span>




<!-- sample -->


# Auto Track List

# auto-fill

<!-- sample -->
<div class="samplelayoutGrid-fill">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
</div>

# auto-fit

<!-- sample -->
<div class="samplelayoutGrid-fit">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
</div>

# auto-fill : auto-fit &nbsp;  &nbsp; ( cell:15

<!-- sample -->
<div class="samplelayoutGrid-fit">
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
	<div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
	<div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
</div>




<span style="display: block;margin-bottom: 2em;"></span>

# auto-fill

```css
.layoutGrid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(6svw, 1fr));
	gap: 1em;
}
```

# auto-fit

```css
.layoutGrid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(6svw, 1fr));
	gap: 1em;
}
```





# justify-self

<!-- sample -->
<div style="display: grid;grid-template: 6em / repeat(4, 1fr);gap: 1em;outline: 1px solid crimson;align-items: center;"
class="samplelayoutSelf">
  <div class="cell">
		<div class="stretch">stretch</div>
	</div>
  <div class="cell">
		<div class="start">start</div>
	</div>
  <div class="cell">
		<div class="end">end</div>
	</div>
  <div class="cell">
		<div class="justifycenter">center</div>
	</div>
</div>

# align-self


<div class="samplelayoutSelf">
	<div class="cell align-stretch">stretch</div>
  <div class="cell align-start">start</div>
  <div class="cell align-end">end</div>
  <div class="cell align-center">center</div>
</div>















justify-self: start;

justify-self: end;

justify-self: center;

justify-self: stretch;


# align-self


align-self: start;

align-self: end;

align-self: center;

align-self: stretch;

# place-self






<!-- hr -->
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>

## 明示的で中身(item)のないGridコンテナ

<div style="display: grid;grid-template-columns: repeat(16, 1fr);grid-template-rows: repeat(9, 1fr);gap:.5em;background:rgba(137,221,255,0.3)"></div>

## 明示的で中身(item)のないGridコンテナ

KOKO-KARA
<div style="display: grid;grid-template-columns: repeat(16, 1fr);grid-template-rows: repeat(9, 1fr);background:rgba(137,221,255,0.3)"></div>
KOKO-MADE



<span style="display: block;margin-bottom: 1em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>


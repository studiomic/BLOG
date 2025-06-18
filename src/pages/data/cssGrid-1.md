---
title: "CODE1"
date: "2025-06-15 19:00:00"
slug: 'cssGrid'
type: ""
---
<!-- sample -->
<section class="widthFull" id="Basic-9Grid">

# Basic 9 Grid

<div class="samplelayoutGrid">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
</section>


<section><!-- CODE -->

### HTML

```html
<div class="layoutGrid">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
```
</section>


<section><!-- style -->

### Parent : layoutGrid / Grid Items : cell

```css
.layoutGrid {
	display: grid;
	grid-template-columns: 3fr 3fr 3fr;
	grid-template-rows: 3fr 3fr 3fr;
	column-gap: 1em;
	row-gap: 1em;
	margin: 0 auto;
	width: 450px;
	height: 450px;
}

.cell {
	border: 1px solid var(--border);
	background: var(--hslborder);
}
```
</section>

<section class="widthFull">
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>

<article>

# fr 単位が優秀な件

<span style="display: block;margin-bottom: 2em;"></span>
いきなり白々しく
<code>　grid-template-columns: 3fr 3fr 3fr;　</code>
などと書いてますが、

<code>　grid-template-columns: 1fr 1fr 1fr;　</code>と書くのと結果は同じ。<br>
「均等な3つの値」という分数だからだ。

<span style="display: block;margin-bottom: 1em;"></span>


ショートハンドでは
**fr = fraction「分数」**
であることが、よりわかりやすい。

<span style="display: block;margin-bottom: 1em;"></span>

```css
grid-template-columns: repeat(3, 1fr);
```
<span style="display: block;margin-bottom: 1em;"></span>

<span style="font-size: 1.5em;margin-left: .8em;">
<math>
  <mfrac>
    <mtext><strong>１</strong></mtext>
    <mtext><strong>３</strong></mtext>
  </mfrac>
</math>
</span>
を、3回リピート。

声に出して、三分の一と云う順番で書けば済む。
<span style="display: block;margin-bottom: 1em;"></span>

そろばん塾風に「リピートすることの三分の一」

と分数表記にあまり凝るのは辛いので、以下「1/3」とスラッシュ書きする。<br>
分数、割り算、割合、パーセンテージ。全体幅がいくつであれ、100の「1/3」は33.33333...<br>
10割に対する約3割ちょぃ、を電卓を叩かずに計算してくれる、素晴らしさ。

<span style="display: block;margin-bottom: 1em;"></span>

分数は「1/2」も「2/4」も「8/16」も同じ大きさ。<br>
ディスプレイ・アスペクト比に多い
**16:9**
で考えるのに、この一見アバウトで、しかし計算は正確に返してくれる
fr単位は重宝します。

<span style="display: block;margin-bottom: 2em;"></span>

画面サイズを考えながらデザインするとき、頭の中に
<code>　grid-template-columns: repeat(16, 1fr);　</code>
がある。

というより、ラフすぎるポンチ絵を描きながら、横2分割なら
**8fr：8fr**
その半分なら
**4fr**
と記入してしまう癖がついた。
<span style="display: block;margin-bottom: 2em;"></span>

**4:3**
を想定するなら
**12fr**
が公倍数で、ごくシンプルに4分割と3分割を混在させやすい。などなど<br>
便利かつ手堅い手法とアピールしたい意図よりも、まずは（理にかなっているよね）と頷きたい。
<span style="display: block;margin-bottom: 2em;"></span>

次は、グリッドレイアウトには「空」が置けるという話。

</article>
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>
</section>


<!-- sample -->
<section class="widthFull" id="Empty-9Grid">

# Empty 9 Grid

<div class="samplelayoutGrid">
  <div class="cell tr1"></div>
  <div class="cell tr2"></div>
  <div class="cell tr3"></div>
</div>

</section>


<section>

### HTML

```html
<div class="layoutGrid">
  <div class="cell tr1"></div>
  <div class="cell tr2"></div>
  <div class="cell tr3"></div>
</div>
```

### CSS

```css
.layoutGrid {
	display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	gap: 1em;
	margin: 0 auto;
	width: 450px;
	height: 450px;
}
```

</section>


<section>

### grid-column-start/end　grid-row-start/end

```css
.tr1 {
	grid-column: 1/2;
	grid-row: 1/2;
}
.tr2 {
	grid-column: 2/3;
	grid-row: 2/3;
}
.tr3 {
	grid-column: 3/4;
	grid-row: 3/4;
}
```
</section>

<section class="widthFull">
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>

<article>

# 空はある、あるものはある。

<span style="display: block;margin-bottom: 2em;"></span>

上と同じグリッドレイアウトに、色と枠のついた
**div.cell**
を3つ。

プレーンなHTMLなら縦に積まれる、FlexBoxなら初期値で横に並ぶ。<br>
Gridも定義テンプレートのままなら横に3つ並ぶ。
<span style="display: block;margin-bottom: 2em;"></span>

ここで初心に戻りたいのが、グリッドレイアウトはその中に
**item**
を置いていくのだという思い込みを払拭して、グリッドレイアウトは行と列の
**トラック**
を先に定義し、透明な方眼紙が在る上に、置きたい要素
**item**
を配置していく。
<span style="display: block;margin-bottom: 2em;"></span>

配置は子である
**item**
が
**grid-area**
で指定する。

```css
grid-area: 1 / 2 / 1 / 2;
```

<span style="display: block;margin-bottom: 2em;"></span>
順番は緯度経度と同じで縦 / 横　eq　行 / 列、すなわち　row / 列 




<span style="display: block;margin-bottom: 20em;"></span>


### Shorthand : <br>row.start / column.start / row.end / column.end

```css
.tr1 {
	grid-aria: 1 / 1 / 2 / 2;
}
.tr2 {
	grid-aria: 2 / 2 / 3 / 3;
}
.tr3 {
	grid-aria: 3 / 3 / 4 / 4; 
}
```

</article>
</section>

<!-- sample -->
<section class="widthFull">

# Auto Track List

# auto-fill

<!-- sample -->
<div class="samplelayoutGrid-fill">
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
</div>

# auto-fit

<!-- sample -->
<div class="samplelayoutGrid-fit">
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
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

</section>


<section class="widthFull">

# justify-self

<!-- sample -->
<div class="samplelayoutSelf">
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
</section>






<section class="widthFull"></section>





<section class="widthFull">


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




</section>


<section class="widthFull"><span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span></section>









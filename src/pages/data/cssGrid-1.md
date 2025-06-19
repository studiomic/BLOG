---
title: "CODE1"
date: "2025-06-15 19:00:00"
slug: 'cssGrid'
type: ""
---
<!-- sample -->
<section class="widthFull" id="Basic-9Grid">

# Basic 9 Grid

<span style="display:block;margin-bottom:4em;"></span>


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
<span style="display:block;margin-bottom:4em;"></span>
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

ここで初心に戻りたいのが、グリッドレイアウトは親コンテナの中に、単に子である
**item**
を置いていくのだという思い込みを払拭して、グリッドレイアウトは行と列の
**トラック**
を先に定義し、透明な方眼紙が在る上に、置きたい要素
**item**
を配置していくということ。
<span style="display: block;margin-bottom: 2em;"></span>

まるで新説のように当然のありきたりな説明をしているが。私があたってきた日本語チュートリアル、親切なHowToサイト、グリッドレイアウトを理解するにはまず「用語」が大切です、というその何処にも、
**トラック**
の連呼がなかった。
<span style="display: block;margin-bottom: 2em;"></span>

お世話になったHowToページ各位、ほぼすべてに感謝している。苦情を云うものではない。<br>
MDNの原典にあたれば、トラックというフレーズだらけだったし、そこに気づかないヌケサクは手を抜いて理解を深めないまま銭に変えた。<br>
他人の翻訳で解釈なって、銭にもなってローコスト。
<span style="display: block;margin-bottom: 2em;"></span>

いや、まさか手は抜いていないので、頭を使わなかった、他人の知見で済ませた。が正しい。文句を言う筋合いはまったくないが、**トラック**
のありやなしやを理解していないと、FlexBoxとの差異が説明つかんだろ・・・。
<span style="display: block;margin-bottom: 2em;"></span>

その辺が曖昧でも、なんとなく便利に使えてしまう、レスポンシブしやすーい。その魅力で十分かも知れないが、透明な方眼紙すなわち「トラック」がすでに在ることを理解していないと、CSS GRID, イッツ・ア・ミラクル・ワールド！感が薄れる。

<span style="display: block;margin-bottom: 3em;"></span>

カンの良い人は、グリッドレイアウトはまるで表計算のようだ、と確かZenに書いている投稿を見た。<br>
カンの良い人は、今トラックというカタカナから
<code>　&lt;table&gt;　</code>
タグの
<code>　&lt;tr&gt;　</code>
を連想してくれているかも知れない。
<span style="display: block;margin-bottom: 3em;"></span>

非常に似ているが
<code>　&lt;table&gt;　</code>
はいわば現在進行形のマラソンで、テーブル・レコード（TR）という行をつくり、その中に、横方向配置のセルを複数列書き、（TR）を完了し、次行の（TR）を用意して、列（TD）数の計算をミスらず走る、地獄のタイピング・マラソンだった。<br>
ある意味、道なき道を整えながら進む工兵のようでもある。
<span style="display: block;margin-bottom: 2em;"></span>

一方でグリッドレイアウトは行と列をトラックとして、先に用意してしまう。

```css
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(22, 1fr);
```
<span style="display: block;margin-bottom: 2em;"></span>

なかなかWebで使い勝手が悪そうなこの例は、手許のApple - Numbersで新規書類を作成してみた列と行数だ。<br>
帳票を書くには妥当な開始数なのだろうか。A4用紙との相性だろうか。
<span style="display: block;margin-bottom: 2em;"></span>

もちろんグリッドレイアウトの場合、

```css
grid-template-columns: repeat(4, 1fr);
(または)
grid-template-columns: 1fr auto 1fr;
```
と横幅だけ制御して、行は勝手に増やしていくもよし、このグリッドコンテナの後に、

<code>　&lt;H3&gt;　</code>
タイトルを挿入して<code>　grid-template-columns: repeat(3, 1fr);　</code><br>
とまた別のグリッドコンテナを配置してもよし。（・・・そんなことは表計算アプリにもできる・・・）
<span style="display: block;margin-bottom: 5em;"></span>


# 透明な方眼紙

行と列のトラック数が定義されたテンプレートの「どの位置」に配置するかは

子である
**item**
が
**grid-area**
で指定する。


<span style="display: block;margin-bottom: 2em;"></span>


```css
grid-area: 1 / 1 / 2 / 2;
```
<span style="display: block;margin-bottom: 1em;"></span>

上の
**Empty 9 Grid**
サンプル

<span style="display: block;margin-bottom: 1em;"></span>

```css
■　・　・
・　■　・
・　・　■
```
<span style="display: block;margin-bottom: 1em;"></span>

左上端の ■

```css
.tr1 {
	grid-column: 1/2;
	grid-row: 1/2;
}
(またはショートハンドで：row.start / column.start / row.end / column.end)
.tr1 {
	grid-aria: 1 / 1 / 2 / 2;
}
```
<span style="display: block;margin-bottom: 2em;"></span>

親であるグリッドコンテナが定義する場合、子に名前をつける。

<span style="display: block;margin-bottom: 1em;"></span>

```css
.container {
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "sidebar . main main"
    "footer footer footer footer";
}
```
<span style="display: block;margin-bottom: 1em;"></span>

よく見かける例なので説明を省くが、「空」のトラック、ではなく<br>
トラックは用意されたが「空白」セルはピリオド　.　で表現される。

<span style="display: block;margin-bottom: 2em;"></span>

一方で、子
**item**
側で自分が入る（areas）セル位置を定める場合<br>
↓中黒「・」にした空白セルは、width: 1fr / height: 1fr　だった ■ サイズから<br>
width: 0 / height: 0　の透明な点に縮小している。0：0だけど「在る」
<span style="display: block;margin-bottom: 2em;"></span>

空の
<code>　&lt;div&gt;　</code>も
<code>　&lt;span&gt;　</code>も書く必要がない。

<span style="display: block;margin-bottom: 2em;"></span>

```css
■　・　・
・　■　・
・　・　■
```

<span style="display: block;margin-bottom: 2em;"></span>

## 昔なつかしいスペーサーGIF（spacer.gif）をご存知だろうか。

<span style="display: block;margin-bottom: 2em;"></span>
まぁ簡単に、透明な如意棒を、伸縮自在なつっかえ棒として使用していた。主にテーブルデザインが主流だった時代に。<br>
透明で見えないけれど、サイズは「在る」ことを利用したブラウザ対処術でした。

<span style="display: block;margin-bottom: 2em;"></span>
それが、0かける0サイズでも、あるものは在る。まで進化してしまった。イッツ・ア・ミラクル・ワールド！

<span style="display: block;margin-bottom: 4em;"></span>
グリッドレイアウトを学習しようと海外サイトなどを覗くと、なんでか、テーブル、フロート、FlexBox・・・と昔語りからはじまるのは何故？　と感じなかったでしょうか。

<span style="display: block;margin-bottom: 1em;"></span>
たぶん皆、正直にコツコツと真面目に生きてきたら、いつのまにか泉に落とした安い斧のオマケに、金の斧・銀の斧まで女神から渡されちまって・・・状態だから。

<span style="display: block;margin-bottom: 1em;"></span>
ということに

**トラック**
に気づくまで、気づかなかった、鈍い私のための文書です。

<span style="display: block;margin-bottom: 2em;"></span>

音楽の「トラック」を連想して、あぁアレか。ボーナストラックとか「隠しトラック」というやつ。と即座に腑に落ちた。<br>
CDプレーヤーで音楽を聴いていた時代に、かならず「隠しトラック」を入れるバンドのアルバムで、4つ「飛ばす」を押して「隠しトラック」も飛ばさないと、2巡ループ再生ができなかった。
<span style="display: block;margin-bottom: 2em;"></span>

初めから聴きなおす手順を踏んだ。音は「空」でもトラックは存在する、それをよく憶えてたんですね。<br>
と書こうとして、結局書いているうちに、これって「テーブルデザイン」レガシーの
**プラチナ斧**
をもらった仕様じゃないか！という結論に至る。
<span style="display: block;margin-bottom: 2em;"></span>

数年、無邪気に（便利ぃ。CSS Grid まじ便利ぃ）と何も気づかず活用していた。

<!-- **grid-row**
**grid-column** -->


<span style="display: block;margin-bottom: 20em;"></span>


### grid-column-start/end　grid-row-start/end




<span style="display: block;margin-bottom: 2em;"></span>
順番は行 / 列、すなわち　row / column<br>
ただし緯度経度は交差する点をx,y座標でとると






<br><br><br><br><br><br><br>



```css
grid-template-columns: repeat(3, 1fr);
```





<code></code>



<span style="display: block;margin-bottom: 2em;"></span>





undefined


<span style="display: block;margin-bottom: 20em;"></span>






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









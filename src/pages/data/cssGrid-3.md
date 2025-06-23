---
title: "CODE3"
date: "2025-06-09 19:00:00"
slug: 'cssGrid-3'
type: ""
---
<span style="display: block;margin-bottom: 2em;"></span>

## トラックリスト

<span style="display: block;margin-bottom: 1em;"></span>
この特殊な方眼紙の縦横・罫線サイズは、px , em , % , fr など複数単位を使い分けする可変の方眼で、セルのサイズは（ほとんどの場合）＝方眼サイズ。<br>
**item**
は、実は＝方眼サイズ（＝セルのサイズではなく）それ自体のサイズをもつ。

<span style="display: block;margin-bottom: 2em;"></span>
わざわざややこしい話を先にしてしまったが、セル = itemではなく、ましてトラックサイズでもないと理解していないと、おそらく「縦横中央揃え」あたりの挙動で不思議なことになる。



- justify-items
- align-items
- place-items



## Grid 親コンテナは、トラックリストをつくる

<span style="display: block;margin-bottom: 2em;"></span>

基本から入ったのは、
**トラックリスト**
の話をしたいからだ。

あまたのGridチュートリアルやHowToサイトが


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

一括指定プロパティ


<span style="display: block;margin-bottom: 2em;"></span>
順番は行 / 列、すなわち　row / column<br>
ただし緯度経度は交差する点をx,y座標でとると




<span style="display: block;margin-bottom: 6em;"></span>


四角形ブロックなら正方形から長方形までメディアサイズに合わせた自在変化ができる。

<span style="display: block;margin-bottom: 2em;"></span>




<!-- hr -->
<span style="display: block;margin-top: 4em;height: 1em;border-top: 1px solid var(--border2);"></span>


# Basic 9 Grid

<span style="display:block;margin-bottom:2em;"></span>


<span style="display:block;margin-bottom:4em;"></span>

## fr 単位が優秀な件


<span style="display: block;margin-bottom: 2em;"></span>
いきなり白々しく
<code>　grid-template-columns: 3fr 3fr 3fr;　</code>
などと書いてますが、外箱のサイズを
**縦横：300px**
と固定している中で、

<code>　grid-template-columns: 1fr 1fr 1fr;　</code>と書くのも<br>
<code>　grid-template-columns: 4fr 4fr 4fr;　</code>と書くのも、すべて結果は同じ。<br>
「均等な3つの値」という分数だからだ。

<span style="display: block;margin-bottom: 2em;"></span>


分数、割り算、割合、パーセンテージ。全体幅がいくつであれ、100の「1/3」は33.33333...<br>
10割に対する約3割ちょぃ、を電卓を叩かずに計算してくれる、素晴らしさ。

<span style="display: block;margin-bottom: 1em;"></span>

分数は「1/2」も「2/4」も「8/16」も同じ大きさ。<br>
ディスプレイ・アスペクト比に多い
**16:9**
で考えるのに、この一見アバウトで、しかし計算は正確に返してくれる
fr単位は重宝します。



<!-- hr -->
<span style="display: block;margin-top: 1em;height: 1em;border-top: 1px solid var(--border2);"></span>

たとえば1200px幅をベースにサイトをデザインするとして<br>
横3分割するセクションでは
<code>　grid-template-columns: 4fr 4fr 4fr;　</code><br>
横4分割するセクションでは
<code>　grid-template-columns: 3fr 3fr 3fr 3fr;　</code><br>
という感覚は、12：4：3　の公倍数、1200の公約数という解りやすさで頭がすっきりする。

<span style="display:block;margin-bottom:2em;"></span>
おまけに余白ではなく「間隙」
**gap**
指定で面倒な暗算はブラウザがしてくれる。

<span style="display:block;margin-bottom:2em;"></span>

私の場合は画面サイズを考えながらデザインするとき、頭の中に
<code>　grid-template-columns: repeat(16, 1fr);　</code>
がある。

というより、ラフすぎるポンチ絵を描きながら、横2分割なら
**8fr：8fr**
その半分なら
**4fr**
と記入してしまう癖がついた。

<!-- hr -->
<span style="display: block;margin-top: 1em;height: 1em;border-top: 1px solid var(--border2);"></span>

先に書いた
<code>　12fr　</code>
を想定した考え方も<br>
10割に対して1/3は、まぁザックリ
<code>　3fr 3fr 3fr;　</code>という考え方も、<br>
（テキトー、テキトー）と独り言しながら、CSS Gridが「適当」で妥当な数値を返してくれるのに完全お任せするスタイルである。

<span style="display:block;margin-bottom:2em;"></span>
**ものは言いよう**
みたいな話が長引いたが、筆者は「ものは捉えよう」な説明をしているつもりだ。算数は処世術、

単位
**fr**
は、とりあえずピクセル単位に拘泥することなく、バランスのとれたデザイン（設計）がしやすい。CSS Gridは便利かつ手堅い手法とアピールするノウハウよりも、まずは（理にかなっているよね）と頷きたい。

<span style="display:block;margin-bottom:2em;"></span>
次は、グリッドレイアウトには「空」が置けるという話。





<!-- hr -->
<span style="display: block;margin-top: 2em;height: 1em;border-top: 1px solid var(--border2);"></span>


# Empty 9 Grid

<div style="display: grid;grid-template: repeat(3, 1fr) / repeat(3, 1fr);gap: 1em;margin: 0 auto;width: 300px;height: 300px;">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 1/2;grid-row: 1/2;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 2/3;grid-row: 2/3;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 3/4;grid-row: 3/4;"></div>
</div>


Grid Layout上と同じグリッドレイアウトに、色と枠のついた
**div.cell**
を3つ。

<span style="display:block;margin-bottom:3em;"></span>

親コンテナが
<code>grid-template-columns</code>
<code>grid-template-rows</code>
<code></code>

<div style="display: grid;gap:.5em;margin: 3em auto 1em;width: 90%;background:rgba(137,221,255,0.3)">
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 5svh;"></div>

</div>



<div style="display: grid;gap:.5em;margin: 3em auto 1em;width: 90%;background:rgba(137,221,255,0.3)">
<div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
<div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>

</div>

```css
grid-template-columns: repeat(3, 1fr);
```

### HTML

```html
<div class="layoutGrid">
  <div class="cell smallem"></div>
  <div class="cell smallem"></div>
  <div class="cell smallem"></div>
  <div class="cell smallem"></div>
  <div class="cell smallem"></div>
  <div class="cell smallem"></div>
  <div class="cell smallem"></div>
  <div class="cell smallem"></div>
  <div class="cell smallem"></div>
</div>
```



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
<!-- sample -->


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
<code></code>

# 空はある、あるものはある。

undefined


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

Gridで充填式のFlexBoxと似たことをする場合は、<br>
列数のみ<code>　grid-template-columns:repeat(4, 1fr);　</code>


<div style="display: grid;grid-template-columns:repeat(4, 1fr);gap: 1em;margin: 0 auto;width: 50%;height: 200px;">
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


<span style="display: block;margin-bottom: 1em;"></span>
ただし憶えにくいショートハンドは無理に憶えず

 つの <grid-line> が指定された場合、 grid-row-start が最初の値に設定され、 grid-column-start が 2 つ目の値に設定され、 grid-row-end が 3 つ目の値に設定され、 grid-column-end が 4 つ目の値に設定されます。


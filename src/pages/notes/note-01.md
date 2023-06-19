---
title: "Article Style Variables"
date: "2023-06-03 10:00:00"
slug: 'note-01-styles'
description: "HTML Elements Style and Color"
---
<section style="margin-bottom: 4em;">
このPostはStyleサンプルです。文章は夏目漱石「こころ」より抜粋。

</section>

<h2>Variables.scss</h2>

```css
/* palette */
--white: #fff;
--black: #000;
--black-fade-5: rgba(0, 0, 0, 0.1);
```

<h2>Spacing</h2>

```css
/* radii */
--radius-sm: 4px;

/* spacing */
--space-sm: 4px;
--space-md: 8px;
--space-lg: 16px;
--space-xl: 20px;
--space-2xl: 24px;
--space-3xl: 48px;
```


<h2>Text . Font</h2>

```css
/* line-height */
--solid: 1;
--dense: 1.25;
--default: 1.5;
--loose: 1.75;

/* font-weight */
--body: 400;
--medium: 500;
--semibold: 600;
--bold: 700;
--extrabold: 800;
--heavy: 900;

/* font-size */
--text-xs: 12px;
--text-sm: 14px;
--text-md: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 32px;
--text-4xl: 48px;
--text-5xl: 64px;
--text-6xl: 76px;
```
<h2>Color . Size</h2>

<div style="display: flex; gap:16px">
  <div style="background: #ffc400;padding: 20px;border-radius: 4px;">
    var(--primary)
  </div>

  <div style="background: #afc2cb;padding: 20px;border-radius: 4px;">
    var(--secondary)
  </div>

  <div style="background: #DC143C;padding: 20px;border-radius: 4px;">
    var(--crimson)
  </div>

  <div style="background: #4a90e2;padding: 20px;border-radius: 4px;">
    var(--blue)
  </div>

  <div style="background: rgba(0, 0, 0, 0.1);padding: 20px;border-radius: 4px;">
    var(--black-fade-5)
  </div>
</div>




```css
/* colors */
--primary: #ffc400;
--secondary: #afc2cb;
--crimson: #DC143C;
--blue: #4a90e2;
--border: var(--black-fade-5);

/* size */
--text-lead: var(--text-lg);
--text-prose: var(--text-md);
--text-title: var(--text-3xl);
/* tracking */
--text-prose-tracking: -0.011em;

/* size */
--size-gutter: var(--space-2xl);
--size-logo: var(--space-2xl);
--size-max-width: 80rem;
```
<hr>
<p style="line-height: 1;margin:20px;font-size: 12px;">--text-xs: 12px;</p>
<p style="line-height: 1;margin:20px;font-size: 14px;">--text-sm: 14px;</p>
<p style="line-height: 1;margin:20px;font-size: 16px;">--text-md: 16px;</p>
<p style="line-height: 1;margin:20px;font-size: 18px;">--text-lg: 18px;</p>
<p style="line-height: 1;margin:20px;font-size: 20px;">--text-xl: 20px;</p>
<p style="line-height: 1;margin:20px;font-size: 24px;">--text-2xl: 24px;</p>
<p style="line-height: 1;margin:20px;font-size: 32px;">--text-3xl: 32px;</p>
<p style="line-height: 1;margin:20px;font-size: 48px;">--text-4xl: 48px;</p>
<p style="line-height: 1;margin:20px;font-size: 64px;">--text-5xl: 64px;</p>
<p style="line-height: 1;margin:20px;font-size: 76px;">--text-6xl: 76px;</p>
<hr>
<h1>H1 heading このブログはGatsby.jsでつくられています。</h1>
<p>私わたくしはその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚はばかる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、<span class="primary-col">すぐ「先生」といいたくなる。</span>筆を執とっても心持は同じ事である。<span class="bold">よそよそしい頭文字</span>かしらもじなどはとても使う気にならない。</p>


<h2>H2 heading このブログはGatsby.jsでつくられています。</h2>
<p>私が先生と知り合いになったのは鎌倉かまくらである。<span class="blue-col">その時私はまだ若々しい書生であった。</span>暑中休暇を利用して海水浴に行った友達からぜひ来いという端書はがきを受け取ったので、私は多少の金を工面くめんして、出掛ける事にした。<span class="secondary-col">私は金の工面に二に、三日さんちを費やした。</span>ところが私が鎌倉に着いて三日と経たたないうちに、私を呼び寄せた友達は、急に国元から帰れという電報を受け取った。</p>
<blockquote>
電報には母が病気だからと断ってあったけれども友達はそれを信じなかった。友達はかねてから国元にいる親たちに勧すすまない結婚を強しいられていた。彼は現代の習慣からいうと結婚するにはあまり年が若過ぎた。それに肝心かんじんの当人が気に入らなかった。それで夏休みに当然帰るべきところを、わざと避けて東京の近くで遊んでいたのである。<span class="crimson-col">彼は電報を私に見せてどうしようと相談をした。</span>私にはどうしていいか分らなかった。けれども実際彼の母が病気であるとすれば彼は固もとより帰るべきはずであった。それで彼はとうとう帰る事になった。せっかく来た私は一人取り残された。</blockquote>

<br>

```css
.primary-col {
  color: var(--primary);
}
.secondary-col {
  color: var(--secondary);
}
.crimson-col {
  color: var(--crimson);
}
.blue-col {
  color: var(--blue);
}
```


<h3>H3 heading このブログはGatsby.jsでつくられています。</h3>
<p>学校の授業が始まるにはまだ大分だいぶ日数ひかずがあるので鎌倉におってもよし、帰ってもよいという境遇にいた私は、当分元の宿に留とまる覚悟をした。友達は中国のある資産家の息子むすこで金に不自由のない男であったけれども、学校が学校なのと年が年なので、生活の程度は私とそう変りもしなかった。したがって一人ひとりぼっちになった私は別に恰好かっこうな宿を探す面倒ももたなかったのである。
</p>

<h4>H4 heading このブログはGatsby.jsでつくられています。</h4>
<p>
宿は鎌倉でも辺鄙へんぴな方角にあった。玉突たまつきだのアイスクリームだのというハイカラなものには長い畷なわてを一つ越さなければ手が届かなかった。車で行っても二十銭は取られた。けれども個人の別荘はそこここにいくつでも建てられていた。それに海へはごく近いので海水浴をやるには至極便利な地位を占めていた。</p>

<h5>H5 heading このブログはGatsby.jsでつくられています。</h5>
<p>私は毎日海へはいりに出掛けた。古い燻くすぶり返った藁葺わらぶきの間あいだを通り抜けて磯いそへ下りると、この辺へんにこれほどの都会人種が住んでいるかと思うほど、避暑に来た男や女で砂の上が動いていた。ある時は海の中が銭湯せんとうのように黒い頭でごちゃごちゃしている事もあった。その中に知った人を一人ももたない私も、こういう賑にぎやかな景色の中に裹つつまれて、砂の上に寝ねそべってみたり、膝頭ひざがしらを波に打たしてそこいらを跳はね廻まわるのは愉快であった。</p>

<h6>H6 heading このブログはGatsby.jsでつくられています。</h6>
<p>私は実に先生をこの雑沓ざっとうの間あいだに見付け出したのである。その時海岸には掛茶屋かけぢゃやが二軒あった。私はふとした機会はずみからその一軒の方に行き慣なれていた。長谷辺はせへんに大きな別荘を構えている人と違って、各自めいめいに専有の着換場きがえばを拵こしらえていないここいらの避暑客には、ぜひともこうした共同着換所といった風ふうなものが必要なのであった。彼らはここで茶を飲み、ここで休息する外ほかに、ここで海水着を洗濯させたり、ここで鹹しおはゆい身体からだを清めたり、ここへ帽子や傘かさを預けたりするのである。海水着を持たない私にも持物を盗まれる恐れはあったので、私は海へはいるたびにその茶屋へ一切いっさいを脱ぬぎ棄すてる事にしていた。</p>

- 0618 : note-post.jsに ```<span className={styles.meta}> –{' '}
							{posts.timeToRead} minute read</span>``` 

- 0619 : Darkmode追加。gatsby-plugin-use-dark-mode　+　[use-dark-mode](https://github.com/donavon/use-dark-mode)<br>[use-dark-mode - npm](https://www.npmjs.com/package/use-dark-mode?activeTab=readme)



<!-- EOF -->
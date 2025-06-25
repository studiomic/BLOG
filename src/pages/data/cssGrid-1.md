---
title: "CODE1"
date: "2025-06-15 19:00:00"
slug: 'cssGrid'
type: ""
---
<style>
  article {
    padding-left: calc(var(--size-gutter)*2);
    padding-right: calc(var(--size-gutter)*2);
    line-height: 2.1;
    font-size: var(--text-xl);
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
  .cell {
    border: 1px solid var(--text-color);
	  background: var(--hslborder);
    padding: .5em;
  }
  .grid4c {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:4px;
  }
  .grid4cr {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 6em;
    gap:4px;
  }
  .border-primary {
    border: 1px solid var(--primary);
  }
  .width100 {
    width: 100%;
  }
  .width50 {
    width: 50%;
  }
  .outline {
    outline: 1px solid crimson;
  }
  .jistretch {
    justify-items: stretch;
  }
  .jistart {
    justify-items: start;
  }
  .jiend {
    justify-items: end;
  }
  .jicenter {
    justify-items: center;
  }
  .jsstretch {
    justify-self: stretch;
  }
  .jsstart {
    justify-self: start;
  }
  .jsend {
    justify-self: end;
  }
  .jscenter {
    justify-self: center;
  }
  .align-stretch {
    align-items: stretch;
  }
  .align-start {
    align-items: start;
  }
  .align-end {
    align-items: end;
  }
  .align-center {
    align-items: center;
  }
  .as-stretch {
    align-self: stretch;
  }
  .as-start {
    align-self: start;
  }
  .as-end {
    align-self: end;
  }
  .as-center {
    align-self: center;
  }

</style>


# CSS Grid Layout - Aspect Ratio 16 : 9

グリッドレイアウトの基本をディスプレイ・サイズに多い16 : 9で考える項。

<span style="font-size:.9em;color:#cc6698;font-style:italic;">Gridは黙してトラックリストを設計する
<a href="#AspectRatio-article">( Jump Scroll )</a></span>

<span id="Basic9Grid"></span>

<!-- heading -->
# Basic 9 Grid
<div style="display: grid;grid-template: repeat(3, 1fr) / repeat(3, 1fr);gap: 1em;margin: 0 auto;width: 300px;height: 300px;">
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

<span id="Empty9Grid3"></span>

<!-- heading -->
# Empty 9 Grid : in 3 item
<div style="display: grid;grid-template: repeat(3, 1fr) / repeat(3, 1fr);gap: 1em;margin: 0 auto;width: 300px;height: 300px;">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 1/2;grid-row: 1/2;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 2/3;grid-row: 2/3;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 3/4;grid-row: 3/4;"></div>
</div>

<span id="Empty9Grid8"></span>

<!-- heading -->
# Empty 9 Grid : in 8 item
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

<span id="GridAxis"></span>
<!-- heading -->
# Grid Axis (グリッド軸)

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

<span id="GridLine"></span>

<!-- heading -->
# Grid Line (グリッド線)
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

<span id="auto-fill"></span>

<!-- heading -->
# auto-fill
<div class="samplelayoutGrid-fill">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
</div>

<span id="auto-fit"></span>

<!-- heading -->
# auto-fit
<div class="samplelayoutGrid-fit">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
</div>

<span id="auto-over"></span>

<!-- heading -->
# auto-fill and auto-fit : in 15 item
<div class="samplelayoutGrid-fit">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);height: 6svw;"></div>
</div>

<!-- hr -->
<span style="display: block;margin-top:2em;height:2em;border-top: 1px solid var(--border2);"></span>

<!-- heading -->
# justify-items: stretch
<div class="grid4c jistretch">
  <div class="cell">stretch</div>
  <div class="cell">stretch.length</div>
  <div class="cell">stretch</div>
  <div class="cell">stretch.length</div>
</div>

<!-- heading -->
# justify-items: start
<div class="grid4c jistart border-primary">
  <div class="cell">start</div>
  <div class="cell">start.length</div>
  <div class="cell">start</div>
  <div class="cell">start.length</div>
</div>

<!-- heading -->
# justify-items: center
<div class="grid4c jicenter border-primary">
  <div class="cell">center</div>
  <div class="cell">center.length</div>
  <div class="cell">center</div>
  <div class="cell">center.length</div>
</div>

<!-- heading -->
# justify-items: end
<div class="grid4c jiend border-primary">
  <div class="cell">end</div>
  <div class="cell">end.length</div>
  <div class="cell">end</div>
  <div class="cell">end.length</div>
</div>

<!-- hr -->
<span style="display: block;margin-top:2em;height:1em;border-top: 1px solid var(--border2);"></span>

<!-- heading -->
# justify-self
<div class="grid4c border-primary">
  <div class="cell jsstretch">stretch</div>
  <div class="cell jsstart">start</div>
  <div class="cell jscenter">center</div>
  <div class="cell jsend">end</div>
</div>

<!-- hr -->
<span style="display:block;margin-top:2em;height:1em;border-top:1px solid var(--border2);"></span>

<!-- heading -->
# align-items: stretch
<div class="grid4cr align-stretch">
  <div class="cell">stretch</div>
  <div class="cell">stretch</div>
  <div class="cell">stretch</div>
  <div class="cell">stretch</div>
</div>

<!-- heading -->
# align-items: start
<div class="grid4cr align-start border-primary">
  <div class="cell">start</div>
  <div class="cell">start</div>
  <div class="cell">start</div>
  <div class="cell">start</div>
</div>

<!-- heading -->
# align-items: center
<div class="grid4cr align-center border-primary">
  <div class="cell">center</div>
  <div class="cell">center</div>
  <div class="cell">center</div>
  <div class="cell">center</div>
</div>

<!-- heading -->
# align-items: end
<div class="grid4cr align-end border-primary">
  <div class="cell">end</div>
  <div class="cell">end</div>
  <div class="cell">end</div>
  <div class="cell">end</div>
</div>

<!-- heading -->
# align-self
<div class="grid4cr border-primary">
	<div class="cell as-stretch">stretch</div>
  <div class="cell as-start">start</div>
  <div class="cell as-center">center</div>
  <div class="cell as-end">end</div>
</div>

<!-- heading -->
# Basic 9 Grid in Over 2
<div style="display: grid;grid-template-columns:repeat(3, 1fr);gap: 1em;margin: 0 auto;width: 300px;height: 300px;">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
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



<!-- heading -->
# Basic 9 Grid in Over 2 + grid-auto-rows
<div style="display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(3, 1fr);
gap: 1em;margin: 0 auto;width:300px;height:300px;grid-auto-rows: minmax(40px, auto);">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);"></div>
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










<!-- heading -->
# Aspect Ratio 16 : 9
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

























<span style="display: block;margin-bottom: 1em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display: block;margin-bottom: 5em;"></span>
<span style="display: block;margin-bottom: 5em;"></span>



<!-- hr -->
<span style="display: block;margin:1em 0 1em;height: 1em;border-top: 1px solid var(--border2);"></span>

<!-- hr -->
<span style="display: block;margin:1em 0 1em;height: 1em;border-top: 1px solid var(--border2);"></span>

<!-- hr -->
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>

<article id="AspectRatio-article" style="padding-top:var(--size-gutter);"></article>

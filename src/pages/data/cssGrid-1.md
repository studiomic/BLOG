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


# CSS Grid Layout - Aspect Ratio 16 : 9

グリッドレイアウトの基本をディスプレイ・サイズに多い16 : 9で考える項。

<span style="font-size:.9em;color:#cc6698;font-style:italic;">Gridは黙してトラックリストを設計する
<a href="#AspectRatio-article">( Jump Scroll )</a></span>

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

<!-- heading -->
# Empty 9 Grid : in 3 item

<div style="display: grid;grid-template: repeat(3, 1fr) / repeat(3, 1fr);gap: 1em;margin: 0 auto;width: 300px;height: 300px;">
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 1/2;grid-row: 1/2;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 2/3;grid-row: 2/3;"></div>
  <div style="border: 1px solid var(--text-color);background: var(--hslborder);grid-column: 3/4;grid-row: 3/4;"></div>
</div>

<!-- heading -->
# Empty 9 Grid  : in 8 item

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

<!-- heading -->
# auto-fill and auto-fit : in 15 item

<!-- sample -->
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

<!-- heading -->
# Basic 9 Grid in Over 2

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






<span style="display:block;margin-bottom:4em;"></span>
<span style="display:block;margin-bottom:4em;"></span>
<span style="display:block;margin-bottom:20em;"></span>
<span style="display:block;margin-bottom:2em;"></span>
<span style="display:block;margin-bottom:2em;"></span>
<span style="display:block;margin-bottom:3em;"></span>
<span style="display:block;margin-bottom:1em;"></span>
<span style="display:block;margin-bottom:1em;"></span>
<span style="display:block;margin-bottom:1em;"></span>
<span style="display:block;margin-bottom:1em;"></span>
<span style="display:block;margin-bottom:2em;"></span>
<span style="display:block;margin-bottom:4em;"></span>

<span style="font-size: 1.5em;margin-left: .8em;"></span>










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









<span style="display: block;margin-bottom: 1em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display: block;margin-bottom: 2em;"></span>
<span style="display: block;margin-bottom: 5em;"></span>
<span style="display: block;margin-bottom: 5em;"></span>

<!-- hr -->
<span style="display: block;margin-top:2em;height:2em;border-top: 1px solid var(--border2);"></span>

<!-- hr -->
<span style="display: block;margin:1em 0 1em;height: 1em;border-top: 1px solid var(--border2);"></span>

<!-- hr -->
<span style="display: block;margin:1em 0 1em;height: 1em;border-top: 1px solid var(--border2);"></span>

<!-- hr -->
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>
<span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span>

<article id="AspectRatio-article" style="padding-top:var(--size-gutter);"></article>

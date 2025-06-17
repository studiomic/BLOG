---
title: "CODE1"
date: "2025-06-15 19:00:00"
slug: 'code-1'
type: ""
---

<section class="widthFull"><!-- sam.1 -->

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


<section><!-- src -->

### html

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
}
```

</section>


<section class="widthFull">

### Shorthand Repeat (n,fraction) : column , row gap 

```css
.layoutGrid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 1em;
	margin: 0 auto;
	width: 450px;
	height: 450px;
}
```
</section>


<section class="widthFull">

<span style="display: block;height: 4em;border-top: 1px solid var(--border);"></span>

# Empty 9 Grid


<div class="samplelayoutGrid">
  <div class="cell tr1"></div>
  <div class="cell tr2"></div>
  <div class="cell tr3"></div>
</div>

</section>


<section>

### html

```html
<div class="layoutGrid">
  <div class="cell tr1"></div>
  <div class="cell tr2"></div>
  <div class="cell tr3"></div>
</div>
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
	grid=-row: 3/4;
}
```



</section>







<!-- <section></section> -->


<!-- ## Parent -->

<section class="widthFull">
</section>

<span class="line"></span>






<!-- 

## Basic 9 Grid

### Basic 9 Grid

#### Basic 9 Grid

##### Basic 9 Grid


```css


``` -->




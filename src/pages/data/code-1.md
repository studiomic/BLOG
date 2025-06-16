---
title: "CODE1"
date: "2025-06-15 19:00:00"
slug: 'code-1'
type: ""
---

<section class="widthFull">

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


<section>

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


<section>

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
	border: 1px solid tomato;
}
```

</section>


<section class="widthFull">

<span class="line"></span>


# Empty 9 Grid

</section>

<!-- <section></section> -->


<!-- ## Parent -->







<!-- 

## Basic 9 Grid

### Basic 9 Grid

#### Basic 9 Grid

##### Basic 9 Grid


```css


``` -->




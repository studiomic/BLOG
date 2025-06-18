---
title: "CODE1"
date: "2025-06-15 19:00:00"
slug: 'cssGrid-1'
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
	background: var(--hslborder);
}
```
</section>


<section>

### Shorthand Repeat (n,fraction) : column , row gap 

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

<section class="widthFull"><span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span></section>

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

### html

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
	grid=-row: 3/4;
}
```

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
</section>

<section class="widthFull"><span style="display: block;height: 1em;border-top: 1px solid var(--border);"></span></section>
<!-- sample -->
<section class="widthFull">

# Auto Track List

# auto-fill &nbsp;  &nbsp; ( cell:6

<!-- sample -->
<div class="samplelayoutGrid-fill">
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
</div>

# auto-fit &nbsp;  &nbsp; ( cell:6

<!-- sample -->
<div class="samplelayoutGrid-fit">
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
  <div class="cell atl"></div>
</div>

# auto-fit &nbsp;  &nbsp; ( cell:15

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
	<div class="cell">
		<span style="align-self:end;display: block;">AAA</span>
	</div>
  <div class="cell">
		<div class="align-start">start</div>
	</div>
  <div class="cell">
		<div class="align-end">end</div>
	</div>
  <div class="cell">
		<div class="align-center">center</div>
	</div>
</div>
</section>











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









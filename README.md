shimmy-grid
===========

Succinct Sass/Compass CSS Grid with all brains and no fluff.

Features:

* Easy master grid width adjustment (default is 960px).
* Easy right to left (rtl) alignment (grid and text) (defaults to left (ltr) alignment).
* Infinite intelligent grid nesting.
* Push/pull capabilities with nesting.
* Lightweight
* Easy to use grid markup:

<pre><code>
	&lt;div class="container"&gt;
		&lt;div class="row"&gt;
			&lt;div class="one-whole"&gt;&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="row"&gt;
			&lt;div class="one-third"&gt;&lt;/div&gt;
			&lt;div class="two-thirds"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
</code></pre>

* Available grid classes:
	- .one-whole
	- .one-half
	- .one-third, .two-thirds
	- .one-fourth, .two-fourths, .three-fourths
	- .one-fifth, .two-fifths, .three-fifths, .four-fifths
	- .one-sixth, .two-sixths, .three-sixths, .four-sixths, .five-sixths

* Every grid class can be pushed/pulled by prepending push- or pull- for example:

<pre><code>
	&lt;div class="container"&gt;
		&lt;div class="row"&gt;
			&lt;div class="one-fourth"&gt;&lt;/div&gt;
			&lt;div class="three-fourths pull-one-sixth"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
</code></pre>

This is a work in progress. Thanks for checking it out.
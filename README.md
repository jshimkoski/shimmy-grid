shimmy-grid
===========

Sass/Compass CSS grid layout with some brains

Features:

* Easy master grid width adjustment (default is 960px).
* Easy right to left (rtl) alignment (grid and text) (defaults to left (ltr) alignment).
* Infinite grid nesting.
* Push/Pull capabilities.
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
	- .one-third
	- .two-thirds
	- .one-fourth
	- .three-fourths
	- .one-fifth
	- .two-fifths
	- .three-fifths
	- .four-fifths

* Every grid class can be pushed/pulled by prepending push- or pull- for example:
	- .push-one-fifth
	- .pull-two-thirds

This is a work in progress. Thanks for checking it out.
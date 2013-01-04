shimmy-grid
===========

Succinct Sass/Compass CSS grid that is all brains and no fluff.

Features:

* Easy master grid width adjustment (default is 960px).
* Easy right to left (rtl) alignment (grid and text) (defaults to left (ltr) alignment).
* Infinite intelligent grid nesting.
* Push/pull capabilities (even with nesting).
* Can turn on responsive design at parent grid level or row level (even nested rows) by adding a .react class.
* Easy response width size adjustment (default is < 768px).
* Lightweight
* Cross browser support (IE7+, Chrome, Firefox, Safari) (compatibility still in early testing)
* Easy to use (and remember) markup:

<pre><code>
	&lt;div class="grid"&gt;
		&lt;div class="row"&gt;
			&lt;div class="one-whole"&gt;&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="row"&gt;
			&lt;div class="one-third"&gt;&lt;/div&gt;
			&lt;div class="two-thirds"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
</code></pre>

* Available column classes:
	- .one-whole
	- .one-half
	- .one-third, .two-thirds
	- .one-fourth, .two-fourths, .three-fourths
	- .one-fifth, .two-fifths, .three-fifths, .four-fifths
	- .one-sixth, .two-sixths, .three-sixths, .four-sixths, .five-sixths

* Every column class can be pushed/pulled for example:

<pre><code>
	&lt;div class="g"&gt;
		&lt;div class="r"&gt;
			&lt;div class="one-fourth"&gt;&lt;/div&gt;
			&lt;div class="three-fourths pull-one-sixth"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
</code></pre>

* .grid class can be shortened to .g
* .row class can be shortened to .r

This is a work in progress. Thanks for checking it out.
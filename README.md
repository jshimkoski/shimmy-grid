shimmy-grid
===========

Sass/Compass CSS grid layout with some brains

Features:

* Easy master grid width adjustment (default is 960px).
* Easy right to left (rtl) alignment (grid and text) (defaults to left (ltr) alignment).
* Infinite grid nesting.
* Push/Pull capabilities.
* Easy to use grid markup:

	<div class="container">
		<div class="row">
			<div class="one-whole"></div>
		</div>
		<div class="row">
			<div class="one-third"></div>
			<div class="two-thirds"></div>
		</div>
	</div>

Available grid classes:
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
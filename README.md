shimmy-grid
===========

Succinct Sass/Compass CSS structuring grid that is all brains and no fluff.

##Features:

* Easy master grid width adjustment
	* Default: 960px
	* Can be: any unit (pixels, em, percent, etc.)
* Great multilanguage support
	* Easy grid float direction adjustment
		* Default: left
		* Can be: left or right
	* Easy grid text direction adjustment
		* Default: ltr
		* Can be: ltr or rtl
* Infinite row nesting
* Push/pull any column
	* Columns of nested rows can be pushed/pulled as well!
* Responsive features at grid level or row level
	* Works with nested rows too!
	* Just add a .respond class
* Easy master width adjustment for responsive features
	* Default: 767px
	* Can be: any unit except percent
* Available grid classes:
	* .grid
	* .g
* Available row classes:
	* .row
	* .r
* Available column classes:
	* .one-whole
	* .one-half
	* .one-third, .two-thirds
	* .one-fourth, .two-fourths, .three-fourths
	* .one-fifth, .two-fifths, .three-fifths, .four-fifths
	* .one-sixth, .two-sixths, .three-sixths, .four-sixths, .five-sixth
* Lightweight
* Cross browser support: IE 6+, Chrome, Firefox, Safari, Opera
	* Responsive features not compatible with IE 8 and below
* Very easy to use (and remember) markup

##Examples:

* Basic:

```
<div class="grid">
	<div class="row">
		<div class="one-whole"></div>
	</div>
	<div class="row">
		<div class="one-third"></div>
		<div class="two-thirds"></div>
	</div>
</div>
```

* Basic responsive grid:

```
<div class="grid respond">
	<div class="row">
		<div class="one-whole"></div>
	</div>
	<div class="row">
		<div class="one-third"></div>
		<div class="two-thirds"></div>
	</div>
</div>
```

* Shortened names and push/pull:

```
<div class="g">
	<div class="r">
		<div class="one-fourth"></div>
		<div class="two-fourths pull-one-sixth"></div>
        <div class="one-fourth push-two-thirds"></div>
	</div>
</div>
```

* Shortened names, nesting, push/pull, and responsive rows:

```
<div class="g">
	<div class="r">
		<div class="one-third pull-two-fifths"></div>
		<div class="two-thirds">
			<div class="r">
				<div class="one-fourth"></div>
				<div class="three-fourths pull-one-sixth">
					<div class="r respond">
						<div class="one-third"></div>
						<div class="one-third push-one-half"></div>
						<div class="one-third"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="r respond">
		<div class="one-half"></div>
		<div class="one-half"></div>
	</div>
</div>
```

##FAQs:

Q: Will you add gutters to shimmy-grid?

A: No. shimmy-grid is strictly structural. Use a .gutter class for parent elements inside columns instead (as done in the demo page).

Q: Why isn't responsive design supported on IE 8 and below?

A: Because IE sucks. Those versions of IE aren't found on mobile devices so I wouldn't worry about it.

##Additional Info:

This is a work in progress.

**Thank you for checking it out.**
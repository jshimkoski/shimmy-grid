shimmy-grid
===========

Succinct Sass/Compass CSS structuring grid that is all brains and no fluff.

##Features

* Built-in CSS reset
* Easy master grid width adjustment
	* Default: 960px
	* Can be: any unit (pixels, em, percent, etc.)
* Easily adjust total column count
	* Default: 6
	* Can be: from 1 through 12
* Great multi-language support
	* Easy grid float direction adjustment
		* Default: left
		* Can be: left or right
	* Easy grid text direction adjustment
		* Default: ltr
		* Can be: ltr or rtl
* Infinite grid and row nesting
* Push/pull any column
	* Can be enabled/disabled
	* Easily adjust total push/pull column count
		* Default: 6
		* Can be: from 1 through 12
	* Columns of nested rows can be pushed/pulled as well!
	* Just add a push or pull class to a column
		* `<div class="one-third push-one-sixth"></div>`
* Optional outside padding and gutters at grid level
	* Easy to adjust sizing
	* Add a `.pad` class for outside padding
		* `<div class="g pad"></div>`
	* Add a `.gutter` class to use gutters
		* `<div class="g gutter"></div>`
	* Use `.pad` and `.gutter` together
		* `<div class="g pad gutter"></div>`
	* Pad or gutter the grid vertically
		* `<div class="g pad-v gutter-v"></div>`
	* Pad or gutter the grid horizontally
		* `<div class="g pad-h gutter-h"></div>`
* Responsive features at grid level or row level
	* Just add a `.respond` class
		* `<div class="g respond"></div>`
	* Works with nested rows!
	* Works with outside padding and gutters!
		* `<div class="g respond pad gutter"></div>`
	* Easily defined for any size (tablet and mobile are the default)
		* Default: when the browser is < 768px all columns in a `.respond` grid/row will resize to 50% width
		* Default: when the browser is < 480px all columns in a `.respond` grid/row will resize to 100% width
* Available grid class:
	* `.g`
* Available row class:
	* `.r`
* Available column classes:
	* `.one-whole`
	* `.one-half`
	* `.one-third`, `.two-thirds`
	* `.one-fourth`, `.two-fourths`, `.three-fourths`
	* `.one-fifth`, `.two-fifths`, `.three-fifths`, `.four-fifths`
	* `.one-sixth`, `.two-sixths`, `.three-sixths`, `.four-sixths`, `.five-sixths`
	* `.one-seventh`, `.two-sevenths`, `.three-sevenths`, `.four-sevenths`, `.five-sevenths`, `.six-sevenths`
	* `.one-eighth`, `.two-eighths`, `.three-eighths`, `.four-eighths`, `.five-eighths`, `.six-eighths`, `.seven-eighths`
	* `.one-ninth`, `.two-ninths`, `.three-ninths`, `.four-ninths`, `.five-ninths`, `.six-ninths`, `.seven-ninths`, `.eight-ninths`
	* `.one-tenth`, `.two-tenths`, `.three-tenths`, `.four-tenths`, `.five-tenths`, `.six-tenths`, `.seven-tenths`, `.eight-tenths`, `.nine-tenths`
	* `.one-eleventh`, `.two-elevenths`, `.three-elevenths`, `.four-elevenths`, `.five-elevenths`, `.six-elevenths`, `.seven-elevenths`, `.eight-elevenths`, `.nine-elevenths`, `.ten-elevenths`
	* `.one-twelth`, `.two-twelths`, `.three-twelths`, `.four-twelths`, `.five-twelths`, `.six-twelths`, `.seven-twelths`, `.eight-twelths`, `.nine-twelths`, `.ten-twelths`, `.eleven-twelths`
* Available push column classes:
	* `.push-one-whole`
	* `.push-one-half`
	* `.push-one-third`, `.push-two-thirds`
	* `.push-one-fourth`, `.push-two-fourths`, `.push-three-fourths`
	* `.push-one-fifth`, `.push-two-fifths`, `.push-three-fifths`, `.push-four-fifths`
	* `.push-one-sixth`, `.push-two-sixths`, `.push-three-sixths`, `.push-four-sixths, `.push-five-sixths`
	* `.push-one-seventh`, `.push-two-sevenths`, `.push-three-sevenths`, `.push-four-sevenths`, `.push-five-sevenths`, `.push-six-sevenths`
	* `.push-one-eighth`, `.push-two-eighths`, `.push-three-eighths`, `.push-four-eighths`, `.push-five-eighths`, `.push-six-eighths`, `.push-seven-eighths`
	* `.push-one-ninth`, `.push-two-ninths`, `.push-three-ninths`, `.push-four-ninths`, `.push-five-ninths`, `.push-six-ninths`, `.push-seven-ninths`, `.push-eight-ninths`
	* `.push-one-tenth`, `.push-two-tenths`, `.push-three-tenths`, `.push-four-tenths`, `.push-five-tenths`, `.push-six-tenths`, `.push-seven-tenths`, `.push-eight-tenths`, `.push-nine-tenths`
	* `.push-one-eleventh`, `.push-two-elevenths`, `.push-three-elevenths`, `.push-four-elevenths`, `.push-five-elevenths`, `.push-six-elevenths`, `.push-seven-elevenths`, `.push-eight-elevenths`, `.push-nine-elevenths`, `.push-ten-elevenths`
	* `.push-one-twelth`, `.push-two-twelths`, `.push-three-twelths`, `.push-four-twelths`, `.push-five-twelths`, `.push-six-twelths`, `.push-seven-twelths`, `.push-eight-twelths`, `.push-nine-twelths`, `.push-ten-twelths`, `.push-eleven-twelths`
* Available pull column classes:
	* `.pull-one-whole`
	* `.pull-one-half`
	* `.pull-one-third`, `.pull-two-thirds`
	* `.pull-one-fourth`, `.pull-two-fourths`, `.pull-three-fourths`
	* `.pull-one-fifth`, `.pull-two-fifths`, `.pull-three-fifths`, `.pull-four-fifths`
	* `.pull-one-sixth`, `.pull-two-sixths`, `.pull-three-sixths`, `.pull-four-sixths`, `.pull-five-sixths`
	* `.pull-one-seventh`, `.pull-two-sevenths`, `.pull-three-sevenths`, `.pull-four-sevenths`, `.pull-five-sevenths`, `.pull-six-sevenths`
	* `.pull-one-eighth`, `.pull-two-eighths`, `.pull-three-eighths`, `.pull-four-eighths`, `.pull-five-eighths`, `.pull-six-eighths`, `.pull-seven-eighths`
	* `.pull-one-ninth`, `.pull-two-ninths`, `.pull-three-ninths`, `.pull-four-ninths`, `.pull-five-ninths`, `.pull-six-ninths`, `.pull-seven-ninths`, `.pull-eight-ninths`
	* `.pull-one-tenth`, `.pull-two-tenths`, `.pull-three-tenths`, `.pull-four-tenths`, `.pull-five-tenths`, `.pull-six-tenths`, `.pull-seven-tenths`, `.pull-eight-tenths`, `.pull-nine-tenths`
	* `.pull-one-eleventh`, `.pull-two-elevenths`, `.pull-three-elevenths`, `.pull-four-elevenths`, `.pull-five-elevenths`, `.pull-six-elevenths`, `.pull-seven-elevenths`, `.pull-eight-elevenths`, `.pull-nine-elevenths`, `.pull-ten-elevenths`
	* `.pull-one-twelth`, `.pull-two-twelths`, `.pull-three-twelths`, `.pull-four-twelths`, `.pull-five-twelths`, `.pull-six-twelths`, `.pull-seven-twelths`, `.pull-eight-twelths`, `.pull-nine-twelths`, `.pull-ten-twelths`, `.pull-eleven-twelths`
* Very easy to use (and remember) markup
* Cross browser support: IE 6+, Chrome, Firefox, Safari, Opera
	* Responsive features not compatible with IE 8 and below
		* See FAQs
	* Outside padding and gutters not compatible with IE 7 and below
		* See FAQs
* Lightweight

##Examples

* Basic:

```
<div class="g">
	<div class="r">
		<div class="one-whole"></div>
	</div>
	<div class="r">
		<div class="one-third"></div>
		<div class="two-thirds"></div>
	</div>
</div>
```

* Basic responsive grid:

```
<div class="g respond">
	<div class="r">
		<div class="one-whole"></div>
	</div>
	<div class="r">
		<div class="one-third"></div>
		<div class="two-thirds"></div>
	</div>
</div>
```

* Basic responsive grid with gutters:

```
<div class="g respond gutter">
	<div class="r">
		<div class="one-whole"></div>
	</div>
	<div class="r">
		<div class="one-third"></div>
		<div class="two-thirds"></div>
	</div>
</div>
```

* Outside padding and push/pull:

```
<div class="g pad">
	<div class="r">
		<div class="one-fourth"></div>
		<div class="two-fourths pull-one-sixth"></div>
        <div class="one-fourth push-two-thirds"></div>
	</div>
</div>
```

* Nesting, push/pull, responsive rows, outside padding, and gutters:

```
<div class="g pad gutter">
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

##FAQs

Q: Where can I find the global settings?

A: The global settings are found in the `_base.scss` file.

Q: Why aren't the responsive features supported on IE 8 and below?

A: Because IE sucks. Those versions of IE aren't found on mobile devices so I wouldn't worry about it.

Q: Why doesn't outside padding or gutters work in IE 7 and below?

A: Again, IE sucks. Put padding on a column's parent element to simulate these features.

Q: Why do I need to add the `.respond` class to turn on responsive features, the `.pad` class for outside grid padding, and `.gutter` for gutters? Shouldn't these options be automatic?

A: Having the option to activate these features at will allows for very powerful and fine-grained design manipulation.

Q: How is push/pull calculated?

A: Pushed/pulled columns are moved left or right based on their closest parent element's width. Push/pull is disabled when a grid/row is in a responsive state.

##Additional Info

If you find any bugs or have questions/concerns please let me know.

**Thank you for gitting out the word on shimmy-grid! (See what I did there).**
shimmy-grid
===========

Succinct Sass/Compass CSS structuring grid that is all brains and no fluff.

##Features

* Built-in CSS reset
* Easy master grid width adjustment
	* Default: 960px
	* Can be: any unit (pixels, em, percent, etc.)
* Great multi-language support
	* Easy grid float direction adjustment
		* Default: left
		* Can be: left or right
	* Easy grid text direction adjustment
		* Default: ltr
		* Can be: ltr or rtl
* Infinite row nesting
* Push/pull any column
	* Columns of nested rows can be pushed/pulled as well!
	* Just add a push or pull class to a column
		* `<div class="one-third push-one-sixth"></div>`
* Optional outside padding and gutters
	* Easy to adjust sizing
	* Add a `.pad` class for outside padding
		* `<div class="grid pad"></div>`
	* Add a `.gutter` class to use gutters
		* `<div class="grid gutter"></div>`
	* Use `.pad` and `.gutter` together
		* `<div class="grid pad gutter"></div>`
* Responsive features at grid level or row level
	* Just add a `.respond` class
		* `<div class="grid respond"></div>`
	* Works with nested rows!
	* Works with outside padding and gutters!
		* `<div class="grid respond pad gutter"></div>`
	* Easily defined for any size (tablet and mobile are the default)
		* Default: when the browser is < 768px all columns in a `.respond` grid/row will resize to 50% width
		* Default: when the browser is < 480px all columns in a `.respond` grid/row will resize to 100% width
* Available grid classes:
	* `.grid` or `.g`
* Available row classes:
	* `.row` or `.r`
* Available column classes:
	* `.one-whole`
	* `.one-half`
	* `.one-third`, `.two-thirds`
	* `.one-fourth`, `.two-fourths`, `.three-fourths`
	* `.one-fifth`, `.two-fifths`, `.three-fifths`, `.four-fifths`
	* `.one-sixth`, `.two-sixths`, `.three-sixths`, `.four-sixths`, `.five-sixths`
* Available push column classes:
	* `.push-one-whole`
	* `.push-one-half`
	* `.push-one-third`, `.push-two-thirds`
	* `.push-one-fourth`, `.push-two-fourths`, `.push-three-fourths`
	* `.push-one-fifth`, `.push-two-fifths`, `.push-three-fifths`, `.push-four-fifths`
	* `.push-one-sixth`, `.push-two-sixths`, `.push-three-sixths`, `.push-four-sixths, `.push-five-sixths`
* Available pull column classes:
	* `.pull-one-whole`
	* `.pull-one-half`
	* `.pull-one-third`, `.pull-two-thirds`
	* `.pull-one-fourth`, `.pull-two-fourths`, `.pull-three-fourths`
	* `.pull-one-fifth`, `.pull-two-fifths`, `.pull-three-fifths`, `.pull-four-fifths`
	* `.pull-one-sixth`, `.pull-two-sixths`, `.pull-three-sixths`, `.pull-four-sixths`, `.pull-five-sixths`
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

* Basic responsive grid with gutters:

```
<div class="grid respond gutter">
	<div class="row">
		<div class="one-whole"></div>
	</div>
	<div class="row">
		<div class="one-third"></div>
		<div class="two-thirds"></div>
	</div>
</div>
```

* Shortened names, outside padding, and push/pull:

```
<div class="g pad">
	<div class="r">
		<div class="one-fourth"></div>
		<div class="two-fourths pull-one-sixth"></div>
        <div class="one-fourth push-two-thirds"></div>
	</div>
</div>
```

* Shortened names, nesting, push/pull, responsive rows, outside padding, and gutters:

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

Q: Why do I need to add the `.respond` class to turn on responsive features? Shouldn't this be automatic?

A: Having the option to activate responsive features at the grid level or at the row level allows for powerful design manipulation.

Q: How is push/pull calculated?

A: Pushed/pulled columns are moved left or right based on their closest parent element's width.

##Additional Info

If you find any bugs or have questions/concerns please let me know.

**Thank you for gitting out the word on shimmy-grid! (See what I did there).**
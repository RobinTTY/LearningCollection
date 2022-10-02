---
id: selectors
title: Selectors
sidebar_position: 2
---

A selector points to an element or group of elements to which styles will be applied.
There are different types of selectors, based on the type of element or group of elements that they point to.

The syntax  of a selector consists of two main parts, a **selector** and a **declaration block** that is put in curly brackets:

```css
selector {
  property: value;
}
```

You can write multiple selectors separated by commas, and all styles specified in the declaration block will be applied to them. For example:

```css
selector1, selector2 {
  color: red;
}
```

## Declaration block

Declaration blocks contain one or more declarations separated by semicolons. Several declarations look like this:

```css
div {
  width: 500px;
  height: 50px;
  color: yellow;
}
```

In this example, three styles are applied to `<div>` elements simultaneously: specify width equal to 500 pixels, change the height value to 50 pixels, and make the entire text yellow.

Each declaration includes a CSS `property name` and a `value` separated from each other by a colon.

The property name determines what exactly will be altered: background, text color, position on the page, or something else. The value of a property is a kind of refinement of what it will be changed to. Each property has its own individual set of permissible values.

## Types of Selectors

### Type selectors

The CSS type selector matches elements by node name. In other words, it selects all elements of the given type within a document. For example:

```css
/* All <h1> elements. */
h1 {
  color: red;
}
```

### Class selectors

The class selector matches elements based on the contents of their `class` attribute. It is useful when you need to give a lot of different elements the same look.

```css
/* All elements with class="spacious" */
.spacious {
  margin: 2em;
}
```

### Id selectors

The Id selector matches an element based on the value of the element's `id` attribute. It is used if you need to work with a specific element.

```css
/* The element with id="demo" */
#demo {
  border: red 2px solid;
}
```

### Attribute selectors

The CSS attribute selector matches elements based on the presence or value of a given attribute.

```css
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}
```

#### Syntax

##### `[attr~=value]`

Represents elements with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value.

##### `[attr|=value]`

Represents elements with an attribute name of attr whose value can be exactly value or can begin with value immediately followed by a hyphen (-). It is often used for language subcode matches.

##### `[attr^=value]`

Represents elements with an attribute name of attr whose value is prefixed (preceded) by value.

##### `[attr$=value]`

Represents elements with an attribute name of attr whose value is suffixed (followed) by value.

##### `[attr*=value]`

Represents elements with an attribute name of attr whose value contains at least one occurrence of value within the string.

##### `[attr operator value i]`

Adding an `i` before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).

##### `[attr operator value s]` (experimental)

Adding an `s` before the closing bracket causes the value to be compared case-sensitively (for characters within the ASCII range).

## Combinators

Combinators combine other selectors in a way that gives them a useful relationship to each other and the location of content in the document.

### Descendant combinator

The " " (space) combinator selects nodes that are descendants of the first element. Example: `div span` will match all `<span>` elements that are inside a `<div>` element.

### Child combinator

The `>` combinator selects nodes that are direct children of the first element. Syntax: `A > B` 
Example: `ul > li` will match all `<li>` elements that are nested directly inside a `<ul>` element.

### General sibling combinator

The `~` combinator selects siblings. This means that the second element follows the first (though not necessarily immediately), and both share the same parent. Syntax: `A ~ B` Example: `p ~ span` will match all `<span>` elements that follow a `<p>` (immediately or not).

### Adjacent sibling combinator

The `+` combinator matches the second element only if it immediately follows the first element, and both are children of the same parent element. Syntax: `A + B` Example: `h2 + p` will match the first `<p>` element that immediately follow an `<h2>` element.

### Column combinator (experimental)

The `||` combinator selects nodes which belong to a column. Syntax: `A || B` Example: `col || td` will match all `<td>` elements that belong to the scope of the `<col>`.

## Pseudo-classes and pseudo-elements

### Pseudo classes

The `:` pseudo allow the selection of elements based on state information that is not contained in the document tree. Example: `a:visited` will match all `<a>` elements that have been visited by the user.

For the full list of pseudo classes, see: [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

### Pseudo elements

The `::` pseudo represent entities that are not included in HTML. Example: `p::first-line` will match the first line of all `<p>` elements.

For the full list of pseudo elements, see: [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

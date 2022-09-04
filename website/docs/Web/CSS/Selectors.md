---
id: selectors
title: Selectors
sidebar_position: 2
---

The syntax of CSS is a list of parameters responsible for the design of elements on the page:

```css
selector {
  property: value;
}
```

CSS syntax consists of two main parts: a **selector** and a **declaration block** that is put in curly brackets.

## Selector

A selector indicates which HTML elements the styles will be applied to. For example:

```css
h1 {
  color: red;
}
```

In this case, the style will apply to all `<h1>` elements on the page. The text of the `<h1>` elements will turn red.

You can write multiple selectors separated by commas, and all styles specified in the declaration block will be applied to them. For example:

```css
h1, p {
  color: red;
}
```

Here, styles are applied to two HTML tags at once. All `<h1>` and `<p>` elements on the web page will have a red text color.

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
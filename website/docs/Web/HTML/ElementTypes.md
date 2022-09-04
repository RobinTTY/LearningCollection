---
id: element-types
title: Element Types
sidebar_position: 2
---

All you see on the page in your browser viewer are HTML elements. And this is where the difference between HTML tags and HTML elements lies: elements are what the user sees on the browser page, while tags are what the developer writes when creating an HTML document.

:::info
It is worth remembering that not all HTML tags are elements. For example, the DOCTYPE instruction, necessary for correct interpretation of code by a browser, and tags in the header of an HTML document are not elements.
:::

There are two main types of page elements:

- block-level elements
- inline elements

Both of them have their own peculiarities.

## Block-level Elements

Block-level elements are mostly used to create the structure of web pages or logically divide an HTML document into parts.
Example of block-level elements:

- `<div>`
- `<h1>`
- `<p>`

For a full list see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

The following features are characteristic of block-level elements:

- They can contain both inline elements and other block-level elements
- Browsers display them with a line break before and after the element
- Block-level elements take up the full width available
- The height is calculated automatically by the browser based on the contents

Block level elements behave like that because they act like containers that keep all their content within

## Inline Elements

Inline elements are elements of a document that constitute an integral part of a line. They emphasize a part of a text and give it a certain function or meaning. They usually contain one or more words.

Example of inline elements:

- `<a>`
- `<span>`
- `<button>`

For a full list see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)

The following features are characteristic of all inline elements:

- They can contain only data and other inline items (the only exception is the `<a>` tag that can also contain block-level elements)
- A browser doesn't make a line break before and after a tag
- They work only when they are enclosed in tags

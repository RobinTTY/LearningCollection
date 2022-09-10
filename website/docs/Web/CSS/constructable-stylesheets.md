---
id: constructable-stylesheets
title: Constructable Stylesheets
sidebar_position: 7
---

Like HTML elements, CSS stylesheets can be created using JavaScript. The process has historically been to create a `<style>` element using `document.createElement('style')`, and then access its sheet property to obtain a reference to the underlying [CSSStyleSheet](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet) instance. This method can produce duplicate CSS code and its attendant bloat, and the act of attaching leads to a flash of unstyled content whether there is bloat or not.

The `CSSStyleSheet` interface is the root of a collection of CSS representation interfaces referred to as the [CSSOM](https://developer.mozilla.org/docs/Web/API/CSS_Object_Model), offering a programmatic way to manipulate stylesheets as well as eliminating the problems associated with the old method.

![CSSStyleSheet](/img/docs/Web/CSS/CSSStyleSheet.webp)

Constructable Stylesheets make it possible to define and prepare shared CSS styles, and then apply those styles to multiple Shadow Roots or the Document easily and without duplication. **Updates to a shared `CSSStyleSheet` are applied to all roots into which it has been adopted**, and [adopting a stylesheet](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets) is fast and synchronous once the sheet has been loaded.

## Usage

Constructable Stylesheets can be used:

- to provide a centralized theme used by many components
  - the theme can be a `CSSStyleSheet` instance passed to components, with updates to the theme propagating out to components automatically
- to distribute [CSS Custom Property](https://developer.mozilla.org/docs/Web/CSS/--*) values to specific DOM subtrees without relying on the [cascade](https://developer.mozilla.org/docs/Web/CSS/Cascade)
- as a direct interface to the browser's CSS parser, making it easy to preload stylesheets without injecting them into the DOM

## Constructing a stylesheet

The [Constructable StyleSheets specification](https://www.w3.org/TR/cssom-1/#dom-cssstylesheet-cssstylesheet) makes it possible to create stylesheets imperatively by invoking the `CSSStyleSheet()` constructor. The resulting `CSSStyleSheet` object has two new methods that make it safer to add and update stylesheet rules without triggering [Flash of Unstyled Content (FOUC)](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). The `replace()` and `replaceSync()` methods both replace the stylesheet with a string of CSS, and `replace()` returns a Promise.

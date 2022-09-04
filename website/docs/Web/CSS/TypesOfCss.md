---
id: types-of-css
title: Types of CSS
sidebar_position: 1
---

There are several ways to apply CSS styles to an HTML document. Those are:

- External CSS
- Internal CSS
- Inline CSS

## External CSS

CSS styles written in a separate file are called **External Style Sheets**. To include External Style Sheets in an HTML document, use an unpaired `<link>` tag:

```html title="index.html" {6}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Connecting External CSS to HTML</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body></body>
</html>
```

The `href` attribute specifies the file's address, and the `rel` attribute with the stylesheet value tells the browser that we are connecting styles and not something else.

It is best to include the styles inside the `<head>`, but it's not a strong requirement. The `<link>` tag will also work fine elsewhere on the page.

## Internal CSS

CSS styles can be written directly in HTML markup instead of a separate file. Such sets of styles are usually called **Internal Style Sheets**. They are wrapped in a paired `<style>` tag and must be located inside `<head>`:

```html title="index.html" {6-10}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Connecting Internal CSS to HTML</title>
    <style>
      body {
        background-color: #f0f0f0;
      }
    </style>
  </head>
  <body></body>
</html>
```

This method of connection is usually only good when there are very few styles.

## Inline CSS

You can also define a style for a single element using the HTML attribute style. In this case, CSS properties are written as attribute values:

```html title="index.html" {8}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Connecting Internal CSS to HTML</title>
  </head>
  <body>
    <p style="css property; css property;">Inline CSS</p>
  </body>
</html>
```

However, this way of connection is considered bad practice because it complicates project support since the code becomes more difficult to read.

---
id: doctype
title: Doctype
sidebar_position: 1
---

In HTML, the DOCTYPE is the required `<!DOCTYPE html>` preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called "quirks mode" when rendering a document.

## Browser Modes

Before the days of web standards introduzed by the W3C, webpages typically had to be written in two versions: one for Netscape Navigator, and one for Internet Explorer. When the web standards were made at W3C, browsers could not just start using them, as doing so would break most existing sites on the web. Browsers therefore introduced two modes to treat new standards compliant sites differently from old legacy sites.

There are now three modes used by the layout engines in web browsers: **quirks mode, almost standards mode, and full standards mode**.

### Quirks Mode

In quirks mode, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespread adoption of web standards.

### Standards Mode

In full standards mode, the behavior is (hopefully) the behavior described by the HTML and CSS specifications.

### Almost Standards Mode

In almost standards mode, there are only a very small number of quirks implemented.

## Specifying the Doctype

For HTML documents, browsers use a DOCTYPE in the beginning of the document to decide whether to handle it in quirks mode or standards mode. Since HTML5 the DOCTYPE to use for full standards mode is:

```markup
<!DOCTYPE html>
```

Older versions of the HTML standard gave additional meaning to the DOCTYPE, but no browser has ever used the DOCTYPE for anything other than switching between quirks mode and standards mode.
Anything before the DOCTYPE, like a comment or an XML declaration will trigger quirks mode in Internet Explorer 9 and older.

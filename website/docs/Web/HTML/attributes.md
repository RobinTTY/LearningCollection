---
id: attributes
title: HTML attributes
sidebar_position: 3
---

For more flexible management of the web page elements design there are HTML attributes `id` and `class`. They are used to identify the elements.

## The `id` attribute

In order to work with a particular element when there are many similar ones, you need a unique identifier for the element. The `id` attribute offers you exactly that, it gives you the opportunity to come up with a name for the selected element.

For Example:

```html
<h1 id="title">Hello World!</h1>
```

In this example, `title` is the unique name of the element. Styles can now be applied to this element not through the tag selector, but through the value of the `id` attribute.

:::caution
The id can be used for only one element; you will not be able to work with multiple elements that have identifiers with the same name.
:::

## The `class` attribute

When you need to give many different elements the same look, the `class` attribute comes in handy. As a value, it takes any name you come up with. Unlike the `id` attribute, a web page can have many elements with the same value for the `class` attribute.

Consider an example:

```html
<h1 class="blue">Desired job:</h1>
<p class="blue">Frontend developer</p>
<h2 class="blue">My skills:</h2>
<p class="blue">I know HTML and CSS</p>
```

In this example, `h1`, `h2`, and two `p` tags have the same class – `blue`. Now you don't need to fiddle with each element individually through tag selectors; it is enough to specify the style only for the `class`.

It is also possible for an element to have multiple classes:

```html
<p class="black big-text">Hi!</p>
```

In this example, the `p` element has two classes at once: `black` and `big-text`.

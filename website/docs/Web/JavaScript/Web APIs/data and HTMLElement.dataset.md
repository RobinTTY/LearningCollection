---
id: dataAndDataset
title: data-* and HTMLElement.dataset
sidebar_position: 1
---

## data-\*

The data-\* [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and its [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) representation by scripts.

All such custom data are available via the [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) interface of the element the attribute is set on. The [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) property gives access to them.

## HTMLElement.dataset

The `dataset` read-only property of the [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) interface provides read/write access to [custom data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) (data-_) on elements. It exposes a map of strings ([DOMStringMap](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap)) with an entry for each data-_ attribute.

### Example

```html title="HTML"
<body>
    <h2 id="title">Dataset-Test</h2>
    <div id="myDiv" data-name="Jim" data-age="41" data-place-of-birth="New York">
</body>
```

```js title="Javascript"
const myDiv = document.getElementById("myDiv");
console.log(myDiv.dataset);
```

```json title="Console Output: Object DOMStringMap (dataset)"
{
  "name": "Jim",
  "age": "41",
  "placeOfBirth": "New York"
}
```

The name of the properties is automatically modified in JavaScript. The property name of a custom data attribute is the same as the HTML attribute without the data- prefix, and removes single dashes (-) for when to capitalize the property's "camelCased" name (e.g. `data-place-of-birth` => `placeOfBirth`).

:::note
The **`dataset` property itself** can be read, but **not directly written**. Instead, all writes must be to the individual properties within the `dataset`, which in turn represent the data attributes.
:::

### Accessing values

- Attributes can be set and read by the camelCase name/key as an object property of the dataset:

  ```js
  element.dataset.keyname;
  ```

- Attributes can also be set and read using bracket syntax:

  ```js
  element.dataset["keyname"];
  ```

- The in operator can check if a given attribute exists:

  ```js
  "keyname" in element.dataset;
  ```

### Setting values

- When the attribute is set, its value is always converted to a string.

  For example:

  ```js
  element.dataset.example = null;
  ```

  is converted into

  ```js
  data-example="null"
  ```

- To remove an attribute, you can use the [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete):

  ```js
  delete element.dataset.keyname;
  ```

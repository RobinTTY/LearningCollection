---
id: context
title: Context
sidebar_position: 2
---

Context is a way of making data available to entire component subtrees without having to manually bind properties to every component. The data is "contextually" available, such that ancestor elements in between a provider of data and consumer of data aren't aware of it.

Lit's context implementation is part of Lit Labs and available in the @lit-labs/context package:

```bash
npm i @lit-labs/context
```

Context is **useful for data that needs to be consumed by a wide variety and large number of components** - things like an app's data store, the current user, a UI theme - or when data-binding isn't an option, such as when an element needs to provide data to its light DOM children.

Context is very similar to React's Context, or to dependency injection systems like Angular's, with some important differences that make Context work with the dynamic nature of the DOM, and enable interoperability across different web components libraries, frameworks and plain JavaScript.

## Example

Using context involves a context object (sometimes called a key), a provider and a consumer, which communicate using the context object.

### Context definition (logger-context.ts)

```ts
import { createContext } from "@lit-labs/context";
import type { Logger } from "my-logging-library";
export type { Logger } from "my-logging-library";
export const loggerContext = createContext<Logger>("logger");
```

### Provider

```ts
import { LitElement, property, html } from "lit";
import { provide } from "@lit-labs/context";

import { Logger } from "my-logging-library";
import { loggerContext } from "./logger-context.js";

@customElement("my-app")
class MyApp extends LitElement {
  @provide({ context: loggerContext })
  logger = new Logger();

  render() {
    return html`...`;
  }
}
```

### Consumer

```ts
import { LitElement, property } from "lit";
import { consume } from "@lit-labs/context";

import { type Logger, loggerContext } from "./logger-context.js";

export class MyElement extends LitElement {
  @consume({ context: loggerContext })
  @property({ attribute: false })
  public logger?: Logger;

  private doThing() {
    this.logger?.log("A thing was done");
  }
}
```

## Key Concepts

### Context Protocol

Lit's context is based on the [Context Community Protocol](https://github.com/webcomponents-cg/community-protocols/blob/main/proposals/context.md) by the W3C's [Web Components Community Group](https://www.w3.org/community/webcomponents/). This protocol enables interoperability between elements (or even non-element code) regardless of how they were built. Via the context protocol, a Lit-based element can provide data to a consumer not built with Lit, or vice versa.

The Context Protocol is based on DOM events. A consumer fires a `context-request` event that carries the context key that it wants, and any element above it can listen for the `context-request` event and provide data for that context key. `@lit-labs/context` implements this event-based protocol and makes it available via a few reactive controllers and decorators.

### Context Objects

Contexts are identified by `context objects` or `context keys`. They are objects that represent some potential data to be shared by the context object identity. You can think of them as similar to Map keys.

### Providers

Providers are usually elements (but can be any event handler code) that provide data for specific context keys.

### Consumers

Consumers request data for specific context keys.

### Subscriptions

When a consumer requests data for a context, it can tell the provider that it wants to subscribe to changes in the context. If the provider has new data, the consumer will be notified and can automatically update.

## Usage

### Defining a context

Every usage of context must have a context object to coordinate the data request. This context object represents the identity and type of data that is provided. Context objects are created with the `createContext()` function:

```ts
export const myContext = createContext(Symbol("my-context"));
```

It is recommended to put context objects in their own module so that they're importable independent of specific providers and consumers.

#### Context type-checking

`createContext()` takes any value and returns it directly. In TypeScript, the value is cast to a typed `Context` object, which carries the type of the context value with it. In case of a mistake like this:

```ts
const myContext = createContext<Logger>(Symbol("logger"));

class MyElement extends LitElement {
  @provide({ context: myContext })
  name: string;
}
```

TypeScript will warn that the type `string` is not assignable to the type `Logger`.

#### Context equality

Context objects are used by providers to match a context request event to a value. Contexts are compared with strict equality (===), so a provider will only handle a context request if its context key equals the context key of the request.

This means that there are two main ways to create a context object:

1. With a value that is globally unique, like an object (`{}`) or symbol (`Symbol()`)
2. With a value that is not globally unique, so that it can be equal under strict equality, like a string(`'logger'`) or global symbol (`Symbol.for('logger')`)

If you want two separate `createContext()` calls to refer to the same context, then use a key that will be equal under strict equality like a string:

```ts
// true
createContext("my-context") === createContext("my-context");
```

Beware though that two modules in your app could use the same context key to refer to different objects. To avoid unintended collisions you may want to use a relatively unique string, e.g. like `'console-logger'` instead of `'logger'`. Usually it's best to use a globally unique context object. Symbols are one of the easiest ways to do this.

### Providing context

There are two ways in `@lit-labs/context` to provide a context value: the `ContextProvider` controller and the `@provide()` decorator.

#### `@provide()`

The `@provide()` decorator is the easiest way to provide a value if you're using decorators. It creates a ContextProvider controller for you.

Decorate a property with `@provide()` and give it the context key:

```ts
import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { provide } from "@lit-labs/context";
import { myContext, MyData } from "./my-context.js";

class MyApp extends LitElement {
  @provide({ context: myContext })
  myData: MyData;
}
```

You can make the property also a reactive property with `@property()` or `@state()` so that setting it will update the provider element as well as context consumers.

```ts
@provide({context: myContext})
@property({attribute: false})
myData: MyData;
```

Context properties are often intended to be private. You can make private properties reactive with `@state()`:

```ts
@provide({context: myContext})
@state()
private _myData: MyData;
```

Making a context property public lets an element provide a public field to its child tree:

```html
html`<my-provider-element .myData="${someData}">`</my-provider-element>
```

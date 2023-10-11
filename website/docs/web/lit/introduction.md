---
id: intro
title: Introduction
sidebar_position: 1
---

Lit is a simple library for building fast, lightweight web components. At Lit's core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that's tiny, fast and expressive.

Lit components are web components, so they act like regular HTML elements. You can add them to a page with simple HTML tags, like this:

```html
<my-element></my-element>
```

Each Lit component is a self-contained unit of UI, assembled from smaller building blocks: standard HTML elements and other web components. In turn, each Lit component is itself a building block that can be used–within an HTML document, another web component, or a framework component–to build larger and more complex interfaces.

## Use Cases

You can build just about any kind of web UI with Lit. Web components have the superpower of interoperability: natively supported by browsers, web components can be used in any HTML environment, with any framework or none at all.

This makes Lit an ideal choice for developing **shareable components or design systems**. Lit components can be used across multiple apps and sites, even if those apps and sites are built on a variety of front-end stacks. Site developers using Lit components don’t need to write or even see any Lit code; they can just use the components the same way they do built-in HTML elements.

Of course, you can also build **highly interactive, feature-rich apps** out of Lit components, just as you would with a framework like React or Vue. Lit’s capabilities and developer experience are comparable to these popular alternatives, but Lit minimizes lock-in, maximizes flexibility and promotes maintainability by embracing the browser’s native component model.

## Important Concepts

- Lit's main feature is the `LitElement` base class, a convenient and versatile extension of the native `HTMLElement`. You extend from it to define your own components.
- Lit’s [expressive, declarative templates](https://lit.dev/docs/templates/overview/) (utilizing JavaScript tagged template literals) make it easy to describe how a component should be rendered.
- [Reactive properties](https://lit.dev/docs/components/properties/) represent a component’s public API and/or internal state; your component automatically re-renders whenever a reactive property changes.
- [Styles](https://lit.dev/docs/components/styles) are scoped by default, keeping your CSS selectors simple and ensuring that your component’s styling won’t pollute (or be polluted by) the surrounding context.
- Lit works great in vanilla JavaScript, or you can use TypeScript for even better ergonomics by using decorators and type declarations.

Lit doesn’t require compilation or building during development, so it can be used virtually tool-free if you prefer. First-class [IDE support](https://lit.dev/docs/tools/development/#ide-plugins) (code-completion, linting, etc.) and [tooling for production](https://lit.dev/docs/tools/production/) (localization, template minification, etc.) are readily available.

## Advantages

- **Simple:** Building on top of the Web Components standards, Lit adds just what you need to be happy and productive: reactivity, declarative templates and a handful of thoughtful features to reduce boilerplate and make your job easier.
- **Fast:** Updates are fast, because Lit keeps track of your UI’s dynamic parts and updates only those when the underlying state changes–no need to rebuild a whole virtual tree and diff it with the current state of the DOM.
- **Leightweight:** Weighing in at around 5 KB (minified and compressed), Lit helps keep bundle sizes small and loading times short.

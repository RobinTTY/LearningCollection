---
id: rulesOfHooks
title: Rules of Hooks
sidebar_position: 6
---

Hooks are JavaScript functions, but you need to follow two rules when using them. The React team provides a [linter plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) to enforce them automatically.

## Only call hooks at the top level

**Don’t call Hooks inside loops, conditions, or nested functions.** Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple `useState` and `useEffect` calls.

## Only call hooks from React functions

**Don’t call Hooks from regular JavaScript functions.** Instead, you can:

- Call Hooks from React function components
- [Call Hooks from custom Hooks](https://reactjs.org/docs/hooks-custom.html)

By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

# React Tutorial

Another small tutorial I followed to get started with React.  
Source: [Traversy Media](https://www.youtube.com/watch?v=sBws8MSXN7A)

## Notes

## What is React

- Javascript library created by facebook
- used for building UIs (front-end applications)
- uses self contained, independent components with their own state

### Components

- Arranged in Tree like structure
- reusable
- comparable with Angular
- comprise the UI
- implemented as class with a state and a render method
- the state is an object which contains various properties, these determine how the component renders and behaves
- there can also be an application level state by using a state manager like _Redux_

### Render Method

The output of the Render Element is a React Element which (plain JavaScript object), which is a lightweight representation of the DOM Element it represents. This Element is part of the virtual DOM.

React works on the virtual DOM, a representation of the UI which is kept in memory and synced with the "real" DOM. This is done because working on the "real" DOM, that means updating it frequently, is resource expensive and should be kept to a minimum.

### Create a new React app

```Console
create-react-app <app-name>
```

# Angular Tutorial: Tour of Heroes

## Scope of this tutorial

- Use built-in Angular directives to show and hide elements and display lists of hero data
- Create Angular components to display hero details and show an array of heroes
- Use one-way data binding for read-only data
- Add editable fields to update a model with two-way data binding
- Bind component methods to user events, like keystrokes and clicks
- Enable users to select a hero from a master list and edit that hero in the details view
- Format data with pipes
- Create a shared service to assemble the heroes
- Use routing to navigate among different views and their components

## The Application Shell

You develop apps in the context of an __Angular workspace__. A workspace contains the files for __one or more projects__. A project is the set of files that comprise an app, a library, or end-to-end (e2e) tests.

### Creating a Workspace

To create a new workspace and an initial app project run the following command:

```cli
ng new angular-tour-of-heroes
```

#### What does this command do

- Structure: ng **new** \<name> [options]
- Creates and initializes a new Angular app that is the default project for a new workspace.
- Provides interactive prompts for optional configuration, such as adding routing support. All prompts can safely be allowed to default.
- Creates an end-to-end test project (in the e2e subfolder).

### Serving an application

You can start an application by executing the following command:

```cli
ng serve --open
```

#### What does this command do

Builds and serves your app, rebuilding on file changes.
The **--open** option indicates the cli to open the url in the default browser.

### Angular Components

- Components are the fundamental building blocks of Angular applications
- They display data on the screen, listen for user input, and take action based on that input
- When you execute **ng serve --open** the page you see is the application shell. The shell is controlled by an Angular component named AppComponent.

The implementation of the shell AppComponent distributed over three files:

- app.component.**ts**— the component class code, written in TypeScript.
- app.component.**html**— the component template, written in HTML
- app.component.**css**— the component's private CSS styles

The fourth file generated for the component is the app.component.**spec**.ts, this file contains unit tests for your source files.

### Interpolation binding syntax

In an Angular app we can use interpolation binding syntax or simply referred to as interpolation to embed expressions into HTML. By default, interpolation uses as its delimiter the double curly braces, {{ and }}.

Example:

Consider this component class code which contains a title property:

```Typescript
title = 'Tour of Heroes';
```

Now our template code for our component looks like this:

```HTML
<h1>{{title}}</h1>
```

This interpolation binding presents the component's title property value inside the HTML header tag. The binding is case sensitive and simply does nothing if the component class code doesn't contain a corresponding property.

### application-wide styles

- Most apps strive for a consistent look across the application
- The CLI generates an empty styles.css for this purpose in the root called **style.css**
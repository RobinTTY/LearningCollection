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

#### What this command does

- Structure: ng **new** \<name> [options]
- Creates and initializes a new Angular app that is the default project for a new workspace.
- Provides interactive prompts for optional configuration, such as adding routing support. All prompts can safely be allowed to default.
- Creates an end-to-end test project (in the e2e subfolder).

### Serving an application

You can start an application by executing the following command:

```cli
ng serve --open
```

#### What this command does

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

## The Hero Editor

### Creating a new component

Using the Angular CLI, we can generate a new component named heroes:

```cli
ng generate component heroes
```

#### What this command does

Creates a new generic component definition in the given or default project.

### Structure of a component

Example of a new component:

```Typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

You always import the Component symbol from the Angular core library and annotate the component class with @Component.

- @Component is a decorator function that specifies the Angular metadata for the component
- The CLI generates three metadata properties:
  - **selector**: the component's CSS element selector
  - **templateUrl**: the location of the component's template file
  - **styleUrls**: the location of the component's private CSS styles.

The CSS element selector, 'app-heroes', matches the name of the HTML element that identifies this component within a parent component's template.

The ngOnInit is a lifecycle hook. Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.

__Always export the component class so you can import it elsewhere, like in the AppModule.__

### Add a hero property

We can add a property to the HeroesComponent like this:

```Typescript
hero = 'Windstorm';
```

then we can display it in the components template file with the following code:

```HTML
{{hero}}
```

If we instead create a hero class like this:

```Typescript
export class Hero {
  id: number;
  name: string;
}
```

we can display its properties like this:

```HTML
<h2>{{hero.name}} Details</h2>
<div><span>id: </span>{{hero.id}}</div>
<div><span>name: </span>{{hero.name}}</div>
```

### Adding a component to the shell AppComponent

To display the HeroesComponent, we must add it to the template of the shell AppComponent.

- app-heroes is the element selector for the HeroesComponent as declared in its class code (@Component annotation)
- So we add an ```<app-heroes>``` element to the AppComponent template file, just below the title

### Pipe Example

Pipes are a good way to format strings, currency amounts, dates and other display data. Angular ships with several built-in pipes and you can create your own.

We can use one to convert the hero name to uppercase:

```HTML
<h2>{{hero.name | uppercase}} Details</h2>
```

The word uppercase in the interpolation binding, right after the pipe operator ( | ), activates the built-in UppercasePipe.

### Two-way binding

A two-way data binding is used when we want to have data flow from the component class out to the screen and from the screen back to the class

[(ngModel)] is Angular's two-way data binding syntax.

We can implement two-way data binding in our example template HeroesComponent like this:

```HTML
<div>
  <label>name:
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </label>
</div>
```

This binds the hero.name property to the HTML textbox so that data can flow in both directions: from the hero.name property to the textbox, and from the textbox back to the hero.name.

This means when we change the value in the textbox, it also changes the h2 heading which displays the name property with the two-way binding.

Although ngModel is a valid Angular directive, it isn't available by default.
It belongs to the optional FormsModule and you must opt-in to using it.

### AppModule

Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires. This information is called metadata.

Some of the metadata is in the @Component decorators that you added to your component classes. Other critical metadata is in @NgModule decorators.

__The most important @NgModule decorator annotates the top-level AppModule class.__ The Angular CLI generated an AppModule class in src/app/app.module.ts when it created the project. This is where you opt-in to the FormsModule.

You opt in by adding:

```Typescript
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
```

and

```Typescript
imports: [
  BrowserModule,
  FormsModule
],
```

### NgModule

Every component must be declared in exactly one NgModule. When you create a new component, the declaration gets generated automatically by the CLI.

- An NgModule is a class marked by the @NgModule decorator.
- @NgModule takes a metadata object that describes how to compile a component's template and how to create an injector at runtime.
- It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them.
- @NgModule can also add service providers to the application dependency injectors.
NgModules configure the injector and the compiler and help organize related things together.

## Displaying a List

If we want to display a list we first need some conent, we can use a list of heroes for example:

```Typescript
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
```

### Styling a component

Private styles that are only relevant to one component can be declared either inline in the @Component.styles array or as stylesheet file(s) identified in the @Component.styleUrls array.

When the CLI generated the HeroesComponent, it created an empty heroes.component.css stylesheet for the HeroesComponent and pointed to it in @Component.styleUrls like this.

```Typescript
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
```

Note: Styles and stylesheets identified in @Component metadata are scoped to that specific component. The heroes.component.css styles apply only to the HeroesComponent and don't affect the outer HTML or the HTML in any other component.

### Using *ngFor on lists to generate HTML

The *ngFor is Angular's repeater directive. It repeats the host element for each element in a list. To use it with our list of heroes we can do the following:

```HTML
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
```

In this example

- ```<li>``` is the host element
- heroes is the list from the HeroesComponent class
- hero holds the current hero object for each iteration through the list.

Note: Don't forget the asterisk (*) in front of ngFor. It's a critical part of the syntax.

For a list of all built in sturctural directives refer to the [Angular reference.](https://angular.io/guide/template-syntax#built-in-structural-directives)

### Using *ngFor to add a click event binding

We can add a click event binding on an list element in our heroes.component like this:

```HTML
<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
```

This is an example of Angular's [event binding](https://angular.io/guide/template-syntax#event-binding) syntax.

The parentheses around click tell Angular to listen for the ```<li>``` element's click event. When the user clicks in the ```<li>```, Angular executes the onSelect(hero) expression.

onSelect() must be a method declared in the heroes component class file. Angular calls it with the hero object displayed in the clicked ```<li>```, the same hero defined previously in the *ngFor expression.

### Using *ngIf to hide undefined elements

If we want to show hero details on click we can do this by implementing code like this:

```Typescript
selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
```

and in our template file:

```HTML
<div *ngIf="selectedHero">

  <h2>{{selectedHero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{selectedHero.id}}</div>
  <div>
    <label>name:
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </label>
  </div>

</div>
```

ngIf is a:

- structural directive that conditionally includes a template based on the value of an expression coerced to Boolean (e.g. undefined behaves as false)
- When the expression evaluates to true, Angular renders the template provided in a then clause, and when false or null, Angular renders the template provided in an optional else clause

We need the *ngIf because the selectedHero property will be undefined by default and only contain a real value upon clicking a hero in the list. If we omit the *ngIf directive our app will not behave as desired!

### Adding CSS classes conditionally

The Angular [class binding](https://angular.io/guide/template-syntax#class-binding) makes it easy to add and remove a CSS class conditionally. Just add ```[class.some-css-class]="some-condition"``` to the element you want to style.

Example:

```HTML
[class.selected]="hero === selectedHero"
```

When the current row hero is the same as the selectedHero, Angular adds the selected CSS class. When the two heroes are different, Angular removes the class.

## Master/Detail Components

We can separate the list and details in our current heroes.component, which decreases complexity as our app grows. Therefore we will create a new component for the details named "hero-detail".

### @Input properties

To use the @Input decorator we first need to ament the @angular/core import statement to include the Input symbol:

```Typescript
import { Component, OnInit, Input } from '@angular/core';
```

then we can add a property like this:

```Typescript
@Input() hero: Hero;
```

We can copy the template code from our old implementation:

```HTML
<div *ngIf="hero">

  <h2>{{hero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div>
    <label>name:
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </label>
  </div>

</div>
```

This new component now receives a hero object through its hero property and displays it. To pass a hero object to the component we simply use the following code in our heroes.component template:

```HTML
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

[hero]="selectedHero" is an Angular [property binding](https://angular.io/guide/template-syntax#property-binding).

It's a one way data binding from the selectedHero property of the HeroesComponent to the hero property of the target element, which maps to the hero property of the HeroDetailComponent.

Now when the user clicks a hero in the list, the selectedHero changes. When the selectedHero changes, the property binding updates hero and the HeroDetailComponent displays the new hero.

The two components will have a parent/child relationship. The parent HeroesComponent will control the child HeroDetailComponent by sending it a new hero to display whenever the user selects a hero from the list.

This change has several benefits:

- You simplified the HeroesComponent by reducing its responsibilities.
- You can evolve the HeroDetailComponent into a rich hero editor without touching the parent HeroesComponent.
- You can evolve the HeroesComponent without touching the hero detail view.
- You can re-use the HeroDetailComponent in the template of some future component.

## Services

Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.

Services are a great way to share information among classes that don't know each other. The service will be injected into the components who rely upon it by [dependency injection](https://angular.io/guide/dependency-injection)

Removing data access from components means you can change your mind about the implementation anytime, without touching any components. They don't know how the service works.

### Creating a service

We create a service with the CLI command:

```CLI
ng generate service hero
```

### @Injectable() services

- the new service imports the Angular Injectable symbol and annotates the class with the @Injectable() decorator
- this marks the class as one that participates in the dependency injection system
- the HeroService class is going to provide an injectable service, and it can also have its own injected dependencies
- The @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator did for component classes.

### Making a Service available to dependency injection

You must make the HeroService available to the dependency injection system before Angular can inject it into the HeroesComponent. You do this by registering a provider.

A provider is something that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service.

You need to make sure that the HeroService is registered as the provider of this service. You are registering it with an injector, which is the object that is responsible for choosing and injecting the provider where it is required.

__By default, the Angular CLI command ng generate service registers a provider with the root injector for your service by including provider metadata in the @Injectable decorator.__

If you look at the @Injectable() statement right before the HeroService class definition, you can see that the providedIn metadata value is 'root':

```Typescript
@Injectable({
  providedIn: 'root',
})
```

__When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.__

Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.

### Injecting a Service

To make a service available for a component it needs to be injected through the constructor like this:

```Typescript
constructor(private heroService: HeroService) { }
```

The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.

When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.

### Best practice for the use of the constructor

While you could call getHeroes() in the constructor, that's not the best practice.
__Reserve the constructor for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything.__ It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.

Instead, we call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit at an appropriate time after constructing a HeroesComponent instance.

### Observable data

- The HeroService.getHeroes() method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously
- The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously

```Typescript
this.heroes = this.heroService.getHeroes();
```

__This will not work in a real app. You're getting away with it because the service currently returns mock heroes.__ As soon as the app fetches the data from a remote server, this won't work
because this is an inherently asynchronous operation.

The HeroService must wait for the server to respond, getHeroes() cannot return immediately with hero data, and the browser will not block while the service waits.

__HeroService.getHeroes() must have an asynchronous signature of some kind.__

Options that can be used to achieve this behaviour:

- Callback
- Promise
- Observable.

In this tutorial, ```HeroService.getHeroes()``` will return an Observable in part because it will eventually use the Angular HttpClient.get method to fetch the heroes and ```HttpClient.get()``` returns an Observable.

### Observable HeroService

Observable is one of the key classes in the [RxJS library](http://reactivex.io/rxjs/). Angular's HttpClient methods return RxJS Observables.

We can replace our getHeroes() method with this one which implements Observable:

```Typescript
getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}
```

This function returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

Note: In the upcoming HTTP tutorial, you'll call HttpClient.get<Hero[]>() which also returns an Observable<Hero[]> that emits a single value, an array of heroes from the body of the HTTP response.

### Subscribing to an Observable

Now that we changed getHeroes() of the Service we also need to change the getHeroes() of the Heroes component:

Old Version:

```Typescript
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
```

New Version (with use of Observable):

```Typescript
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```

Observable.subscribe() is the critical difference. __The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.__ That won't work when the HeroService is actually making requests of a remote server.

The new version waits for the Observable to emit the array of heroes— which could happen now or several minutes from now. Then subscribe passes the emitted array to the callback, which sets the component's heroes property.

This asynchronous approach will work when the HeroService requests heroes from the server.

### Showing messages

In the tutorial we now create a message service which we inject into our hero service. This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.

We use a new component "messages" to handle the displaying of the messages. This component gets injected with the MessageService like this:

```Typescript
constructor(public messageService: MessageService) {}
```

The messageService property __must be public__ because you're about to bind to it in the template.

### Binding to the MessageService

We replace the template files of the messages component with:

```HTML
<div *ngIf="messageService.messages.length">

  <h2>Messages</h2>
  <button class="clear"
          (click)="messageService.clear()">clear</button>
  <div *ngFor='let message of messageService.messages'> {{message}} </div>

</div>
```

This template binds directly to the component's messageService.

- The *ngIf only displays the messages area if there are messages to show.
- An *ngFor presents the list of messages in repeated <div> elements.
- An Angular [event binding](https://angular.io/guide/template-syntax#event-binding) binds the button's click event to MessageService.clear().
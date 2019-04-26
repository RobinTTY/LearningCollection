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

```onSelect()``` must be a method declared in the heroes component class file. Angular calls it with the hero object displayed in the clicked ```<li>```, the same hero defined previously in the *ngFor expression.

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

- the new service imports the Angular Injectable symbol and annotates the class with the ```@Injectable()``` decorator
- this marks the class as one that participates in the dependency injection system
- the HeroService class is going to provide an injectable service, and it can also have its own injected dependencies
- The ```@Injectable()``` decorator accepts a metadata object for the service, the same way the ```@Component()``` decorator did for component classes.

### Making a Service available to dependency injection

You must make the HeroService available to the dependency injection system before Angular can inject it into the HeroesComponent. You do this by registering a provider.

A provider is something that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service.

You need to make sure that the HeroService is registered as the provider of this service. You are registering it with an injector, which is the object that is responsible for choosing and injecting the provider where it is required.

__By default, the Angular CLI command ng generate service registers a provider with the root injector for your service by including provider metadata in the @Injectable decorator.__

If you look at the ```@Injectable()``` statement right before the HeroService class definition, you can see that the providedIn metadata value is 'root':

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

While you could call ```getHeroes()``` in the constructor, that's not the best practice.
__Reserve the constructor for simple initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything.__ It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.

Instead, we call ```getHeroes()``` inside the ngOnInit lifecycle hook and let Angular call ngOnInit at an appropriate time after constructing a HeroesComponent instance.

### Observable data

- The ```HeroService.getHeroes()``` method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously
- The HeroesComponent consumes the ```getHeroes()``` result as if heroes could be fetched synchronously

```Typescript
this.heroes = this.heroService.getHeroes();
```

__This will not work in a real app. You're getting away with it because the service currently returns mock heroes.__ As soon as the app fetches the data from a remote server, this won't work
because this is an inherently asynchronous operation.

The HeroService must wait for the server to respond, ```getHeroes()``` cannot return immediately with hero data, and the browser will not block while the service waits.

__HeroService.getHeroes() must have an asynchronous signature of some kind.__

Options that can be used to achieve this behaviour:

- Callback
- Promise
- Observable.

In this tutorial, ```HeroService.getHeroes()``` will return an Observable in part because it will eventually use the Angular HttpClient.get method to fetch the heroes and ```HttpClient.get()``` returns an Observable.

### Observable HeroService

Observable is one of the key classes in the [RxJS library](http://reactivex.io/rxjs/). Angular's HttpClient methods return RxJS Observables.

We can replace our ```getHeroes()``` method with this one which implements Observable:

```Typescript
getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}
```

This function returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

Note: In the upcoming HTTP tutorial, you'll call ```HttpClient.get<Hero[]>()``` which also returns an Observable<Hero[]> that emits a single value, an array of heroes from the body of the HTTP response.

### Subscribing to an Observable

Now that we changed ```getHeroes()``` of the Service we also need to change the ```getHeroes()``` of the Heroes component:

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

```Observable.subscribe()``` is the critical difference. __The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.__ That won't work when the HeroService is actually making requests of a remote server.

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
- An Angular [event binding](https://angular.io/guide/template-syntax#event-binding) binds the button's click event to ```MessageService.clear().```

## Routing

In this part of the tutorial we will add a Dashboard view, add the ability to navigate between Heroes and Dashboard views and look at deep links.

__In Angular, the best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.__ By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app folder.

### Creating a Router module

```CLI
ng generate module app-routing --flat --module=app
```

- --flat puts the file in src/app instead of its own folder
- --module=app tells the CLI to register it in the imports array of the AppModule

This will create the following code:

```Typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

Exporting RouterModule makes router directives available for use in the AppModule components that will need them.

### Adding Routes

Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.

A typical Angular Route has two properties:

- __path:__ a string that matches the URL in the browser address bar
- __component:__ the component that the router should create when navigating to this route

In our example we intend to navigate to the HeroesComponent when the URL is something like localhost:4200/heroes.

We Import the HeroesComponent so we can reference it in a Route. Then define a route in the Route Array:

```Typescript
import { HeroesComponent }      from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
```

The router will match that URL to path: 'heroes' and display the HeroesComponent.

### RouterModule.forRoot()

You first must initialize the router and start it listening for browser location changes.

- The method is called ```forRoot()``` because you configure the router at the application's root level
- The ```forRoot()``` method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL

### Adding RouterOutlet

We can modify the template of app.component which currently looks like this:

```HTML
<h1>{{title}}</h1>
<app-heroes></app-heroes>
<app-messages></app-messages>
```

The new version will look like this:

```HTML
<h1>{{title}}</h1>
<router-outlet></router-outlet>
<app-messages></app-messages>
```

We removed ```<app-heroes>``` because we will only display the HeroesComponent when the user navigates to it.

The ```<router-outlet>``` tells the router where to display routed views.

Note: The RouterOutlet is one of the router directives that became available to the AppComponent because AppModule imports AppRoutingModule which exported RouterModule.

### Adding a routerLink

Users shouldn't have to paste a route URL into the address bar. They should be able to click a link to navigate. Therefore we add a so called routerLink:

```HTML
<h1>{{title}}</h1>
<nav>
  <a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
<app-messages></app-messages>
```

- The routerLink attribute is set to "/heroes", the string that the router matches to the route to HeroesComponent.
- The routerLink is the selector for the RouterLink directive that turns user clicks into router navigations. It's another of the public directives in the RouterModule.

### Adding a dashboard view

In our tutorial we are adding a Dashboard component with the following HTML:

```HTML
<h3>Top Heroes</h3>
<div class="grid grid-pad">
  <a *ngFor="let hero of heroes" class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </a>
</div>
```

The template presents a grid of hero name links:

- The *ngFor repeater creates as many links as are in the component's heroes array.
- The links don't go anywhere yet

We create the class file like this:

```Typescript
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
```

The class is similar to the HeroesComponent class:

- It defines a heroes array property
- The constructor expects Angular to inject the HeroService into a private heroService property
- The ```ngOnInit()``` lifecycle hook calls getHeroes

This getHeroes returns the sliced list of heroes at positions 1 and 5, returning only four of the Top Heroes (2nd, 3rd, 4th, and 5th).

### Adding the dashboard Route

We can add a route to the Dashboard component by adding the following code to out __AppRoutingModule:__

First we need to import the component:

```Typescript
import { DashboardComponent }   from './dashboard/dashboard.component';
```

Then we need to add the route to the Routes Array.

```Typescript
{ path: 'dashboard', component: DashboardComponent }
```

### Adding a default route

When the app starts, the browsers address bar points to the web site's root. If that doesn't match any existing route the router will navigate nowhere.

To make the app navigate to the dashboard automatically, we need to add the following route to the AppRoutingModule.Routes array:

```Typescript
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
```

This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.

After the browser refreshes, the router loads the DashboardComponent and the browser address bar shows the /dashboard URL.

### Adding more navigation options

A URL like ~/detail/11 would be a good URL for navigating to the Hero Detail view of the hero whose id is 11.

For that to work we need to add the following code to app-routing.module:

```Typescript
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

// in the routes Array
{ path: 'detail/:id', component: HeroDetailComponent },
```

The colon (:) in the path indicates that :id is a placeholder for a specific hero id.

### Routable components

Previously, the parent HeroesComponent set the HeroDetailComponent.hero property and the HeroDetailComponent displayed the hero.

HeroesComponent doesn't do that anymore. Now the router creates the HeroDetailComponent in response to a URL such as ~/detail/11.

The HeroDetailComponent needs a new way to obtain the hero-to-display, for that to work we need to add the following imports:

```Typescript
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
```

We inject the ActivatedRoute, HeroService, and Location services into the constructor, saving their values in private fields:

```Typescript
constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}
```

The [ActivatedRoute](https://angular.io/api/router/ActivatedRoute) holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's bag of parameters extracted from the URL. The "id" parameter is the id of the hero to display.

The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.

The [location](https://angular.io/api/common/Location) is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.

#### Extracting a parameter

We can extract a parameter from our url by modifying our ```getHero()``` merhod in the heroDetails component:

```Typescript
ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}
```

- The route.snapshot is a static image of the route information shortly after the component was created.
- The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
- __Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.__

### Adding HeroService.getHero()

For the app to work we need to implement the ```getHero()``` method in the HeroService like this:

```Typescript
getHero(id: number): Observable<Hero> {
  // TODO: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}
```

Like ```getHeroes()```, ```getHero()``` has an asynchronous signature. It returns a mock hero as an Observable, using the RxJS ```of()``` function.

Note: the backticks (`) define a JavaScript [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for embedding the id.

### Adding a route to the last visited component

It is often nice to have a way to get back to the last visited component, this behaviour can be easily achieved by using this code:

```Typescript
goBack(): void {
  this.location.back();
}
```

we can call this method for instance trough a button like this:

```HTML
<button (click)="goBack()">go back</button>
```

The ```goBack()``` method navigates backward one step in the browser's history stack using the Location service that has to be injected into the component that uses this functionality.

Note: The import for this was ```import { Location } from '@angular/common';```

## HTTP

In this tutorial, we'll add the following data persistence features with help from Angular's HttpClient.

- The HeroService gets hero data with HTTP requests
- Users can add, edit, and delete heroes and save these changes over HTTP
- Users can search for heroes by name

### Enabling HTTP services

HttpClient is Angular's mechanism for communicating with a remote server over HTTP.

To make HttpClient available everywhere in the app:

- open the root AppModule
- import the HttpClientModule symbol from @angular/common/http
- add it to the @NgModule.imports array

### Simulating a data server

We can use the [In-memory Web API](https://github.com/angular/in-memory-web-api) provided by Angular to simulate a remote server.

After installing the module, the app will make requests to and receive responses from the HttpClient without knowing that the In-memory Web API is intercepting those requests, applying them to an in-memory data store, and returning simulated responses.

#### Installing the In-memory Web API package

We can install the required package by executing:

```CLI
npm install angular-in-memory-web-api --save
```

We add the following imports to app.module:

```Typescript
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// in the imports array //
HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
// in the imports array //
```

The ```forRoot()``` configuration method takes an InMemoryDataService class that primes the in-memory database.

Now we generate the class src/app/in-memory-data.service.ts by executing the following command:

```CLI
ng generate service InMemoryData
```

This service replaces mock-heores.ts which was previously used for the mock-data.

When we have a server ready, we can detach the In-memory Web API, and the app's requests will go through to the server.

### HTTP Requests

We modify the current ```getHeroes()``` (in hero.service.ts):

```Typescript
getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}
```

with the following:

```Typescript
/** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
}
```

We swapped of for http.get and the app keeps working without any other changes because both functions return an Observable<Hero[]>.

### HTTP return value

All HttpClient methods return an __RxJS Observable__ of something

- HTTP is a request/response protocol. You make a request, it returns a single response
- In general, an observable can return multiple values over time
- An observable from HttpClient always emits a single value and then completes, never to emit again

This particular HttpClient.get call returns an Observable<Hero[]>, literally "an observable of hero arrays". In practice, it will only return a single hero array.

HttpClient.get returns the body of the response as an untyped JSON object by default. Applying the optional type specifier, <Hero[]> , gives you a typed result object.

The shape of the JSON data is determined by the server's data API. The Tour of Heroes data API returns the hero data as an array.

Note: Other APIs may bury the data that you want within an object. You might have to dig that data out by processing the Observable result with the RxJS map operator.
Although not discussed here, there's an example of map in the ```getHeroNo404()``` method included in the sample source code.

### Error handling

Things go wrong, especially when you're getting data from a remote server. __The HeroService.getHeroes() method should catch errors and do something appropriate.__

To catch errors, you "pipe" the observable result from ```http.get()``` through an RxJS ```catchError()``` operator.

To do this we first import the catchError symbol from rxjs/operators, along with some other operators you'll need later:

```Typescript
import { catchError, map, tap } from 'rxjs/operators';
```

Now extend the observable result with the ```.pipe()``` method and give it a ```catchError()``` operator:

```Typescript
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}
```

The ```catchError()``` operator intercepts an Observable that failed. It passes the error an error handler that can do what it wants with the error.

The following ```handleError()``` method reports the error and then returns an innocuous result so that the application keeps working.

#### handleError method

The following ```handleError()``` will be shared by many HeroService methods so it's generalized to meet their different needs.

__Instead of handling the error directly, it returns an error handler function to catchError__ that it has configured with both the name of the operation that failed and a safe return value.

```Typescript
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
```

After reporting the error to console, the handler constructs a user friendly message and returns a safe value to the app so it can keep working.

__Because each service method returns a different kind of Observable result, ```handleError()``` takes a type parameter so it can return the safe value as the type that the app expects.__

### Tapping into Observable

The HeroService methods will __tap__ into the flow of observable values and send a message (via ```log()```) to the message area at the bottom of the page.

They'll do that with the RxJS tap operator, which looks at the observable values, does something with those values, and passes them along. __The tap call back doesn't touch the values themselves.__

Here is the final version of getHeroes with the tap that logs the operation:

```Typescript
/** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}
```

### Get hero by id

Most web APIs support a get by id request in the form :baseURL/:id.

Here, the base URL is the heroesURL (api/heroes) and id is the number of the hero that you want to retrieve. For example, api/heroes/11.

In hero.Service we replace ```getHero()``` with:

```Typescript
/** GET hero by id. Will 404 if id not found */
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}
```

There are three significant differences from ```getHeroes()```:

- it constructs a request URL with the desired hero's id
- the server should respond with a single hero rather than an array of heroes
- therefore, getHero returns an ```Observable<Hero>``` ("an observable of Hero objects") rather than an observable of hero arrays

### Update heroes

If you edit a hero's name in the hero detail view, As you type, the hero name updates the heading at the top of the page. But when you click the "go back button", the changes are lost.

If you want changes to persist, you must write them back to the server.

Therefore at the end of the hero detail template, we add a save button with a click event binding that invokes a new component method named ```save()```:

```HTML
<button (click)="save()">save</button>
```

The ```save()``` method is implemented like this:

```Typescript
save(): void {
   this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
 }
```

The ```updateHero()``` method is defined in hero.service like this:

```Typescript
/** PUT: update the hero on the server */
updateHero (hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
```

The overall structure of the ```updateHero()``` method is similar to that of ```getHeroes()```, but it uses ```http.put()``` to persist the changed hero on the server.

The ```HttpClient.put()``` method takes three parameters:

- the URL
- the data to update (the modified hero in this case)
- options

The URL is unchanged. The heroes web API knows which hero to update by looking at the hero's id.

The heroes web API expects a special header in HTTP save requests. That header is in the httpOptions constant defined in the HeroService:

```Typescript
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
```

Now changes we make are persisted.

### Adding a new Hero

To add a hero, this app only needs the hero's name. You can use an input element paired with an add button in our heroes.component:

```HTML
<div>
  <label>Hero name:
    <input #heroName />
  </label>
  <!-- (click) passes input value to add() and then clears the input -->
  <button (click)="add(heroName.value); heroName.value=''">
    add
  </button>
</div>
```

In response to the click event we execute the following method:

```Typescript
add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
```

When the given name is non-blank, the handler creates a Hero-like object from the name (it's only missing the id) and passes it to the services ```addHero()``` method.

When addHero saves successfully, the subscribe callback receives the new hero and pushes it into to the heroes list for display.

#### HeroService.addHero()

We now need to add the ```addHero()``` method in hero.service:

```Typescript
/** POST: add a new hero to the server */
addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}
```

```HeroService.addHero()``` differs from updateHero in two ways:

- it calls ```HttpClient.post()``` instead of ```put()```
- it expects the server to generate an id for the new hero, which it returns in the ```Observable<Hero>``` to the caller

### Deleting a Hero

Each hero in the heroes list should have a delete button.

We add this functionality with the follwoing code in the HeroesComponent template file:

```HTML
<button class="delete" title="delete hero"
  (click)="delete(hero)">x</button>
```

class file:

```Typescript
delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}
```

Although the component delegates hero deletion to the HeroService, it remains responsible for updating its own list of heroes. The component's ```delete()``` method immediately removes the hero-to-delete from that list, anticipating that the HeroService will succeed on the server.

There's really nothing for the component to do with the Observable returned by ```heroService.delete()```. It must subscribe anyway.

Note: If you neglect to ```subscribe()```, the service will not send the delete request to the server! __As a rule, an Observable does nothing until something subscribes!__

#### Adding HeroService.deleteHero()

We add the ```deleteHero()``` method to hero.service like this:

```Typescript
/** DELETE: delete the hero from the server */
deleteHero (hero: Hero | number): Observable<Hero> {
  const id = typeof hero === 'number' ? hero : hero.id;
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}
```

Note that

- it calls ```HttpClient.delete()```
- the URL is the heroes resource URL plus the id of the hero to delete
- you don't send data as you did with put and post
- you still send the httpOptions

### Search by name

We can chain Observable operators together to minimize the number of similar HTTP requests and consume network bandwidth economically.

We add a heroes search feature to the Dashboard. As the user types a name into a search box, we make repeated HTTP requests for heroes filtered by that name. __Our goal is to issue only as many requests as necessary.__

#### Adding HeroService.searchHeroes

We add a method called ```searchHeroes()``` to hero.service:

```Typescript
/* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}
```

The method returns immediately with an empty array if there is no search term. The rest of it closely resembles ```getHeroes()```. The only significant difference is the URL, which includes a query string with the search term.

#### Adding the search to the dashboard

In the DashboardComponent template we add ```<app-hero-search>``` at the bottom, that we create like this:

Creating the component:

```CLI
ng generate component hero-search
```

We add the following template code:

```HTML
<div id="search-component">
  <h4>Hero Search</h4>

  <input #searchBox id="search-box" (input)="search(searchBox.value)" />

  <ul class="search-result">
    <li *ngFor="let hero of heroes$ | async" >
      <a routerLink="/detail/{{hero.id}}">
        {{hero.name}}
      </a>
    </li>
  </ul>
</div>
```

As the user types in the search box, an input event binding calls the component's ```search()``` method with the new search box value.

#### AsyncPipe

As expected, the *ngFor repeats hero objects but it iterates over a list called heroes$, not heroes.

```HTML
<li *ngFor="let hero of heroes$ | async" >
```

__The $ is a convention that indicates heroes$ is an Observable, not an array.__

The *ngFor can't do anything with an Observable. But there's also a pipe character (|) followed by async, which identifies Angular's AsyncPipe. The AsyncPipe subscribes to an Observable automatically so you won't have to do so in the component class.

We add the following code to the class file:

```Typescript
import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
```

Notice the declaration of heroes$ as an Observable:

```Typescript
heroes$: Observable<Hero[]>;
```

We'll set it in ```ngOnInit()```.

#### The searchTerms RxJS subject

The searchTerms property is declared as an RxJS Subject.

```Typescript
private searchTerms = new Subject<string>();

// Push a search term into the observable stream.
search(term: string): void {
  this.searchTerms.next(term);
}
```

A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.

You can also push values into that Observable by calling its next(value) method as the ```search()``` method does.

The ```search()``` method is called via an event binding to the textbox's input event.

```HTML
<input #searchBox id="search-box" (input)="search(searchBox.value)" />
```

Every time the user types in the textbox, the binding calls ```search()``` with the textbox value, a "search term". The searchTerms becomes an Observable emitting a steady stream of search terms.

#### Chaining RxJS operators

Passing a new search term directly to the ```searchHeroes()``` after every user keystroke would create an excessive amount of HTTP requests, taxing server resources and burning through the cellular network data plan.

Instead, the ```ngOnInit()``` method pipes the searchTerms observable through a sequence of RxJS operators that reduce the number of calls to the ```searchHeroes()```, ultimately returning an observable of timely hero search results (each a Hero[]).

Here's the code:

```Typescript
this.heroes$ = this.searchTerms.pipe(
  // wait 300ms after each keystroke before considering the term
  debounceTime(300),

  // ignore new term if same as previous term
  distinctUntilChanged(),

  // switch to new search observable each time the term changes
  switchMap((term: string) => this.heroService.searchHeroes(term)),
);
```

- ```debounceTime(300)``` waits until the flow of new string events pauses for 300 milliseconds before passing along the latest string. You'll never make requests more frequently than 300ms
- ```distinctUntilChanged()``` ensures that a request is sent only if the filter text changed
- ```switchMap()``` calls the search service for each search term that makes it through debounce and distinctUntilChanged. It cancels and discards previous search observables, returning only the latest search service observable

#### switchMap operator

With the [switchMap operator](https://www.learnrxjs.io/operators/transformation/switchmap.html), every qualifying key event can trigger an HttpClient.get() method call. __Even with a 300ms pause between requests, you could have multiple HTTP requests in flight and they may not return in the order sent.__

__switchMap() preserves the original request order while returning only the observable from the most recent HTTP method call. Results from prior calls are canceled and discarded.__

Note that canceling a previous searchHeroes() Observable doesn't actually abort a pending HTTP request. Unwanted results are simply discarded before they reach your application code.

Remember that the component class does not subscribe to the heroes$ observable. That's the job of the AsyncPipe in the template.
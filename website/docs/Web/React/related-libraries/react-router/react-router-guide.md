---
id: react-router-guide
title: React Router Guide
sidebar_position: 2
---

This Guide was originally created by [Web Dev Simplified](https://blog.webdevsimplified.com/2022-07/react-router/) and adjusted/updated by me.

## React Router Basics

### Configuring The Router

The first step in using React Router is to import the specific router you need (`BrowserRouter` for the web and `NativeRouter` for mobile). Since version 6 you pass your [data router](https://reactrouter.com/en/main/routers/picking-a-router) to the `RouterProvider` which renders your app and enables the rest of the data APIs.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // Routes go here
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### Defining Routes

The next step in React Router is to define your routes. This is generally done at the top level of your application, such as in the `App` component, but can be done anywhere you want.

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Shell />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="transactions" element={<Transactions />} />
    </Route>
  )
);
```

### Handling Navigation

The final step to React Router is handling navigation. Normally in an application you would navigate with anchor tags, but React Router uses its own custom `Link` component to handle navigation. This `Link` component is just a wrapper around an anchor tag that helps ensure all the routing and conditional re-rendering is handled properly so you can use it just like your would a normal anchor tag.

```jsx
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/books">Books</Link>
    </li>
  </ul>
</nav>
```

In our example we added two links to the home and books page. You will also notice that we used the `to` prop to set the URL instead of the `href` prop you are used to using with an anchor tag. This is the only difference between the `Link` component and an anchor tag and is something that you need to remember as it is an easy mistake to accidentally use an `href` prop instead of the `to` prop.

## Advanced Route Definitions

There is a lot of cool stuff you can do with routing to make more complex routes, easier to read, and overall much more functional. This can be done through five main techniques:

- Dynamic Routing
- Routing Priority
- Nested Routes

### Dynamic Routing

The simplest and most common advanced feature in React Router is handling dynamic routes. In our example, let's assume that we want to render out a component for individual books in our application. We could hardcode each of those routes, but if we have hundreds of books or the ability for users to create books then it is impossible to hardcode all these routes. Instead we need a dynamic route.

```jsx {3}
<Route path="/" element={<Home />} />
<Route path="/books" element={<BookList />} />
<Route path="/books/:id" element={<Book />} />
```

The final route in the above example is a dynamic route that has a dynamic parameter of `:id`. Defining dynamic routes in React Router is as simple as putting a colon in front of whatever you want the dynamic part of your route to be. In our case our dynamic route will match any URL that starts with `/book` and ends with some value. For example, `/books/1`, `/books/bookName`, and `/books/literally-anything` will all match our dynamic route.

Pretty much always when you have a dynamic route like this you want to access the dynamic value in your custom component which is where the `useParams` hook comes in.

```jsx
import { useParams } from "react-router-dom";

export function Book() {
  const { id } = useParams();

  return <h1>Book {id}</h1>;
}
```

The `useParams` hook takes no parameters and will return an object with keys that match the dynamic parameters in your route. In our case our dynamic parameter is `:id` so the `useParams` hook will return an object that has a key of `id` and the value of that key will be the actual id in our URL. For example, if our URL was `/books/3` our page would render Book 3.

### Routing Priority

When we were just dealing with hard coded routes it was pretty easy to know which route would be rendered, but when dealing with dynamic routes it can be a bit more complicated. Take these routes for example.

```jsx {4}
<Route path="/" element={<Home />} />
<Route path="/books" element={<BookList />} />
<Route path="/books/:id" element={<Book />} />
<Route path="/books/new" element={<NewBook />} />
```

If we have the URL `/books/new` which route would this match? Technically, we have two routes that match. Both `/books/:id` and `/books/new` will match since the dynamic route will just assume that `new` is the `:id` portion of the URL so React Router needs another way to determine which route to render.

In older versions of React Router whichever route was defined first would be the one that is rendered so in our case the `/books/:id` route would be rendered which is obviously not what we want. Luckily, version 6 of React Router changed this so now React Router will use an algorithm to determine which route is most likely the one you want. In our case we obviously want to render the `/books/new` route so React Router will select that route for us. The actual way this algorithm works is very similar to CSS specificity since it will try to determine which route that matches our URL is the most specific (has the least amount of dynamic elements) and it will select that route.

While we are on the topic of routing priority I also want to talk about how to create a route that matches anything.

```jsx {5}
<Route path="/" element={<Home />} />
<Route path="/books" element={<BookList />} />
<Route path="/books/:id" element={<Book />} />
<Route path="/books/new" element={<NewBook />} />
<Route path="*" element={<NotFound />} />
```

A `*` will match anything at all which makes it perfect for things like a 404 page. A route that contains a `*` will also be less specific than anything else so you will never accidentally match a `*` route when another route would have also matched.

### Nested Routes

In the above example we have three routes that start with `/books` so we can nest those routes inside of each other to clean up our routes:

```jsx
<Route path="/" element={<Home />} />
<Route path="/books">
  <Route index element={<BookList />} />
  <Route path=":id" element={<Book />} />
  <Route path="new" element={<NewBook />} />
</Route>
<Route path="*" element={<NotFound />} />
```

This nesting is pretty simple to do. All you need to do is make a parent `Route` that has the `path` prop set to the shared path for all your child `Route` components. Then inside the parent `Route` you can put all the child `Route` components. The only difference is that the `path` prop of the child `Route` components no longer includes the shared `/books` route. Also, the route for `/books` is replaced with a `Route` component that has no `path` prop, but instead has an `index` prop. All this is saying is that the path of the index `Route` is the same as the parent `Route`.

Now if this is all you could do with nested routes it would be only marginally useful, but the true power of nested routes comes in how it handles shared layouts.

#### Shared Layouts

Let's imagine that we want to render a nav section with links to each book as well the new book form from any of our book pages. To do this normally we would need to make a shared component to store this navigation and then import that into every single book related component. This is a bit of a pain, though, so React Router created its own solution to solve this problem. If you pass an element prop to a parent route it will render that component for every single child Route which means you can put a shared nav or other shared components on every child page with ease.

```jsx title=Routes {2}
<Route path="/" element={<Home />} />
<Route path="/books" element={<BooksLayout />}>
  <Route index element={<BookList />} />
  <Route path=":id" element={<Book />} />
  <Route path="new" element={<NewBook />} />
</Route>
<Route path="*" element={<NotFound />} />
```

```jsx title=BooksLayout.jsx
import { Link, Outlet } from "react-router-dom";

export function BooksLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books/1">Book 1</Link>
          </li>
          <li>
            <Link to="/books/2">Book 2</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
```

The way our new code will work is whenever we match a route inside the `/books` parent `Route` it will render the `BooksLayout` component which contains our shared navigation. Then whichever child `Route` is matched will be rendered wherever the `Outlet` component is placed inside our layout component. The `Outlet` component is essentially a placeholder component that will render whatever our current page's content is. This structure is incredibly useful and makes sharing code between routes incredibly easy.

Now the final way you can share layouts with React Router is by wrapping child `Route` components in a parent `Route` that only defines an `element` prop and no `path` prop.

```jsx {7-10}
<Route path="/" element={<Home />} />
<Route path="/books" element={<BooksLayout />}>
  <Route index element={<BookList />} />
  <Route path=":id" element={<Book />} />
  <Route path="new" element={<NewBook />} />
</Route>
<Route element={<OtherLayout />}>
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
</Route>
<Route path="*" element={<NotFound />} />
```

This bit of code will create two routes, `/contact` and `/about`, which both are rendered inside the `OtherLayout` component. This technique of wrapping multiple `Route` components in a parent `Route` component with no `path` prop is useful if you want those routes to share a single layout even if they don't have a similar path.

#### Outlet Context

The final important thing to know about `Outlet` components is they can take in a `context` prop which will work just like React context.

```jsx {20}
import { Link, Outlet } from "react-router-dom";

export function BooksLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/books/1">Book 1</Link>
          </li>
          <li>
            <Link to="/books/2">Book 2</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
        </ul>
      </nav>

      <Outlet context={{ hello: "world" }} />
    </>
  );
}
```

```jsx {1,5,9}
import { useParams, useOutletContext } from "react-router-dom";

export function Book() {
  const { id } = useParams();
  const context = useOutletContext();

  return (
    <h1>
      Book {id} {context.hello}
    </h1>
  );
}
```

As you can see from this example, we are passing down a context value of `{ hello: "world" }` and then in our child component we are using the `useOutletContext` hook to access the value for our context. This is a pretty common pattern to use since often you will have shared data between all your child components which is the ideal use case for this context.

## Handling Navigation

Now that we know how to define our routes we need to talk about how to navigate between those routes. This section will be broken down into three sections:

1. Link Navigation
2. Manual Navigation
3. Navigation Data

### Link Navigation

Link Navigation is the simplest and most common form of navigation you will encounter. We have already seen the most basic form of link navigation using the `Link` component:

```jsx
<Link to="/">Home</Link>
<Link to="/books">Books</Link>
```

These `Link` components can get a bit more complex, though. For example you can have absolute links like the above links or you can have links that are relative to the current component being rendered:

```jsx
<Link to="/">Home</Link>
<Link to="../">Back</Link>
<Link to="edit">Edit</Link>
```

For example imagine we are in the `/books/3` route with the above links. The first link will lead to the `/` route since it is an absolute route. Any route that starts with a `/` is an absolute route. The second link will lead to the route `/books` since it is a relative link that goes up one level from `/books/3` to `/books`. Finally, our third link will go to the `/books/3/edit` page since it will add the path in the `to` prop to the end of the current link since it is a relative link.

Besides the `to` prop, there are also 3 other props that are important to the `Link` component.

#### `replace`

The `replace` prop is a boolean that when set to `true` will cause this link to replace the current page in the browser history. Imagine you have the following browser history:

```txt
/
/books
/books/3
```

If you click on a link that goes to the `/books/3/edit` page but it has the `replace` property set to `true` your new history will look like this:

```txt
/
/books
/books/3/edit
```

The page your were currently on was replaced with the new page. This means that if you click the back button on the new page it will bring you back to the `/books` page instead of the `/books/3` page.

#### `reloadDocument`

This prop is another boolean and is very simple. If it is set to `true` your `Link` component will act like a normal anchor tag and do a full page refresh on navigation instead of just re-rendering the content inside your `Routes` component.

#### `state`

The final prop is called `state`. This prop lets you pass data along with your `Link` that does not show up anywhere in the URL. This is something we will cover in more depth when we talk about navigation data so we can ignore it for now.

#### `NavLink`

The `NavLink` component works exactly the same as the `Link` component, but it is specifically for showing active states on links, for example in nav bars. By default if the `to` property of a `NavLink` is the same as the URL of the current page the link will have an `active` class added to it which you can use for styling. If this is not enough you can instead pass a function with an `isActive` parameter to the `className`, or `style` props, or as the children of the `NavLink`.

```jsx
<NavLink
  to="/"
  style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
>
  Home
</NavLink>
```

The NavLink also has one prop called `end` which is used to help with nested routing. The `end` prop changes the matching logic for the `active` and `pending` states to only match to the "end" of the `NavLink`'s `to` path. If the URL is longer than `to`, it will no longer be considered active.

Without the end prop, this link is always active because every URL matches `/`:

```jsx
<NavLink to="/">Home</NavLink>
```

To match the URL "to the end" of `to`, use `end`:

```jsx
<NavLink to="/" end>
  Home
</NavLink>
```

Now this link will only be active at `/`. This works for paths with more segments as well:

| Link                          | URL          | isActive |
| ----------------------------- | ------------ | -------- |
| `<NavLink to="/tasks" />`     | `/tasks`     | `true`   |
| `<NavLink to="/tasks" />`     | `/tasks/123` | `true`   |
| `<NavLink to="/tasks" end />` | `/tasks`     | `true`   |
| `<NavLink to="/tasks" end />` | `/tasks/123` | `false`  |

### Manual Navigation

Now sometimes you want to manually navigate a user based on things like submitting a form or not having access to a specific page. For those use cases you will need to either use the `Navigate` component or the `useNavigation` hook.

#### `Navigate` Component

A `<Navigate>` element changes the current location when it is rendered. It's a component wrapper around `useNavigate`, and accepts all the same arguments as props.

```jsx
<Navigate to="/" />
```

#### `useNavigation` Hook

The `useNavigation` hook on the other hand is a hook I use all the time. This hook is a really simple hook that takes no parameters and returns a single `navigate` function which you can use to redirect a user to specific pages. This `navigate` function takes two parameters. The first parameter is the `to` location you want to redirect the user to and the second parameter is an object that can have keys for `replace`, and `state`.

```jsx
const navigate = useNavigate();

function onSubmit() {
  // Submit form results
  navigate("/books", { replace: true, state: { bookName: "Fake Title" } });
}
```

The above code will redirect the user to the `/books` route. It will also replace the current route in history and pass along some state information as well. Another way you can use the `navigate` function is to pass it a number. This will allow you to simulate hitting the forward/back button.

```jsx
navigate(-1); // Go back one page in history
navigate(-3); // Go back three pages in history
navigate(1); // Go forward one page in history
```

:::caution Note
It's usually better to use `redirect` in loaders and actions than this hook.
:::

### Navigation Data

Finally it is time to talk about passing data between pages. There are 3 main ways you can pass data between pages:

1. Dynamic Parameters
2. Search Parameters
3. State/Location Data

#### Dynamic Parameters

We have already talked about how to use dynamic parameters in URLs by using the `useParams` hook. This is the best way to handle passing information like ids between.

#### Search Parameters

Search parameters are all of the parameters that come after the `?` in a URL (`?name=Kyle&age=27`). In order to work with search parameters you need to use the `useSearchParams` hook which works very similarly to the `useState` hook.

```jsx
import { useSearchParams } from "react-router-dom";

export function SearchExample() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");

  return (
    <>
      <h1>{number}</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}
```

In this example we have an input that as we type in will update the search portion of our URL. For example if our input has the value of 32 our URL will look like `http://localhost:3000?n=32`. The `useSearchParams` hook takes an initial value just like `useState` and in our case our initial value has `n` set to 3. This hook then returns two values. The first value is all our our search parameters and the second value is a function for updating our search parameters. The set function just takes a single argument that is the new value of your search parameters. The first value that contains the search parameters is a bit more confusing, though. This is because this value is of the type `URLSearchParams`. That is why we need to use the `.get` syntax on line 5 above.

#### State/Location Data

The final type of data you can store is state and location data. This information is all accessible via the `useLocation` hook. Using this hook is very simple as it returns one value and takes no parameters.

```jsx
const location = useLocation();
```

If we have the following URL `http://localhost/books?n=32#id` then the return value of `useLocation` would look like this:

```js
{
  pathname: "/books",
  search: "?n=32",
  hash: "#id",
  key: "2JH3G3S",
  state: null
}
```

This location object contains all the information related to our URL. It also contains a unique key that you can use to do caching if you want to cache information for when a user clicks the back button to come back to a page. You also will notice that we have a state property being returned from `useLocation` as well. This state data can be anything and is passed between pages without being stored in the URL. For example if you click on a `Link` that looks like this:

```jsx
<Link to="/books" state={{ name: "Kyle" }}>
```

then the state value in the location object will be set to `{ name: "Kyle" }`. This can be really useful if for example you wan to send across simple messages between pages that shouldn't be stored in the URL. A good example of this would be something like a success message that gets sent to the page you are redirected to after creating a new book.

## Routers In Depth

In the first section of the basics we talked about defining your router and we mentioned the `BrowserRouter` and `NativeRouter`, but those are not the only routers. There are actually 6 routers in total.

### `BrowserRouter`

This is the default router you should use if you are working on a web app and is the router you will use in 99% of all your applications since it covers all the normally routing use cases you have. Each of the other routers I will talk about have very specific use cases where you would want to use them so if you don't fit those use cases then the `BrowserRouter` is what you should use.

### `NativeRouter`

The `NativeRouter` is essentially the equivalent of the `BrowserRouter`, but for React Native. If you are using React Native then this is the router you will want to use.

### `HashRouter`

This router works very similarly to the `BrowserRouter`, but the main difference is that instead of changing the URL to something like `http://localhost:3000/books` it will store the URL in the hash like so `http://localhost:3000/#/books`. As you can see this URL has a `#` after the URL which represents the hash portion of the URL. Anything in the hash portion of the URL is just additional information that usually denotes an id on the page for scrolling purposes since a page will automatically scroll to the element with the id represented by the hash when the page loads.

In React Router this hash is not actually used to store id information for scrolling, but instead it stores information related to the current URL. The reason React Router does this is because some hosting providers do not allow you to actually change the URL of your page. In those very rare circumstances you will want to use the `HashRouter` since the `HashRouter` will not change the actual URL of your page and will only change the hash of your page. If you are able to use any URL with your hosting provider then this is not something you should use.

### `MemoryRouter`

The `MemoryRouter` is a bit different than the rest of the routers we talked about since, instead of storing information about the current route in the URL of the browser, this router stores information on routing directly in memory. Obviously, this is a very bad router to use for normal routing operations, but this router is incredibly useful when you are writing tests for your application that do not have access to the browser.

Because of how React Router works, you need to have your components wrapped in a router otherwise all your routing code will throw errors and break. This means even if you want to test a single component, you will need to wrap that component inside of a router or it will throw errors. If you are testing your code in a way that it does not have access to the browser (such as unit testing) then the routers we have talked about so far will throw errors since they all depend on the browser for the URL. The `MemoryRouter` on the other hand stores all its information in memory which means it never accesses the browser and is ideal when trying to unit test components. Other than this specific use case, though, this router is never to be used.

### `StaticRouter`

The final router is the `StaticRouter` and this router again has a very specific use case. This router is specifically meant for server rendering your React applications since it takes in a single `location` prop and renders out your application using that `location` prop as the URL. This router cannot actually do any routing and will just render a single static page, but that is perfect for server rendering since you want to just render the HTML of your application on the server and then the client can set up all your routing and so on.

```jsx
<StaticRouter location="/books">
  <App />
</StaticRouter>
```

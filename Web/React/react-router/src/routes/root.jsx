import { useEffect, useState } from "react";
import {
  Outlet,
  NavLink,
  useLoaderData,
  useNavigation,
  useSubmit,
  Form,
  redirect,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";

// Gets the data to be displayed in the contacts (all contacts)
export async function loader({ request }) {
  const url = new URL(request.url);
  let q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

// We'll create new contacts by exporting an "action" in our root route
export async function action() {
  const contact = await createContact();
  // return { contact };
  // redirect to the edit page upon clicking the "new" button
  return redirect(`/contacts/${contact.id}/edit`);
}

// <Form> prevents the browser from sending the request to the server and sends it to your route action instead
// On submit all of your "useLoaderData" hooks update and the UI stays in sync with your data automatically
export default function Root() {
  // This hook provides the value returned from your route loader.
  const { contacts, q } = useLoaderData();

  // This hook tells you everything you need to know about a page navigation to build pending navigation
  // indicators and optimistic UI on data mutations. useNavigation returns the current navigation state:
  // it can be one of "idle" | "submitting" | "loading".
  const navigation = useNavigation();

  // Used to submit the form automatically when someone types in the search input
  const submit = useSubmit();

  // This hook is used to update the value of the search input when the user navigates back through the browser
  // (The search input gets emptied)
  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  // Without any loading indicator, the search feels kinda sluggish. Even if we could make our
  // database faster, we'll always have the user's network latency in the way and out of our
  // control.For a better UX, let's add some immediate UI feedback for the search.
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  // Because the "Form" below is a GET, not a POST, React Router does not call the action.
  // Submitting a GET form is the same as clicking a link: only the URL changes. That's why
  // the code we added for filtering is in the loader, not the action of this route.
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                // only replace history if not the first search
                const isFirstSearch = q == null;
                // The currentTarget is the DOM node the event is attached to, and the
                // currentTarget.form is the input's parent form node.
                // The submit function will serialize and submit any form you pass to it.
                submit(event.currentTarget.form, {
                  // The replace option tells React Router to replace the current history entry
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );

  // The className prop works like a normal className, but you can also pass it a function to customize the classNames
  // applied based on the active and pending state of the link.By default, an active classis added to a <NavLink>
  // component when it is active so you can use CSS to style it.This allows us to easily indicate where the user is,
  // as well as provide immediate feedback on links that have been clicked but we're still waiting for data to load.
  // <NavLink
  // to={`contacts/${contact.id}`}
  // className={({ isActive, isPending }) =>
  // isActive ? "active" : isPending ? "pending" : ""
  // }
  // ></NavLink>
}

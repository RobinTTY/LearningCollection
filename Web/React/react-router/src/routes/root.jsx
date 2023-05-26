import {
  Outlet,
  NavLink,
  useLoaderData,
  useNavigation,
  Form,
  redirect,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";

// Gets the data to be displayed in the contacts (all contacts)
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
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
  const { contacts } = useLoaderData();
  // This hook tells you everything you need to know about a page navigation to build pending navigation
  // indicators and optimistic UI on data mutations. useNavigation returns the current navigation state:
  // it can be one of "idle" | "submitting" | "loading".
  const navigation = useNavigation();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
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

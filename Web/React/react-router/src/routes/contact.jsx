import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getContact, updateContact } from "../contacts";

// Loader for a single contact
export async function loader({ params }) {
  const contact = await getContact(params.contactId);

  // Whenever you have an expected error case in a loader or action–like the data not existing–you can throw.
  // The call stack will break, React Router will catch it, and the error path is rendered instead.
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}

// Accepts the form data and updates the contact
export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default function Contact() {
  const { contact } = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

// Note above in the Form the action points to "destroy"
// Like <Link to>, <Form action> can take a relative value.
// Since the form is rendered in contact/:contactId, then a relative action with
// destroy will submit the form to contact/:contactId/destroy when clicked

// In detail:
// 1. <Form> prevents the default browser behavior of sending a new POST request to the server,
// but instead emulates the browser by creating a POST request with client side routing
// 2. The <Form action="destroy"> matches the new route at "contacts/:contactId/destroy"
// and sends it the request
// 3. After the action redirects, React Router calls all of the loaders for the data on the
// page to get the latest values(this is "revalidation").useLoaderData returns new values and
// causes the components to update!

// If we don't want to create entries in the browsers history stack we use the useFetcher hook
// It allows us to communicate with loaders and actions without causing a navigation.
// The form below will send formData with a favorite key that's either "true" | "false"
// Since it's got method="post" it will call the action. Since there is no
// <fetcher.Form action="..."> prop, it will post to the route where the form is rendered.
function Favorite({ contact }) {
  const fetcher = useFetcher();
  let favorite = contact.favorite;
  // Instead of always rendering the actual data, we check if the fetcher has any formData
  // being submitted, if so, we'll use that instead.  When the action is done, the
  // fetcher.formData will no longer exist and we're back to using the actual data
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}

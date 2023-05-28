import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";
import { updateContact } from "../contacts";

// Updates a record
// On submit the browser will create "FormData" and set it as the body of the request
// which it sends to the server => React Router prevents that and sends the request to
// your action instead, including the "FormData".
// https://developer.mozilla.org/en-US/docs/Web/API/FormData
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);

  // Loaders and actions can both return a Response (makes sense, since they received a Request!).
  // The redirect helper just makes it easier to return a response that tells the app to change locations.
  return redirect(`/contacts/${params.contactId}`);
}

// Each field in the form is accessible with formData.get(name). For example, given the
// input field from above, you could access the first and last names like this:
// export async function action({ request, params }) {
//   const formData = await request.formData();
//   const firstName = formData.get("first");
//   const lastName = formData.get("last");
//   ...
// }

// Since we have a handful of form fields, we used Object.fromEntries to collect them
// all into an object, which is exactly what our updateContact function wants.
// Aside from action, none of these APIs we're discussing are provided by React Router:
// request, request.formData, Object.fromEntries are all provided by the web platform.

export default function EditContact() {
  const { contact } = useLoaderData();
   const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>
    </Form>
  );
}

// A <button type="button">, while seemingly redundant, is the HTML way of preventing
// a button from submitting its form.This way we don't need a event.preventDefault

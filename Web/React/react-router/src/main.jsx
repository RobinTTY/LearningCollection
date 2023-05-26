import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loads contact data for this route
    loader: rootLoader,
    // Route actions are the "writes" to route loader "reads"
    // Provide a way for apps to perform data mutations
    // allows creating new contacts
    action: rootAction,
    children: [
      {
        // The colon (:) has special meaning, turning it into a "dynamic segment"
        // Dynamic segments will match dynamic (changing) values in that position of the URL
        // These params are passed to the loader with keys that match the dynamic segment
        // For example, our segment is named :contactId so the value will be passed as params.contactId.
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        // There is no reason to attempt to share loaders among routes, they usually have their own. (only for demo)
        loader: contactLoader,
        // The form will post to the action and the data will be automatically revalidated
        action: editAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

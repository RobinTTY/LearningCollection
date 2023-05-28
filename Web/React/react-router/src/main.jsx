import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import Index from "./routes/index";
import { action as destroyAction } from "./routes/destroy";

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
        // pathless route so we can catch all errors in the outlet
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            // The colon (:) has special meaning, turning it into a "dynamic segment"
            // Dynamic segments will match dynamic (changing) values in that position of the URL
            // These params are passed to the loader with keys that match the dynamic segment
            // For example, our segment is named :contactId so the value will be passed as params.contactId.
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            // There is no reason to attempt to share loaders among routes, they usually have their own. (only for demo)
            loader: contactLoader,
            // The form will post to the action and the data will be automatically revalidated
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Routes can also be configured via JSX
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       path="/"
//       element={<Root />}
//       loader={rootLoader}
//       action={rootAction}
//       errorElement={<ErrorPage />}
//     >
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Index />} />
//         <Route
//           path="contacts/:contactId"
//           element={<Contact />}
//           loader={contactLoader}
//           action={contactAction}
//         />
//         <Route
//           path="contacts/:contactId/edit"
//           element={<EditContact />}
//           loader={contactLoader}
//           action={editAction}
//         />
//         <Route path="contacts/:contactId/destroy" action={destroyAction} />
//       </Route>
//     </Route>
//   )
// );

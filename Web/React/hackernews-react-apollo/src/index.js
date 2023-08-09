import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { AUTH_TOKEN } from "./constants";
import { split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import App from "./components/App";
import "./styles/index.css";

// 1. Necessary dependencies
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// 2. The GraphQL server endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

// This middleware will be invoked every time ApolloClient
// sends a request to the server. Apollo Links allow us to
// create middlewares that modify requests before they are
// sent to the server
const authLink = setContext((_, { headers }) => {
  // Get token from the local storage
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Represents the Websocket connection for subscriptions
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      // uses authentication
      authToken: localStorage.getItem(AUTH_TOKEN),
    },
  },
});

// split is used to “route” a request to a specific middleware link. It takes
// three arguments, the first one is a test function which returns a boolean.
// The remaining two arguments are again of type ApolloLink. If test returns
// true, the request will be forwarded to the link passed as the second
// argument.If false, to the third one.
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    // In our case, the test function is checking whether the requested operation is a subscription
    // If it is, it will be forwarded to the wsLink, otherwise (if it’s a query or mutation), the
    // authLink.concat(httpLink) will take care of it
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  authLink.concat(httpLink)
);

// 3. Instantiate ApolloClient
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// 4. Render the root component wrapped in ApolloProvider
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

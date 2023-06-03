import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";

// 1 Necessary dependencies
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// 2 The GraphQL server endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

// 3 Instantiate ApolloClient
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// 4 Render the root component wrapped in ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

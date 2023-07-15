import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from './constants';
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
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

// 3. Instantiate ApolloClient
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// 4. Render the root component wrapped in ApolloProvider
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

---
id: intro
title: Introduction
sidebar_position: 1
---

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. GraphQL was developed and open-sourced by Facebook.

## High level overview

- A GraphQL server exposes a single endpoint and responds to queries
- GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API
- GraphQL is agnostic to the database or storage engine used by the server

## Why GraphQL?

- **Smaller payloads:** In GraphQL, you specify the exact types and fields that you need; and if you don’t need much, that introduces the potential to make your API requests smaller.
- **No more versioning:** GraphQL only returns the data that's explicitly requested, so new capabilities can be added via new types and new fields on those types without creating a breaking change.
- **Strictly-typed interfaces:** GraphQL uses a strictly-typed schema. By design, the schema defines the resources available for retrieval in addition to the accepted parameters when fetching that data.
- **Better client performance:** GraphQL also introduces the ability to minimize round trips to the server. In a RESTful world, clients request a resource from the server, get the ID for it, then use that ID to fetch another resource (a waterfall-like series of requests to get related data). GraphQL lets you get all the data you need in a single request; no need for follow-up requests.
- **Easier documentation:** GraphQL is already strictly-typed and declarative, so that’s an immediate improvement. But for what cannot be said declaratively through types and fields alone, we can also document the GraphQL schema. It looks like code comments and leads to being outwardly accessible.
- **Insightful Analytics:** GraphQL allows you to have fine-grained insights about the data that’s requested on the backend. As each client specifies exactly what information it’s interested in, it is possible to gain a deep understanding of how the available data is being used. With GraphQL, you can also do low-level performance monitoring of the requests that are processed by your server. GraphQL uses the concept of resolver functions to collect the data that’s requested by a client. Instrumenting and measuring performance of these resolvers provides crucial insights about bottlenecks in your system.

## Data Fetching with REST vs GraphQL

To illustrate the major differences between REST and GraphQL when it comes to fetching data from an API, let’s consider a simple example scenario: In a blogging application, an app needs to display the titles of the posts of a specific user. The same screen also displays the names of the last 3 followers of that user. How would that situation be solved with REST and GraphQL?

### REST

With a REST API, you would typically gather the data by accessing multiple endpoints. In the example, these could be `/users/<id>` endpoint to fetch the initial user data. Secondly, there’s likely to be a `/users/<id>/posts` endpoint that returns all the posts for a user. The third endpoint will then be the `/users/<id>/followers` that returns a list of followers per user.

![rest](/img/docs/apis/graphql/rest.png)

### GraphQL

In GraphQL on the other hand, you’d simply send a single query to the GraphQL server that includes the concrete data requirements. The server then responds with a JSON object where these requirements are fulfilled.

![graphql](/img/docs/apis/graphql/graphql.png)

---
id: subscriptions
title: Subscriptions
sidebar_position: 4
---

GraphQL subscriptions provide real-time functionality to applications by allowing clients to subscribe to specific events. When these events trigger, the server immediately sends updates to the subscribed clients.

## Usage

Subscribing to an event is like writing a standard query. The only difference is the operation keyword and that we are only allowed to have one root field. A subscription type can be defined like the following:

```csharp
public class Subscription
{
    [Subscribe]
    public Book BookAdded([EventMessage] Book book) => book;
}

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services
            .AddGraphQLServer()
            .AddSubscriptionType<Subscription>();
    }

    // Omitted code for brevity
}
```

:::warning
Only one subscription type can be registered using `AddSubscriptionType()`. If we want to split up our subscription type into multiple classes, we can do so using [type extensions](https://chillicream.com/docs/hotchocolate/v13/defining-a-schema/extending-types).
:::

### Setup

After defining the subscription type, we need to add the WebSockets middleware to our request pipeline:

```csharp
public class Startup
{
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.UseRouting();

        app.UseWebSockets();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapGraphQL();
        });
    }

    // Omitted code for brevity
}
```

To make pub/sub work, we also have to register a subscription provider. A subscription provider represents a pub/sub implementation used to handle events. Out of the box two subscription providers are supported.

#### In-Memory Provider

The In-Memory subscription provider does not need any configuration and is easily setup:

```csharp
services
    .AddGraphQLServer()
    .AddInMemorySubscriptions();
```

#### Redis Provider

The Redis subscription provider enables us to run multiple instances of our Hot Chocolate GraphQL server and handle subscription events reliably. In order to use the Redis provider we have to add the `HotChocolate.Subscriptions.Redis` package. After we have added the package we can setup the Redis subscription provider:

```csharp
services
    .AddGraphQLServer()
    .AddRedisSubscriptions((sp) => ConnectionMultiplexer.Connect("host:port"));
```

### Publishing Events

To publish events and trigger subscriptions, we can use the `ITopicEventSender`. The `ITopicEventSender` is an abstraction for the registered event publishing provider. Using this abstraction allows us to seamlessly switch between subscription providers, when necessary.

Most of the time we will be publishing events for successful mutations. Therefore we can simply inject the `ITopicEventSender` into our mutations like we would with every other `Service`. Of course we can not only publish events from mutations, but everywhere we have access to the `ITopicEventSender` through the DI Container.

```csharp
public class Mutation
{
    public async Book AddBook(Book book, [Service] ITopicEventSender sender)
    {
        await sender.SendAsync(nameof(Subscription.BookAdded), book);

        // Omitted code for brevity
    }
}
```

In the example the `"BookAdded"` is the topic we want to publish to, and `book` is our payload. Even though we have used a string as the topic, we do not have to. Any other type works just fine. If we do not want to use the method name, we could use the `Topic` attribute:

```csharp
public class Subscription
{
    [Subscribe]
    [Topic("ExampleTopic")]
    public Book BookAdded([EventMessage] Book book) => book;
}

public async Book AddBook(Book book, [Service] ITopicEventSender sender)
{
    await sender.SendAsync("ExampleTopic", book);

    // Omitted code for brevity
}
```

### Dynamic Topics

You can even use the `Topic` attribute on dynamic arguments of the subscription field:

```csharp
public class Subscription
{
    [Subscribe]
    public Book BookPublished([Topic] string author, [EventMessage] Book book)
        => book;
}

public async Book PublishBook(Book book, [Service] ITopicEventSender sender)
{
    await sender.SendAsync(book.Author, book);

    // Omitted code for brevity
}
```

## Transport Mechanisms

The method of how these updates are delivered is determined by the transport mechanism. In this section, we will discuss two popular transport mechanisms: GraphQL over WebSockets and GraphQL over Server-Sent Events (SSE).

### GraphQL over WebSockets

Key features:

- Full-duplex: Both the client and server can initiate communication, allowing real-time bidirectional communication.
- Persistent connection: The connection between client and server remains open, allowing for real-time data transfer.
- Well-supported: There are several libraries available for managing WebSocket connections and GraphQL subscriptions.

WebSockets are widely supported in browsers and have been the de facto standard for real-time data transport in GraphQL. There are two popular protocols for GraphQL over WebSockets: [graphql-ws](https://github.com/enisdenjo/graphql-ws) and [subscription-transport-ws](https://github.com/apollographql/subscriptions-transport-ws). Hot Chocolate, supports both protocols.

In terms of specific protocols, **the recommendation is to use graphql-ws or graphql-sse** over the legacy subscription-transport-ws.

### GraphQL over Server-Sent Events (SSE)

Key Features:

- Efficient for one-way real-time data: The server can push updates to the client as soon as they occur.
- Built on HTTP: SSE is built on HTTP, simplifying handling and compatibility. It benefits from HTTP features such as automatic reconnection, HTTP/2 multiplexing, and headers/cookies support.
- Less Complex: SSE is less complex than WebSockets as it only allows for one-way communication.
- Better Firewall Compatibility: SSE generally encounters fewer issues with firewalls.

[graphql-sse](https://github.com/enisdenjo/graphql-sse) is a popular library for GraphQL over SSE.

### Deciding between WebSockets and SSE

Choosing between GraphQL over WebSockets and GraphQL over SSE depends on the specific needs of your application. If you need full-duplex, real-time communication, WebSockets may be the best choice. If you only need server-to-client real-time communication and want to take advantage of existing HTTP infrastructure, SSE could be a better option.

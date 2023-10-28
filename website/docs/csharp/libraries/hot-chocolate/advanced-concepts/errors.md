---
id: errors
title: Errors
sidebar_position: 2
---

There are several ways to handle errors with HotChocolate. They are passed to the query result by returning an instance of `IError` or an enumerable of `IError` in a field resolver. This can be done in two ways:

- Using the Error Builder
- Throwing an exception

## Error Builder

The Errror Builder is a fluent API that allows you to create errors:

```csharp
return ErrorBuilder.New()
    .SetMessage("This is my error.")
    .SetCode("FOO_BAR")
    .Build();
```

## Exceptions

If some other exception is thrown during the query execution, then the execution engine will create an instance of `IError` with the message Unexpected Execution Error and the actual exception assigned to the error. However, the exception details will not be serialized so by default the user will only see the error message Unexpected Execution Error.

### Error Annotation

Resolvers can be annotated with the `Error` attribute to specify which exceptions should be exposed to the user. The following example shows how to expose the `NotAuthenticatedException` and `UnknownAssetException`:

```csharp {1-2}
    [Error<NotAuthenticatedException>]
    [Error<UnknownAssetException>]
    public async Task<AddAssetToWatchlistPayload> AddAssetToWatchlistAsync(
        string symbol,
        [GlobalState] string? username,
        AssetContext context,
        CancellationToken cancellationToken)
    {
      var errors = new List<IError>();

      if (username is null)
      {
        errors.Add(new NotAuthenticatedException());
      }

      if (!context.Assets.TryGetValue(symbol, out Asset? asset))
      {
        errors.Add(new UnknownAssetException(symbol));
      }

      if (errors.Count > 0)
      {
        throw new AggregateException(errors);
      }
    }
```

to query the errors, the following query can be used:

```graphql
mutation ($input: AddAssetToWatchlistInput!) {
  addAssetToWatchlist(input: $input) {
    watchlist {
      id
      name
      assets {
        nodes {
          symbol
        }
      }
    }
    errors {
      code: __typename
      ... on NotAuthenticatedError {
        message
      }
      ... on UnknownAssetError {
        symbols
      }
    }
  }
}
```

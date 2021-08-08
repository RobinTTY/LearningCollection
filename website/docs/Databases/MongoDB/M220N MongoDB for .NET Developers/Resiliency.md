---
id: resiliency
title: Resiliency
---

## Connection pooling

- A way of reusing database connections
- Creating a connection to the database requires time and computing resources
- Connection Pooling helps reduce the overhead of creating database connections
- By default the driver will create a pool of 100 connections to share
- Subsequent requests appear faster to the client

![connection pool](/img/docs/Databases/MongoDB/M220NMongoDBFor.NetDevelopers/connectionPool.PNG)

### Example

Defined in the connection string:

```txt
mongodb+srv://user:password@server.net?maxPoolSize=50
```

For more options see: [MongoDB Docs](https://docs.mongodb.com/manual/reference/connection-string/)

Defined in code:

```C#
_client = new MongoClient(new MongoClientSettings(){ MaxConnectionPoolSize = 50});
```

## Write timeouts

- We should always expect application external resources like queues, networks and databases to take more time than expected
- We can configure a write timeout to handle theses instances appropriately
- Especially when we use the WriteConcern "majority" we should always configure an appropriate timeout
- **By default**, when using Write Concern more durable than w: 1, **there is no wtimeout**, so **the server will wait indefinitely** for operations to complete

### Example

Defined in the connection string:

```txt
mongodb+srv://user:password@server.net?wtimeoutMS=2500
```

Defined in code:

```C#
_client = new MongoClient(Constants.MongoDbConnectionUriWithMaxPoolSize).WithWriteConcern(
                new WriteConcern(wTimeout: TimeSpan.FromMilliseconds(2500))) as MongoClient;
```

## ServerSelectionTimeout

- It is important to always handle the ServerSelectionTimeout
- By handling the error we can also passively monitor the health of our application stack
- E.g. if a database server goes down we can identify what happened through handling the error
- By default the driver waits 30 seconds before raising a ServerSelectionTimeout exception but this time can be changed

### Example

Defined in the connection string:

```txt
mongodb+srv://user:password@server.net?serverSelectionTimeoutMS=5000
```

Defined in code:

```C#
_client = new MongoClient(new MongoClientSettings(){ ServerSelectionTimeout = TimeSpan.FromMilliseconds(5000)});
```

## Principle of Least Privilege

> Every program and every privileged user of the system should operate using the least amount of privilege necessary to complete the job.

Jerome Saltzer, Communications of the ACM

### User management at the database level

- MongoDB offers user management at the database level
- by creating a database user specifically for the application, we can in a more granular way select the privileges and resources that mFlix should have access to
- this kind of forces us to ask the question, should the application be able to create indexes or create new collections, or should the application be able to drop an entire database?
- very important in order to prevent the application from accessing a resource that it should never need
- **If the application has permission to use an important collection that it's not programmed to ever use, than that permission exists only as a vulnerability in our application, and we should remove it**

More resources on security within MongoDB see: [MongoDB University](https://university.mongodb.com/courses/M310/about).

Course was retired to push Atlas... 🙄  
See [Documentation](https://docs.mongodb.com/manual/security/) instead.

## Summary

- Always use connection pooling
- Always specify a wtimeout with majority writes (or even a write concern more durable than "1")
- Always handle serverSelectionTimeout errors
- Always handle errors like with any C# application
- Engineer systems with the principle of least privilege in mind

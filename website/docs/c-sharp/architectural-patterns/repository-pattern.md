---
id: repository-pattern
title: Repository Pattern
sidebar_position: 1
---

The Repository pattern is a Domain-Driven Design pattern intended to keep persistence concerns outside of the system's domain model. One or more persistence abstractions - interfaces - are defined in the domain model, and these abstractions have implementations in the form of persistence-specific adapters defined elsewhere in the application.

Repository implementations are classes that encapsulate the logic required to access data sources. They centralize common data access functionality, providing better maintainability and decoupling the infrastructure or technology used to access databases from the domain model.

## Motivation

Create an intermediary between the business logic and the data storage.

### Benefits

- Minimizes duplicate query logic
- Decouples your appkication from persistence frameworks
- Promotes testability

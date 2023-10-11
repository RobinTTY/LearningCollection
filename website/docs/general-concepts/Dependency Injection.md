---
id: dependencyInjection
title: Dependency Injection
---

- allows us to develop loosely coupled code
- great way to reduce tight coupling between software components
- enables us to better manage future changes and other complexity in our software
- The purpose of DI is to make code maintainable

Explanation:  
The Dependency Injection pattern uses a builder object to initialize objects and provide the required dependencies to the object means it allows you to "inject" a dependency from outside the class.
For example, Suppose your Client class needs to use two service classes, then the best you can do is to make your Client class aware of abstraction i.e. IService interface rather than implementation i.e. Service1 and Service2 classes. In this way, you can change the implementation of the IService interface at any time (and for how many times you want) without changing the client class code.

Easy Explanation:
Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out.

Dependencies can be injected into objects by many means (such as constructor injection or setter injection). One can even use specialized dependency injection frameworks (e.g. Spring) to do that, but they certainly aren't required. You don't need those frameworks to have dependency injection. Instantiating and passing objects (dependencies) explicitly is just as good an injection as injection by framework.

## [Martin Fowler Explantion](https://martinfowler.com/articles/injection.html)

A common issue to deal with is how to wire together different elements: how do you fit together this web controller architecture with that database interface backing when they were built by different teams with little knowledge of each other. A number of frameworks have taken a stab at this problem, and several are branching out to provide a general capability to assemble components from different layers. These are often referred to as lightweight containers, examples include PicoContainer, and Spring.

Underlying these containers are a number of interesting design principles, things that go beyond both these specific containers and indeed the Java platform. Here I want to start exploring some of these principles. The examples I use are in Java, but like most of my writing the principles are equally applicable to other OO environments, particularly .NET.

### Components and Services

His definitions not general:

- I use **component** to mean a **glob of software that's intended to be used, without change,** by an application that is out of the control of the writers of the component.
- By 'without change' I mean that the using application doesn't change the source code of the components, although they **may alter the component's behavior by extending it in ways allowed by the component writers.**
- A **service** is similar to a component in that it's **used by foreign applications.** The main difference is that I expect a **component to be used locally** (think jar file, assembly, dll, or a source import). A **service will be used remotely through some remote interface**, either synchronous or asynchronous (eg web service, messaging system, RPC, or socket.)

---
id: interface-elements
title: Interface Elements
sidebar_position: 4
---

Interface elements are used to create applications and services. There are many different types, each with its own characteristics and purpose.

It's important to understand some key points before looking at specific examples of interface elements:

- There's no single/universal and "correct" classification of all interface elements, but there are "generally accepted standards"
- Most software platforms provide their own set of elements for developers to use when building applications (for example, there is an iOS UI kit and an Android UI kit)
- You can devise your own screen elements, but they will probably just be a different version of an existing component
- It's worth remembering that clever design and uniqueness can be really cool, but if the user doesn't understand how to use your service, all that creativity will be in vain

The number of elements you use and how you combine them heavily depends on the type and complexity of the application you are developing. However, there are a few standard elements that interfaces cannot do without:

- **Buttons** (any shape, with or without icons/labels)
- **Navigation** (transitions between screens)
- **Input fields** for text/numbers (a search bar, for example)

Interfaces must enable interaction, which can't be achieved without the most basic of elements — a button. Navigation allows a user to move through a screen or a group of screens, whereas input fields can provide a more complex set of choices.

## Classification

An example of the classification of interface elements can be found on [usability.gov](https://www.usability.gov/how-to-and-tools/methods/user-interface-elements.html). They suggest four groups:

- **Input Controls** - elements that allow the user to enter or input some information
- **Navigational Components** - elements that show precisely where you are in the application's structure or allow you to move in different directions
- **Informational Components** - elements that show the status or information, such as when the user needs to make a decision
- **Containers** - elements that group information by various attributes

## Intuitive Interfaces

You need to keep in mind that different elements come with "expectations" about how they should work. For example, most users know that **checkboxes** are square and allow them to select several answer options. On the other hand, **radio buttons** force people to make a single choice from the available alternatives and are usually round. Of course, many users don't know their titles or types, but the experience of using similar elements between different applications creates expectations. This should be considered when producing your design.

![interfaces](/img/docs/Web/html/interfaces.png)

It's a good idea to get acquainted with different interface elements before you start designing an app. It can also be very helpful to analyze a couple of applications you use every day or ones similar to the app you're planning to develop.

Things like when it's more convenient for users to enter information with a "slider" and then click "next." Or where it is easier for them simply to fill in a text input field to continue working.

## Common UI Kits

software platforms often release their own set of standard elements that are very convenient to use when designing your apps. There's no need to invent components from scratch. It's really easy for developers who write application code to program an interface consisting of standard elements that just have style changes.

The most commonly used UI kits are probably:

- [Material Design (Google)](https://material.io/)
- [iOS Design Kits (Apple)](https://developer.apple.com/design/resources/)

There are many many more, some specialized to specific frameworks, some for specific programming languages, some for specific platforms.

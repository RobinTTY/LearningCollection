---
id: propsVsPublicVars
title: Properties vs Public variables
---

```C#
private int _name;

public int Name
{
    get { return _name; }
    set { _name = value; }
}
```

vs

```C#
public int Name;
```

## Why would you use properties

- Start with the simplest thing that works-- a public variable. You can always refactor this later into a property if it turns out additional work needs to be done when the name value is set
- there are valid reasons to make a trivial property, exactly as depicted above:
  - Reflection works differently on variables vs. properties, so if you rely on reflection, it's easier to use all properties
  - You can't databind against a variable
- It's a shame there's so much meaningless friction between variables and properties; most of the time they do the exact same thing

## Is it a property or a method

- In this case, we barely have a property. But if you are executing code in a property, make sure you've written a property and not a method
- A property should do less work-- a lot less work-- than a method
- Properties should be lightweight. If your property incurs significant effort, it should be refactored into an explicit method
- Otherwise it's going to feel like an annoying side-effect of setting a property
- And if there's any chance at all that code could spawn an hourglass, it definitely should be a method
- Conversely, if you have a lot of simple, lightweight methods, maybe they ought to be expressed as properties
- The really important thing to take away here is to avoid writing code that doesn't matter. And property wrappers around public variables are the very essence of meaningless code
- When in doubt, try to follow the [Microsoft internal coding guidelines](https://blogs.msdn.microsoft.com/brada/2005/01/26/internal-coding-guidelines/) unless you have a compelling reason not to

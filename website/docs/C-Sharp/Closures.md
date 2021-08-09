---
id: closures
title: Closures
---

## StackOverflow

In essence, a closure is a block of code which can be executed at a later time, but which maintains the environment in which it was first created - i.e. it can still use the local variables etc of the method which created it, even after that method has finished executing.

```cs
using System;

class Test
{
    static void Main()
    {
        Action action = CreateAction();
        action();
        action();
    }

    static Action CreateAction()
    {
        int counter = 0;
        return delegate
        {
            // Yes, it could be done in one statement;
            // but it is clearer like this.
            counter++;
            Console.WriteLine("counter={0}", counter);
        };
    }
}
```

Output:

```cs
counter=1
counter=2
```

Here we can see that the action returned by CreateAction still has access to the counter variable, and can indeed increment it, even though CreateAction itself has finished.

## C# in depth

To put it very simply, closures allow you to encapsulate some behavior, pass it around like any other object, and still have access to the context in which they were first declared.

This allows you to separate out control structures, logical operators etc from the details of how they're going to be used. The ability to access the original context is what separates closures from normal objects, although closure implementations typically achieve this using normal objects and compiler trickery.

### Example situation: filtering a list

It's reasonably common to want to filter a list by some criterion. This is quite easy to do "inline" by just creating a new list, iterating over the original list and adding the appropriate elements to the new list. It only takes a few lines of code, but it's still nice to hide that logic away in one place. The difficult bit is encapsulating which items to include. This is where closures come in.

Our example will produce a new list containing every element of the original list which matches the given predicate. A predicate is simply something which matches or doesn't match a given item.

In C# the natural way of representing a predicate is as a delegate, and indeed .NET 2.0 contains a `Predicate<T>` type. (Aside: for some reason LINQ prefers `Func<T,bool>`; I'm not sure why, given that it's less descriptive. The two are functionally equivalent.)

```cs
// Declaration for System.Predicate<T>
public delegate bool Predicate<T>(T obj)
```

Code used to filter the list:

```cs title="ListUtil.cs"
static class ListUtil
{
    public static IList<T> Filter<T>(IList<T> source, Predicate<T> predicate)
    {
        List<T> ret = new List<T>();
        foreach (T item in source)
        {
            if (predicate(item))
            {
                ret.Add(item);
            }
        }
        return ret;
    }
}
```

Now that we've defined our filtering method, we need to call it. In order to demonstrate the importance of closures, we'll start with a simple case which can be solved without them, and then move on to something harder.

#### Filter 1: Matching short strings (length fixed)

We'll take a list of strings, and then produce another list which contains only the "short" strings from the original list. Building a list is clearly simple - it's creating the predicate which is the tricky bit. The code looks like this when using a lambda expression:

```cs
static void Main()
{
    Predicate<string> predicate = item => item.Length < 5;
    IList<string> shortWords = ListUtil.Filter(SampleData.Words, predicate);
    ListUtil.Dump(shortWords);
}
```

#### Filter 2: Matching short strings (variable length)

So far our predicate hasn't needed any context - the length is hard-coded, and the string to check is passed to it as a parameter. Let's change the situation so that the user can specify the maximum length of strings to allow.

```cs title="Example2c.cs (C# 3)"
static void Main()
{
    Console.Write("Maximum length of string to include? ");
    int maxLength = int.Parse(Console.ReadLine());

    Predicate<string> predicate = item => item.Length <= maxLength;
    IList<string> shortWords = ListUtil.Filter(SampleData.Words, predicate);
    ListUtil.Dump(shortWords);
}
```

In C#, the variable itself has been captured by the delegate (delegate = predicate). To prove that C# captures the variable, let's change the C# code to change the value of the parameter after the list has been filtered once, and then filter it again:

```cs title="Example2d.cs"
static void Main()
{
    Console.Write("Maximum length of string to include? ");
    int maxLength = int.Parse(Console.ReadLine());

    Predicate<string> predicate = item => item.Length <= maxLength;
    IList<string> shortWords = ListUtil.Filter  (SampleData.Words, predicate);
    ListUtil.Dump(shortWords);

    Console.WriteLine("Now for words with <= 5 letters:");
    maxLength = 5;
    shortWords = ListUtil.Filter(SampleData.Words, predicate);
    ListUtil.Dump(shortWords);
}
```

Note that we're only changing the value of the local variable. We're not recreating the delegate instance, or anything like that. The delegate instance has access to the local variable, so it can see that it's changed. Let's go one step further, and make the predicate itself change the value of the variable:

```cs title="Example2e.cs"
static void Main()
{
    int maxLength = 0;

    Predicate<string> predicate = item => { maxLength++; return item.Length <= maxLength; };
    IList<string> shortWords = ListUtil.Filter(SampleData.Words, predicate);
    ListUtil.Dump(shortWords);
}
```

### Comparing capture strategies: complexity vs power

```cs title="Example3a.cs"
static void Main()
{
    // First build a list of actions
    List<Action> actions = new List<Action>();
    for (int counter = 0; counter < 10; counter++)
    {
        actions.Add(() => Console.WriteLine(counter));
    }

    // Then execute them
    foreach (Action action in actions)
    {
        action();
    }
}
```

What's the output? Well, we've only actually declared a single counter variable - **so that same counter variable is captured by all the Action instances.** The result is the number 10 being printed on every line. To "fix" the code to make it display the output most people would expect (i.e. 0 to 9) we need to introduce an extra variable inside the loop:

```cs title="Example3b.cs"
static void Main()
{
    // First build a list of actions
    List<Action> actions = new List<Action>();
    for (int counter = 0; counter < 10; counter++)
    {
        int copy = counter;
        actions.Add(() => Console.WriteLine(copy));
    }

    // Then execute them
    foreach (Action action in actions)
    {
        action();
    }
}
```

Each time we go through the loop we're said to get a different instance of the copy variable - each Action captures a different variable. This makes perfect sense if you look at what the compiler's actually doing behind the scenes, but initially it flies in the face of the intuition of most developers (including me).

## Benefits

In the example, we've only seen a little bit of benefit in using a closure. Sure, we've separated out the control structure side from the logic required in the filtering itself, but that's not made the code that much simpler on its own.

This is a familiar situation - a new feature often looks less-than-impressive when used in simplistic examples. **The benefit that closures often bring, however, is composability.** If that sounds like a bit of a stretch, I agree - and that's part of the problem. Once you're familiar with closures and possibly a little addicted to them, the connection seems very obvious. Until that time, it seems obscure.

Closures don't inherently provide composability. All they do is make it simpler to implement delegates. Without some support for closures, it's easier to write a small loop than it is to call another method to do the looping, providing a delegate for some piece of the logic involved.

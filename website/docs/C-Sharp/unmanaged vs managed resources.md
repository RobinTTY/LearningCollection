---
id: unmanagedVsManagedResources
title: Unmanaged vs managed resources
---

- **Managed resources basically means "managed memory" that is managed by the garbage collector.**
- When you no longer have any references to a managed object (which uses managed memory), the garbage collector will (eventually) release that memory for you.

Unmanaged resources are then everything that the garbage collector does not know about. For example:

- Open files
- Open network connections
- Open Gpio Ports
- Unmanaged memory

Normally you want to release those unmanaged resources before you lose all the references you have to the object managing them.
You do this by calling Dispose on that object, or (in C#) using the using statement which will handle calling Dispose for you.

If you neglect to Dispose of your unmanaged resources correctly, the garbage collector will eventually handle it for you when the object containing that resource is garbage collected (this is "finalization").
But because the garbage collector doesn't know about the unmanaged resources, it can't tell how badly it needs to release them - so it's possible for your program to perform poorly or run out of resources entirely.

If you implement a class yourself that handles unmanaged resources, it is up to you to implement Dispose and Finalize correctly.

## IDisposable

The point of Dispose is to free unmanaged resources. It needs to be done at some point, otherwise they will never be cleaned up. The garbage collector doesn't know how to call DeleteHandle() on a variable of type IntPtr, it doesn't know whether or not it needs to call DeleteHandle().

**Note:** What is an unmanaged resource? If you found it in the Microsoft .NET Framework: it's managed. If you went poking around MSDN yourself, it's unmanaged. Anything you've used P/Invoke calls to get outside of the nice comfy world of everything available to you in the .NET Framework is unmanaged – and you're now responsible for cleaning it up.

The object that you've created needs to expose some method, that the outside world can call, in order to clean up unmanaged resources. There is a standardized name for this method:

```C#
public void Dispose()
```

The IDisposable interface has just this one method that needs to be implemented.

So you make your object expose the IDisposable interface, and that way you promise that you've written that single method to clean up your unmanaged resources:

```C#
public void Dispose()
{
   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle);
}
```

**But we can do more:**

What if your object has allocated a 250MB System.Drawing.Bitmap (i.e. the .NET managed Bitmap class) as some sort of frame buffer? Sure, this is a managed .NET object, and the garbage collector will free it. But do you really want to leave 250MB of memory just sitting there – waiting for the garbage collector to eventually come along and free it?

If the user has called `Dispose()` (meaning they no longer plan to use the object) why not get rid of those wasteful bitmaps and database connections?

So now we will:

- get rid of unmanaged resources (because we have to), and
- get rid of managed resources (because we want to be helpful)

So let's update our `Dispose()` method to get rid of those managed objects:

```C#
public void Dispose()
{
   //Free unmanaged resources
   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle);

   //Free managed resources too
   if (this.databaseConnection != null)
   {
      this.databaseConnection.Dispose();
      this.databaseConnection = null;
   }
   if (this.frameBufferImage != null)
   {
      this.frameBufferImage.Dispose();
      this.frameBufferImage = null;
   }
}
```

**We can still do more:**

What if the person forgot to call `Dispose()` on your object? Then they would leak some unmanaged resources!

**Note:** They won't leak managed resources, because eventually the garbage collector is going to run, on a background thread, and free the memory associated with any unused objects. This will include your object, and any managed objects you use (e.g. the Bitmap and the DbConnection).

If the person forgot to call `Dispose()`, we can still save their bacon! We still have a way to call it for them: when the garbage collector finally gets around to freeing (i.e. finalizing) our object.

The garbage collector will eventually free all managed objects. When it does, it calls the `Finalize` method on the object. **The GC doesn't know, or care, about your `Dispose` method. That was just a name we chose for a method we call when we want to get rid of unmanaged stuff.**

The destruction of our object by the Garbage collector is the perfect time to free those unmanaged resources. We do this by overriding the `Finalize()` method.

**Note:** In C#, you don't explicitly override the Finalize() method. You write a method that looks like a C++ destructor, and the compiler takes that to be your implementation of the Finalize() method:

```C#
~MyObject()
{
   //we're being finalized (i.e. destroyed), call Dispose in case the user forgot to
   Dispose(); //<--Warning: subtle bug! Keep reading!
}
```

**But there's a bug in that code.** You see, the garbage collector runs on a background thread; you don't know the order in which two objects are destroyed. It is entirely possible that in your Dispose() code, the managed object you're trying to get rid of (because you wanted to be helpful) is no longer there:

```C#
public void Dispose()
{
   //Free unmanaged resources
   Win32.DestroyHandle(this.gdiCursorBitmapStreamFileHandle);

   //Free managed resources too
   if (this.databaseConnection != null)
   {
      this.databaseConnection.Dispose(); //<-- crash, GC already destroyed it
      this.databaseConnection = null;
   }
   if (this.frameBufferImage != null)
   {
      this.frameBufferImage.Dispose(); //<-- crash, GC already destroyed it
      this.frameBufferImage = null;
   }
}
```

So what you need is a way for `Finalize()` to tell `Dispose()` that it should not touch any managed resources (because they might not be there anymore), while still freeing unmanaged resources.

The standard pattern to do this is to have `Finalize()` and `Dispose()` both call a third(!) method; where you pass a Boolean saying if you're calling it from `Dispose()` (as opposed to `Finalize()`), meaning it's safe to free managed resources.

This internal method could be given some arbitrary name like "CoreDispose", or "MyInternalDispose", but is tradition to call it Dispose(Boolean):

```C#
protected void Dispose(Boolean disposing)
```

But a more helpful parameter name might be:

```C#
protected void Dispose(Boolean itIsSafeToAlsoFreeManagedObjects)
{
   //Free unmanaged resources
   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle);

   //Free managed resources too, but only if I'm being called from Dispose
   //(If I'm being called from Finalize then the objects might not exist
   //anymore
   if (itIsSafeToAlsoFreeManagedObjects)
   {
      if (this.databaseConnection != null)
      {
         this.databaseConnection.Dispose();
         this.databaseConnection = null;
      }
      if (this.frameBufferImage != null)
      {
         this.frameBufferImage.Dispose();
         this.frameBufferImage = null;
      }
   }
}
```

And you change your implementation of the `IDisposable.Dispose()` method to:

```C#
public void Dispose()
{
   Dispose(true); //I am calling you from Dispose, it's safe
}
```

and your finalizer to:

```C#
~MyObject()
{
   Dispose(false); //I am *not* calling you from Dispose, it's *not* safe
}
```

**Note:** If your object descends from an object that implements Dispose, then don't forget to call their base Dispose method when you override Dispose:

```C#
    public override void Dispose()
    {
        try
        {
            Dispose(true); //true: safe to free managed resources
        }
        finally
        {
            base.Dispose();
        }
    }
```

**We can do even more:**

If the user calls `Dispose()` on your object, then everything has been cleaned up. Later on, when the garbage collector comes along and calls Finalize, it will then call Dispose again.

Not only is this wasteful, but if your object has junk references to objects you already disposed of from the last call to `Dispose()`, you'll try to dispose them again!

You'll notice in my code I was careful to remove references to objects that I've disposed, so I don't try to call Dispose on a junk object reference. But that didn't stop a subtle bug from creeping in.

When the user calls `Dispose()`: the handle **CursorFileBitmapIconServiceHandle** is destroyed. Later when the garbage collector runs, it will try to destroy the same handle again.

```C#
protected void Dispose(Boolean iAmBeingCalledFromDisposeAndNotFinalize)
{
   //Free unmanaged resources
   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle); //<--double destroy
   ...
}
```

The way you fix this is tell the garbage collector that it doesn't need to bother finalizing the object – its resources have already been cleaned up, and no more work is needed. You do this by calling `GC.SuppressFinalize()` in the `Dispose()` method:

```C#
public void Dispose()
{
   Dispose(true); //I am calling you from Dispose, it's safe
   GC.SuppressFinalize(this); //Hey, GC: don't bother calling finalize later
}
```

Now that the user has called `Dispose()`, we have:

- freed unmanaged resources
- freed managed resources

There's no point in the GC running the finalizer – everything's taken care of.

## Couldn't I use Finalize to cleanup unmanaged resources

The documentation for Object.Finalize says:

> The Finalize method is used to perform cleanup operations on unmanaged resources held by the current object before the object is destroyed.

But the MSDN documentation also says, for `IDisposable.Dispose`:

> Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

So which is it? Which one is the place for me to cleanup unmanaged resources? The answer is:

It's your choice! But choose Dispose.

You certainly could place your unmanaged cleanup in the finalizer:

```C#
~MyObject()
{
   //Free unmanaged resources
   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle);

   //A C# destructor automatically calls the destructor of its base class.
}
```

The problem with that is you have no idea when the garbage collector will get around to finalizing your object. Your un-managed, un-needed, un-used native resources will stick around until the garbage collector eventually runs. Then it will call your finalizer method; cleaning up unmanaged resources. The documentation of Object.Finalize points this out:

The exact time when the finalizer executes is undefined. To ensure deterministic release of resources for instances of your class, implement a Close method or provide a IDisposable.Dispose implementation.

This is the virtue of using Dispose to cleanup unmanaged resources; you get to know, and control, when unmanaged resource are cleaned up. Their destruction is "deterministic".

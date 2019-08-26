# Thread vs Task

__Thread:__ lower level concept, always a seperate Thread rather than executing on the Treadpool -> actual OS-level Thread with own stack + kernel ressources
__Task:__ more than just an abstration of where to run some code, it's really just the promise of a result in the future
  
- Task.Delay: doesn't need any actual CPU time, like setting a timer to go off in the future
- Task.Run: is saying "I want to execute this code seperately", the exact thread on which that code executes depends on a nmber of factors

__ThreadPool:__ is a wrapper around a pool of threads maintained by the __CLR (Common Runtime Language)__. ThreadPool gives you no control at all. You can submit work to execute at some point, and you can control the size of the pool, but you can't set anything else. You can't even tell when the pool will start running the work you submit to it.

## What to use

Thread:

- highest level of control
- costly, consumes non-trivial amount of memory for its stack
- additional overhead for context-switch between threads

Task:

- Task class from the Task Parallel Library offers the best of both worlds
- Like the ThreadPool, a task does not create its own OS thread
- Instead, tasks are executed by a TaskScheduler; the default scheduler simply runs on the ThreadPool
- Unlike the ThreadPool, Task also allows you to find out when it finishes, and (via the generic Task) to return a result
- You can call ContinueWith() on an existing Task to make it run more code once the task finishes (if it's already finished, it will run the callback immediately). If the task is generic, ContinueWith() will pass you the task's result, allowing you to run more code that uses it
- You can also synchronously wait for a task to finish by calling Wait() (or, for a generic task, by getting the Result property). Like Thread.Join(), this will block the calling thread until the task finishes.
  - Synchronously waiting for a task is usually bad idea; it prevents the calling thread from doing any other work, and can also lead to deadlocks if the task ends up waiting (even asynchronously) for the current thread.
- Since tasks still run on the ThreadPool, they should not be used for long-running operations, since they can still fill up the thread pool and block new work
  - Instead, Task provides a LongRunning option, which will tell the TaskScheduler to spin up a new thread rather than running on the ThreadPool.
- All newer high-level concurrency APIs, including the Parallel.For*() methods, PLINQ, C# 5 await, and modern async methods in the BCL, are all built on Task.

## Conclusion

- The bottom line is that Task is almost always the best option; it provides a much more powerful API and avoids wasting OS threads.
- The only reasons to explicitly create your own Threads in modern code are setting per-thread options, or maintaining a persistent thread that needs to maintain its own identity.

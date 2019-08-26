# Task.Factory.StartNew()

- gives you the opportunity to define a lot of useful things about the thread you want to create, while Task.Run doesn't provide this
- you can attach options to a task for instance:
  - Task.Factory.StartNew(..., TaskCreationOptions.LongRunning);
- Task.Run method in no way obsoletes Task.Factory.StartNew, but rather should simply be thought of as a quick way to use Task.Factory.StartNew without needing to specify a bunch of parameters
- It’s a shortcut. In fact, Task.Run is actually implemented in terms of the same logic used for Task.Factory.StartNew, just passing in some default parameters
- When you pass an Action to Task.Run:
  - Task.Run(someAction);
- that’s exactly equivalent to:
  - Task.Factory.StartNew(someAction, CancellationToken.None, TaskCreationOptions.DenyChildAttach, TaskScheduler.Default);
  
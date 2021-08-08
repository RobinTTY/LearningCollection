---
id: semaphoreVsMutex
title: Semaphore vs Mutex
---

## Mutex

A synchronization primitive that can also be used for interprocess synchronization.

### Mutual Exclusion Semaphores

Mutual Exclusion semaphores are used to protect shared resources (data structure, file, etc..).

A Mutex semaphore is "owned" by the task that takes it. If Task B attempts to semGive a mutex currently held by Task A, Task B's call will return an error and fail.

Mutexes always use the following sequence:

- SemTake
- Critical Section
- SemGive

## Semaphore

Limits the number of threads that can access a resource or pool of resources concurrently.

### Binary Semaphore

Binary Semaphore address a totally different question:

- Task B is pended waiting for something to happen (a sensor being tripped for example).
- Sensor Trips and an Interrupt Service Routine runs. It needs to notify a task of the trip.
- Task B should run and take appropriate actions for the sensor trip. Then go back to waiting.

Note that with a binary semaphore, it is OK for B to take the semaphore and A to give it.
Again, a binary semaphore is NOT protecting a resource from access. The act of Giving and Taking a semaphore are fundamentally decoupled.
It typically makes little sense for the same task to so a give and a take on the same binary semaphore.

## Difference

Mutex is for exclusive access to a resource. A Binary semaphore should be used for Synchronization (i.e. "Hey Someone! This occurred!").

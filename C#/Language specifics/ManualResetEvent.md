# ManualResetEvent

- Represents a thread synchronization event that, when signaled, must be reset manually
- If the current thread calls the WaitOne() method, it will be waiting(so stop doing anything) until any other thread calls the Set() method
- WaitOne(TimeSpan) behaves almost the same as the above, but if for example you pass 5 seconds time to this method, the current thread will be waiting for other threads to call the Set() method for 5 seconds and if no one called Set(), it calls it automatically and contunie the work

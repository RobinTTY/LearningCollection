---
id: volatileKeyword
title: Volatile Keyword
---

- the volatile keyword indicates that a field might be modified by multiple threads that are executing at the same time
- the compiler, the runtime system, and even hardware may, by default, rearrange reads and writes to memory locations for performance reasons
  - **Fields that are declared volatile are not subject to these optimizations**
- Adding the volatile modifier ensures that all threads will observe volatile writes performed by any other thread in the order in which they were performed
  - There is no guarantee of a single total ordering of volatile writes as seen from all threads of execution

The volatile keyword can be applied to fields of these types:

- Reference types
- Pointer types (Note that although the pointer itself can be volatile, the object that it points to cannot. In other words, you cannot declare a "pointer to volatile")
- Simple types such as sbyte, byte, short, ushort, int, uint, char, float, and bool
- An enum type with one of the following base types: byte, sbyte, short, ushort, int, or uint
- Generic type parameters known to be reference types

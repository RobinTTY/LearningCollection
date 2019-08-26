# Call Stack

In computer science, a call stack is a stack data structure that stores information about the active subroutines of a computer program. This kind of stack is also known as an execution stack, program stack, control stack, run-time stack, or machine stack, and is often shortened to just "the stack".

__A call stack is used for several related purposes, but the main reason for having one is to keep track of the point to which each active subroutine should return control when it finishes executing.__ An active subroutine is one that has been called but is yet to complete execution after which control should be handed back to the point of call. Such activations of subroutines may be nested to any level (recursive as a special case), hence the stack structure.

__Example:__  
If, for example, a subroutine DrawSquare calls a subroutine DrawLine from four different places, DrawLine must know where to return when its execution completes. To accomplish this, the address following the call instruction, the return address, is pushed onto the call stack with each call.

__Description:__  
Since the call stack is organized as a stack, the caller pushes the return address onto the stack, and the called subroutine, when it finishes, pulls or pops the return address off the call stack and transfers control to that address.

If a called subroutine calls on yet another subroutine, it will push another return address onto the call stack, and so on, with the information stacking up and unstacking as the program dictates.

If the pushing consumes all of the space allocated for the call stack, an error called a stack overflow occurs, generally causing the program to crash.

Adding a subroutine's entry to the call stack is sometimes called "winding"; conversely, removing entries is "unwinding". There is usually exactly one call stack associated with a running program (or more accurately, with each task or thread of a process), although additional stacks may be created for signal handling or cooperative multitasking (as with setcontext). Since there is only one in this important context, it can be referred to as the stack (implicitly, "of the task"); __however, in the Forth programming language the data stack or parameter stack is accessed more explicitly than the call stack and is commonly referred to as the stack (see below).__

In high-level programming languages, the specifics of the call stack are usually hidden from the programmer. They are given access only to a set of functions, and not the memory on the stack itself. This is an example of abstraction. Most assembly languages, on the other hand, require programmers to be involved with manipulating the stack. The actual details of the stack in a programming language depend upon the compiler, operating system, and the available instruction set.

## Functions

### Local data storage

A subroutine frequently needs memory space for storing the values of local variables, the variables that are known only within the active subroutine and do not retain values after it returns. It is often convenient to allocate space for this use by simply moving the top of the stack by enough to provide the space. This is very fast when compared to dynamic memory allocation, which uses the heap space. Note that each separate activation of a subroutine gets its own separate space in the stack for locals.

### Parameter passing

Subroutines often require that values for parameters be supplied to them by the code which calls them, and it is not uncommon that space for these parameters may be laid out in the call stack. Generally if there are only a few small parameters, processor registers will be used to pass the values, but if there are more parameters than can be handled this way, memory space will be needed.

### Evaluation stack

Operands for arithmetic or logical operations are most often placed into registers and operated on there. However, in some situations the operands may be stacked up to an arbitrary depth, which means something more than registers must be used (this is the case of register spilling).

### Pointer to current instance

Some object-oriented languages (e.g., C++), store the this pointer along with function arguments in the call stack when invoking methods. The this pointer points to the object instance associated with the method to be invoked.

### Enclosing subroutine context

Some programming languages (e.g., Pascal and Ada) support declaration of nested subroutines, which are allowed to access the context of their enclosing routines, i.e., the parameters and local variables within the scope of the outer routines.

### Other return state

Beside the return address, in some environments there may be other machine or software states that need to be restored when a subroutine returns. This might include things like privilege level, exception-handling information, arithmetic modes, and so on. If needed, this may be stored in the call stack just as the return address is.

The typical call stack is used for the return address, locals, and parameters (known as a call frame). In some environments there may be more or fewer functions assigned to the call stack. In the Forth programming language, for example, ordinarily only the return address, counted loop parameters and indexes, and possibly local variables are stored on the call stack (which in that environment is named the return stack), although any data can be temporarily placed there using special return-stack handling code so long as the needs of calls and returns are respected; parameters are ordinarily stored on a separate data stack or parameter stack, typically called the stack in Forth terminology even though there is a call stack since it is usually accessed more explicitly. Some Forths also have a third stack for floating-point parameters.

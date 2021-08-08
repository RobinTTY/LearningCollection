---
id: nullCoalescingOperator
title: Null-coalescing operator
---

- returns the left-hand operand if the operand is not null; otherwise it returns the right hand operand
- The result of a ?? operator is not considered to be a constant even if both its arguments are constant
- Example:
  - // Set y to the value of x if x is NOT null; otherwise,  
    // if x == null, set y to -1.  
    int y = x ?? -1;

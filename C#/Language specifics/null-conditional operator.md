# null-conditional operator

- Tests the value of the left-hand operand for null before performing a member access (?.) or index (?[]) operation
- returns null if the left-hand operand evaluates to null
- Syntax:
  - int? length = customers?.Length; // null if customers is null
  - int? count = customers?[0]?.Orders?.Count();  // null if customers, the first customer, or Orders is null
  
# IEnumerable

- Exposes an enumerator, which supports a simple iteration over a non-generic collection
- They are implemented to support the use of foreach to iterate through the collection
- Basically IEnumerable has a method to get the next item in the collection. It doesn't need the whole collection to be in memory and doesn't know how many items are in it, foreach just keeps getting the next item until it runs out.
- This can be very useful in certain circumstances, for instance in a massive database table you don't want to copy the entire thing into memory before you start processing the rows.
- IEnumerable is the base interface for all non-generic collections that can be enumerated
- IEnumerable contains a single method, GetEnumerator, which returns an IEnumerator. IEnumerator provides the ability to iterate through the collection by exposing a Current property and MoveNext and Reset methods
- It is a best practice to implement IEnumerable and IEnumerator on your collection classes to enable the foreach syntax, however implementing IEnumerable is not required
- If your collection does not implement IEnumerable, you must still follow the iterator pattern to support this syntax by providing a GetEnumerator method that returns an interface, class or struct
- List implements IEnumerable, but represents the entire collection in memory. If you have an IEnumerable and you call .ToList() you create a new list with the contents of the enumeration in memory

## LINQ

- linq expressions return an enumeration, and by default the expression executes when you iterate through using the foreach
- An IEnumerable linq statement executes when you iterate the foreach, but you can force it to iterate sooner using .ToList()

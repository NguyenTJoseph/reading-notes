# Pythonisms
## Dunder Methods
- Initialization of new objects
- Object representation
- Enable iteration
- Operator overloading (comparison)
- Operator overloading (addition)
- Method invocation
- Context manager support (with statement)

## Iterator
- Iterators provide a sequence interface to Python objects that’s memory efficient and considered Pythonic. Behold the beauty of the for-in loop!
- To support iteration an object needs to implement the iterator protocol by providing the __iter__ and __next__ dunder methods.
- Class-based iterators are only one way to write iterable objects in Python. Also consider generators and generator expressions.

## Generators
- Generator functions are syntactic sugar for writing objects that support the iterator protocol. Generators abstract away much of the boilerplate code needed when writing class-based iterators.
- The yield statement allows you to temporarily suspend execution of a generator function and to pass back values from it.
- Generators start raising StopIteration exceptions after control flow leaves the generator function by any means other than a yield statement.

# Game of Greed 2
## Python Scope
Global
- Use the keyword global to define global variables in functions
```py
def function():
    global count = 1

```
Nonlocal
- With nonlocal followed by a variable
- allows access to variables declared in nested functions

```py
def function():
    variable = 1
    def function2():
        nonlocal var 
        var = 1000
    
```
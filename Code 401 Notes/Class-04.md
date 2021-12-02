# Topic
## Classes and Objects
- Access variables and functions in object with dot notation
```
myobjectx.variable
myobjectx.function()
```

```def __init__():```
- function is called on the initialization of a class

## Thinking Recursively in Python
State in recursive functions
- Thread the state through each recursive call so that the current state is part of the current call’s execution context
- Keep the state in global scope

Recursive data structures
- List
- Set 
- Tree
- Dictionary
- etc.

## Fixtures and Coverage
Fixtures allows you to share object data across tests.

pytest.fixture decorator along with a function definition

You can set a scope to fixtures
```
@pytest.fixture
def simple_file(): || @pytest.fixture(scope='module')
   return StringIO('\n'.join(['abc', 'def', 'ghi', 'jkl']))
   ```
```
simple_file
```

pytest-cov:
- allows for code coverage checking to test for more scenarios

```
pytest --cov=mymul .
coverage html
```

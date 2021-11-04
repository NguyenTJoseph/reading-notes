# In memory storage
## Call Stack
1. What is a ‘call’?
- Function invocation
2. How many ‘calls’ can happen at once?
- One at a time
3. What does LIFO mean?
- Last In, First Out 
    - Last function pushed in is first to be popped out
4. Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.
- First function
    - ---> Output
- Second Function 
    - ---> First Function
- Third Function 
    - ---> Second Function
5. What causes a Stack Overflow?
- A function points to itself without an exit.

## Error Messages
1. What is a ‘refrence error’?
- Variable that has not been declared yet
2. What is a ‘syntax error’?
- Improper/invalid syntax
3. What is a ‘range error’?
- When manipulating something with length and you give it an invalid length
4. What is a ‘type error’?
- Type of data is incompatible 
5. What is a breakpoint?
- The breakpoint is where your code stops running or breaks
6. What does the word ‘debugger’ do in your code?
It can let you achieve a breakpoint where the statement is
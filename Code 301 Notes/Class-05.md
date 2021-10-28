# Putting it all together
## Thinking in React
1. What is the single responsibility principle and how does it apply to components?
- Single responsibility principle is the idea that something should ideally only do one thing so components should only do one thing.

2. What does it mean to build a ‘static’ version of your application?
To build your app without interactivity as it requires a lot of thinking instead of getting stuff on there.

3. Once you have a static application, what do you need to add?
Figure out your minimal set of mutable state so you don't repeat

4. What are the three questions you can ask to determine if something is state?
- Is it passed in from a parent via props? If so, it probably isn’t state.
- Does it remain unchanged over time? If so, it probably isn’t state.
- Can you compute it based on any other state or props in your component? If so, it isn’t state.

5. How can you identify where state needs to live?
- Find every component that uses that state
- Find common component
- If common component that makes sense to hold the state cant be found then create a new component to hold state

## Higher-Order Function
1. What is a “higher-order function”?
- A function that operates on another function

2. Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?
- Line 2 is returning a new function that 
checks if the new variable m is greater than the variable n defined in the parent function

3. Explain how either map or reduce operates, with regards to higher-order functions.
- You can pass a function into a map or reduce and it will run the function for everything in the array.

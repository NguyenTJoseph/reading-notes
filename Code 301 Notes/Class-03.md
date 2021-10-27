# Passing Functions as Props

## Lists and Keys

1. What does .map() return?
- .map returns a new array thats been modified

2. If I want to loop through an array and display each value in JSX, how do I do that in React?
- You can use .map and embed it


3. Each list item needs a unique ____.
- key


4. What is the purpose of a key?
- Keys help React identify which items have changed, are added, or are removed.

## Spread Operator
1. What is the spread operator?
- The spread operator spreads an array into seperate arguments.

2. List 4 things that the spread operator can do.
- copy array
- Concatenating or combining arrays
- Using Math functions
- Using an array as arguments

3. Give an example of using the spread operator to combine two arrays.
```js
let combinedArray = {...array1, ...array2}
```
4. Give an example of using the spread operator to add a new item to an array.
```js
let ArrayandAdded = {...array1, ...toBeAdded}
```
5. Give an example of using the spread operator to combine two objects into one.
```js
let combinedObj = {...obj1, ...obj2}
```
## Pass functions between components

1. In the video, what is the first step that the developer does to pass functions between components?
Creates a function that modifies the state.

2. In your own words, what does the increment function do?
- The ppl variable is a modified array of the people objects that if the persons name matches the name thats passed in, its count is incremented.

3. How can you pass a method from a parent component into a child component?
You can use prop to pass a method from parent to child.

4. How does the child component invoke a method that was passed to it from a parent component?
-  this.props.method()


## Things I want to know more about
- Get into more examples of keys
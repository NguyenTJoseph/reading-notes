# React and Forms
## Forms
1. What is a ‘Controlled Component’?
- Controlled components have React handle the elements data by storing it in the components state.

2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.
- Update the state with their responses as soon as they enter them as it allows you to do more things with it before submitting


3. How do we target what the user is entering if we have an event handler on an input field?
- Add a name attribute the the element and use event.target.name


## Conditional (Ternary) Operator
1. Why would we use a ternary operator?
- It makes it more readable and can shorten it
2. Rewrite the following statement using a ternary statement:
```js
  if(x===y){
 console.log(true);
  } else {
 console.log(false);
  }
```
```js
    x=y ? console.log(true) : console.log(false)
```
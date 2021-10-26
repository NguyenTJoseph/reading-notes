# State and Props
## React Lifecycle
1. Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?
- Render occurs before componentDidMount.

2. What is the very first thing to happen in the lifecycle of React?
- The first phase is mounting which is when an instance of a component is created and inserted into the DOM

3. Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates
- Constructor --> Render --> React Updates --> componentDidMount --> componentWillUnmount

4. What does componentDidMount do?
To load anything with a network request or initialize the DOM as it is invoked after the component is mounted.

## React State vs Props
1. What types of things can you pass in the props?
- Data that isn't going to be changed by the component
- Data that doesn't need to be passed to the parent
2. What is the big difference between props and state?
- Props are passed in component where states are inside the component
3. When do we re-render our application?
- When state is changed inside your application
4. What are some examples of things that we could store in state?
- Count update inside counter
- Inside a form
## Things I want to know more about
- Understand what exactly componentDidMount is used for 
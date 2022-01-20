# React 1
## ES6
- Variable declaration
- Constant declaration
- Arrow function syntax
- Template literals
- Implicit returns
- Key/property shorthand
- Method definition shorthand
- Destructuring (object matching)
- Array iteration (looping)
- Default parameters
- Spread syntax
- Classes/constructor functions
- Inheritance
- Modules - export/import
- Promises/callbacks

## React
- JSX 
```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
- Components let you split the UI into independent, reusable pieces
- Props are arguments passed into React components.
```js
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
  }

  componentWillUnmount() {
  }


function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Tailwind CSS
- Utility-First
- This approach allows us to implement a completely custom component design without writing a single line of custom CSS.
- You aren’t wasting energy inventing class names.
- Your CSS stops growing
- Making changes feels safer

```html
<div class="bg-white rounded shadow border p-6 w-64">
  <h5 class="text-3xl font-bold mb-4 mt-0">My Title</h5>
  <p class="text-gray-700 text-sm">Content goes here</p>
</div>
```

## Next.js
- An intuitive page-based routing system (with support for dynamic routes)
- Pre-rendering, both static generation (SSG) and server-side rendering (SSR) are supported on a per-page basis
- Automatic code splitting for faster page loads
- Client-side routing with optimized prefetching
- Built-in CSS and Sass support, and support for any CSS-in-JS library
- Development environment with Fast Refresh support
- API routes to build API endpoints with Serverless Functions
- Fully extendable
# React 2
## Conditional Rendering
```js
if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
```

## Lists and Keys
- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
```js
{numbers.map((number) =>
    <ListItem key={number.toString()}
        value={number} />
```
## Forms
- HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. 
- React state should be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

## Lifting State Up
- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
```js
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;

```

## Composition vs Inheritance
- Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”. We recommend that such components use the special children prop to pass children elements directly into their output
- Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.

## Thinking in React
- Break The UI Into A Component Hierarchy
- Build A Static Version in React
- Identify The Minimal (but complete) Representation Of UI State
- Identify Where Your State Should Live
- Add Inverse Data Flow

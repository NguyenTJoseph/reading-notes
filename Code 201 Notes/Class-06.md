# Problem Domain, Objects, and the DOM
## Problem Domain
Developing something is hard if you don't fully understand the entire picture.
1. Figure out what the major components of the picture are
2. Sort the pieces by color or component
3. Put together all the border pieces
4. Put together each component of the picture from the piles you created

## Primitive Values and Object References
Data Types:

Primitive
- Boolean
- Null
- Undefined
- Number
- BigInt
- String
- Symbol

Object reference
- Objects
 - Array
 - Function
 - Dates

Immutable and Mutable Data:

Primitive values cannot be changed (or mutated), but object references can be changed.

## Object Literals
Objects are series of variables and functions that represent something in the real world.
```js
let hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite']
    // properties ^
// method
checkAvailability: function() {
    return this.rooms - this.booked;
}
}
```
## Document Object Model
The browser creates a model of the page called a DOM tree.

- Document Node
- Element Node
- Attribute Node
- Text Node

Manipulating:
createElement()
createTextNode()
appendChild()

textContent
innerText
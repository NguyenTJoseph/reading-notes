# HTML Links, JS Functions, and Intro to CSS Layout
## Links
Links are made with the <a> element and the href attribute specifies the place it links to.
```<a href:"http://www.imdb.com">IMDB<a>```
You can link to other pages on the same site by using the relative path.
```<a href:"home.html">Home<a>```
To link specific parts of the same page or different pages by using the id attribute.
```html
    <a href:"#bottom">Bottom<a>                      <!--Same Page-->
    <a href:"http://www.imdb.com/ #bottom">Bottom<a> <!--Different Page-->
```
## Layout
You can use the ```<div>``` element to group all the elements contained within it.
To change the positioning of elements you need to specify if it is relative, absolute, or fixed positioning. If you don't specify the browser will display normal flow. Z-index specifies how close an element is to the front for overlapping elements.
### Float
Float places an element on the left or right side of its container, allowing text and inline elements to wrap around it. You should define the width of the element when you use float.

Elements can be treated as zero pixels tall if all elements within are float elements.
Can be remedied by:
``` css
    overflow: auto;
    width: 100%
```
### Clear 
Clear keeps other elements from touching the box of the element.
- left
- right
- both
- none
### Layouts
You can make multi column layouts with:
- width
- float
- margin
Layouts can be:
- fixed width
- liquid
Typical Conventions
- 960 - 1000 pixels wide
- top 600 pixels denote what site is about without scrolling
## Functions
Group a series of statements together to perform a task. Useful for reusing instead of repeating all the statements again.
```js
function functionName() {
    "code"
}

functionName();
```
If function needs information:
```js
function functionName(width, height) {
    return width * height;
}

functionName(width, height);
```
Get single value from function:
```js
function functionName(width, height) {
    area width * height;
    return area;
}

var wallOne = functionName(width, height);
var wallTwo = functionName(width, height);
```
Multiple values:
```js
var areaOne = getSize(3,2,3)[0];
var volumeOne = getSize(3,2,3)[1];
```
Functions placed where a expression is expected to go will be treated as an expression.
### Immediately Invoked Function Expressions
Functions that are not given a name and are executed once they come across.
Used for:
- Argument when function is called to calculate a value for that function
- Assign value of a property to an object
- Event handlers and listeners
- Prevent conflicts between scripts
### Variables
Local Variables 
- Created inside function
- Cannot be accessed outside the function
- Removed as soon as function is done
        
Global Variables 
- Created outside function
- Stored in memory while web page is loaded (Take up more memory)
- Naming conflicts are more likely
## 6 Reasons for Pair Programming
Driver
- Driver is the programmer who is typing and the only one whose hands are on the keyboard. Handling the “mechanics” of coding, the Driver manages the text editor, switching files, version control, and—of course writing—code.
        
Navigator
- The Navigator uses their words to guide the Driver but does not provide any direct input to the computer. The Navigator thinks about the big picture, what comes next, how an algorithm might be converted in to code, while scanning for typos or bugs. The Navigator might also utilize their computer as a second screen to look up solutions and documentation, but should not be writing any code.
Reasons pair programming is good:
- Greater efficiency
- Engaged collaboration
- Learning from fellow students
- Social skills
- Job interview readiness
- Work environment readiness 

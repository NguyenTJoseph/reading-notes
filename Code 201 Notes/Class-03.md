# HTML Lists, Control Flow with JS, and the CSS Box Model
## Lists 
Types of lists
- Ordered list ```<ol>```
- Unordered lists ```<ul>```
- List Items ```<li>```
- Definition Lists ```<dl>```
    - Term ```<dt>```
    - Definition ```<dd>```
- Nested lists
    - Put second list into a ```<li>``` element
## Boxes 
### Box Dimensions
Height & Width
``` height 75%; width 75%;```
Min - Max Width/Height
``` min-width: 450px; max-width: 450px```
Overflow
- Tells what to do if content is larger than box 
    - Hidden - hides extra content
    - Scroll - adds scrollbar to scroll through extra content
### Border, Margin, Padding
- Border separates edge of box from another
    - Width
    - Style
    - Color                                                             
- Margin sits outside border 
- Padding is space between border of box and its content
    Margin/Padding
    - top
    - bottom
    - right
    - left
### Formatting
Center Box
```left-margin:auto; right-margin:auto;```
Inline/Block
- Inline makes block-level element to act like inline
- Block causes inline to act like block-level
- Inline-block causes block-level element to flow like inline while still being block
- None hides element from page
Visibility 
- Hidden hides element
- Visible shows element
Image borders and rounded borders in CSS3

## Decisions

### Switch Statements
A switch statements starts with a variable called switch value. Cases indicate possible values for the variable and code that should run if it matches.
``` 
switch (level){
    case 'one':
    title = 'level 1':
    break;

     case 'two':
    title = 'level 2':
    break;

     default:
    title = 'test':
    break;
}
```
If no case matches then the default case is executed

### Data Formatting
Data types can be coerced as JavaScript tries to make sense of operations rather than reporting an error

Truthy/Falsy
Values that are treated as false or true 

## Loops
A loop checks if a condition is true and repeats the code until it is false.
for - allows you to run a code for a specific number of times
while - for when you do not know how many times it allows the condition to be something other than a counter
do while - it will run the loop at least once even if condition is false
break - terminates loop and moves on the next statement outside loop
continue - continue with the current iteration, checks condition again, runs the code again if its true
### Loop Counters
Initialization - create variable and set to 0
```
var i = 0;
```
Condition - continues until reaches specified number
```
i < 0
```
Update - each time the loop is ran it adds one to the counter
```
i++
```
Example
```
for (var i = 0; i < 10; i++) {
    document.write(i);
}
```
While loop example:
``` 
var i = 1
var msg = '';

while (i < 10) {
    msg += i ' x 5 = ' + (i*5) + '<br />";
    i++;
}

document.getElementById('answer').innerHTML = msg;
```

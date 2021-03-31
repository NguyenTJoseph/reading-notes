# Operators and Loops
## Comparison Operators
```
== equal to
!= not equal to
=== strict equal to
!== strict not equal to
> greater than
< less than
>= greater than or equal to
<= less than or equal to
```
Structure as such:
```
(score >= pass)
```
## Logical Operators
Allows you to compare the results of more than one comparison operator.
```
((5<2) && (2>=3))
```
&& logical and
|| logical or
! logical not (inverts it)
## Loops
A loop checks if a condition is true and repeats the code until it is false.
for - allows you to run a code for a specific number of times
while - for when you do not know how many times it allows the condition to be something other than a counter
do while - it will run the loop at least once even if condition is false

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

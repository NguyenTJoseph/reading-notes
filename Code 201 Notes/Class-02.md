# HTML Text, CSS Introduction, and Basic JavaScript Instructions
## HTML Text
HTML elements describe the structure of a web page and semantic details.
## Introduction to CSS
CSS takes HTML elements and puts it in a box and uses rules to dictate how it should look. Rules have selectors that specify the element the rule applies to and decelerations which indicate what it looks like. Decelerations have two parts: The properties and the value.

```p { font-family: Arial; }```

- Selector is "p"
- Decleration is "font-family: Arial;"

## Basic JavaScript Instructions

### Statementsts 
- Statements are individual instructions or steps. They will end with a semicolon.
Comments are done with to backslashes. // Comment

### Variables 
Variables temporarily store data/information.
Declaring variables:

``` var quantity;```

Data can be:
- Numbers
- Strings
- Booleans

### Arrays
Arrays are variables that store more than one value.
Creating an array:

```
var colors;
colors = ['white', 'black', 'custom'];
```
``` 
var colors = new array( 'white',
                            'black',
                            'custom'); 
```
### Expressions 
Expressions evaluate into a single value. They can assign a single value or use two or more values to give one value.
Operators expressions to create a single value from multiple by things like assigning value, perform math, or combining strings.

## Decisions and Loops
Conditional statements allow code to make decisions on what it should do. 
### Comparison Operators
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
### Logical Operators
Allows you to compare the results of more than one comparison operator.
```
((5<2) && (2>=3))
```
&& logical and
|| logical or
! logical not (inverts it)

### If Statements
If statements evaluate a condition and executes the block of code if the conditions are met.
# Object-Oriented Programming, HTML Tables
## Domain Modeling
Domain modeling is the creation of a conceptual model to articulate and validate understanding.

Ex. Model epic fails videos
- Use domain modeling to gauge the popularity of a video based on various properties
    - Could include
        - rating
        - Views
        - boolean (has animals or not)

math.random() 
- Generates random number
- Can be used to help model random behavior
- Random nature of user behavior

## Tables
```html
<table> <!--Creates table-->
    <tr> <!--Creates table row-->
        <td>2121</td> <!--Table Data-->
    </tr>
</table>
```
<th>
- Element to put table headings
- Put attribute of either scope="col" for column or scope="row" for row

Span column/row
- Use attribute colspan="2" in table data to span 2 columns
- Use attribute rowspan="2" in table data to span 2 rows

Long Tables
- <thead> table heading
- <tbody> table body
- <tfoot> table footer
## Functions, Methods, and Objects
Create new instances of an object
```js
let ritzHotel = new Hotel('Ritz', 40, 25)
let mgmHotel = new Hotel('mgm', 400, 180)
```
You can use delete to delete properties
```js
delete hotel.booked;
```
this
- This refers to a single object and depending where it is declared its meaning will differ.

Arrays
- Arrays are objects where the key is the value of its index number
- You can put arrays in objects or the other way around

### Built-in Objects
- Browser object
- Document object
- Global Javascript object

### Date 
Create instance of date object and use a variety of methods to set and retrieve date/time.
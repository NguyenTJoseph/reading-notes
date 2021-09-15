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
You can use the <div> element to group all the elements contained within it.
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
## Functions, Methods, and Objects

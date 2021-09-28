# Chart.js, Canvas
## Charts.js
Charts.js is a javascript plugin that allows you to create different charts. 

Install:
- Download chart.js
- Copy Chart.min.js
- Import the script

Some basic charts:
- bar
- pie
- line

## Canvas
The Canvas API provides a means for drawing graphics via JavaScript and the HTML ```<canvas>``` element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.

Method getContext(), is used to obtain the rendering context and its drawing functions

```js
fillRect(x, y, width, height)
//Draws a filled rectangle.

strokeRect(x, y, width, height)
//Draws a rectangular outline.

clearRect(x, y, width, height)
//Clears the specified rectangular area, making it fully transparent.
beginPath()
//Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.

//Path methods
//Methods to set different paths for objects.

closePath()
//Adds a straight line to the path, going to the start of the current sub-path.

stroke()
//Draws the shape by stroking its outline.

fill()
//Draws a solid shape by filling the path's content area.

moveTo(x, y)
//Moves the pen to the coordinates specified by x and y.
lineTo(x, y)
//Draws a line from the current drawing position to the position specified by x and y.

//To draw arcs or circles, we use the arc() or arcTo() methods.

arc(x, y, radius, startAngle, endAngle, counterclockwise)
//Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by counterclockwise (defaulting to clockwise).

arcTo(x1, y1, x2, y2, radius)
//Draws an arc with the given control points and radius, connected to the previous point by a straight line.
quadraticCurveTo(cp1x, cp1y, x, y)
//Draws a quadratic Bézier curve from the current pen position to the end point specified by x and y, using the control point specified by cp1x and cp1y.

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
//Draws a cubic Bézier curve from the current pen position to the end point specified by x and y, using the control points specified by (cp1x, cp1y) and (cp2x, cp2y).
```

### Canvas Styles
- colors
- transparency 
- line styles
- line cap
- line join
- dashes
- gradients
- patterns
- shadow

### Drawing text
```js
//The canvas rendering context provides two methods to render text:

fillText(text, x, y [, maxWidth])
//Fills a given text at the given (x,y) position. Optionally with a maximum width to draw.

strokeText(text, x, y [, maxWidth])
//Strokes a given text at the given (x,y) position. Optionally with a maximum width to draw.
```

Style:
- font 
- text align
- text baseline
- direction
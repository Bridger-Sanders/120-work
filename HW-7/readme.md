Bridger Sanders, Section: 50

[Live Sketch Link](https://bridger-sanders.github.io/120-work/HW-7)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

### Please describe what the original code is doing.

It creates an ellipse that bounces off the borders of the canvas. 

### Why is it working the way it is?

- because the code sets the rules
- defining variables using "let"
- using math to move the ball every time the script is read
- setting "if" parameters so the ball changes direction when it reaches max width/height of the canvas

### What does each line do?

- defines ball and sets variable values
```
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
```
- create the background color and canvas
```
function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}
```
- the ellipse moves one unit on the x and y axis each time the script is read
- position of ellipse + ( value of variable times value of variable )
```
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;
```
- if the ellipse is greater than or equal to the width
- ball.delta_x will either change to -1 or 1
```
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
```
- if the ellipse is greater than or equal to the height
- ball.delta_y will either change to -1 or 1
```
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
```
- creates a white bordered circle
```
    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}
```
- when mouse is pressed
- depending on the position the mouse is
- the number of units the ellipse moves changes
```
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
```
### How can you make the ball change direction?

- you can change the 1's to a -1 
```
    ball.delta_x = 1;
    ball.delta_y = 1;
    ball.scale_x = 1;
    ball.scale_y = 1;
```
or

- press the left mouse button to change the direction slightly as well as the speed
```
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
```

## How did you alter the sketch?

### Please describe how and why you changed the sketch?

- I increased the number of units the ellipses move
- I added 3 more ellipses, each ellipse moves in the opposite direction of the adjacent one
- I removed ellipse stroke
- I removed mousePressed
- I changed the canvas color and size
- I did these things because they make the sketch aesthetically pleasing to me

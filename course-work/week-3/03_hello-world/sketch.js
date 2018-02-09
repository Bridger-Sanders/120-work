/*

Everything inside of the block comment is ignored
name: sketch.js
last modified:

author: B. Sanders

This is the sketch.js file for the "Hello World!" project
*/

// This is an in-line comment
// This is another comment

// This is the setup() function
// This is required by p5 for setup
function setup(){
}

// This is the draw() function definition
// This gets called after setup() finishes executing
function draw(){

    // This will draw a circle
    // centered at point (20, 20)
    // This circle will have a diameter of 30 pixels 
    ellipse(20, 20, 30, 30);    // everything after these slashes, is ignored

    // Two slashes can disable code
    ellipse(20, 20, 30, 30);
    // ellipse(20, 20, 30, 30);

}


// TODO: Remember to use ctrl + / = //
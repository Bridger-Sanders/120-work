var groundY = 290;

var playerX = 140;
var playerY = 220;
var playerWidth = 20;
var playerHeight = 20;
var playerSpeedY = 0;

//only allow jumping if the player is not already jumping
boolean (jumping) = false;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(64);

  //draw the ground
  stroke(255);
  line(0, groundY, width, groundY);

  //move the player
  playerY += playerSpeedY;

  //is the player colliding with the ground?
  if (playerY + playerHeight > groundY) {

    //snap the player's bottom to the ground's position
    playerY = groundY - playerHeight;

    //stop the player falling
    playerSpeedY = 0;

    //allow jumping again
    jumping = false;
  }
  //player is not colliding with the ground
  else {
    //gravity accelerates the movement speed
    playerSpeedY ++;
  }

  //draw the player rectangle
  rect(playerX, playerY, playerWidth, playerHeight);
}

function keyPressed() {
  //you can only jump if you aren't already jumping
  if (!jumping) {
    
    //going up
    playerSpeedY = -10;
    
    //disallow jumping while already jumping
    jumping = true;
  }
}


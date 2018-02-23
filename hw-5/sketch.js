/**
 * Clock Buddy
 *
 */

function setup() {
    createCanvas( 500, 500 );
}

let handAngle = 0
let handRotationRate = 0
let handAngleLimbs = 0

function draw() {
    //prevent duplication of cursor animation
    background( 'rgb(255, 165, 0)' );
    //remove cursor when on canvas
    noCursor();

    //rotation rate based on X axis of mouse
    handRotationRate = (mouseX * 0.1) - 30;
    //does something with rotation
    handAngleLimbs = handAngleLimbs + handRotationRate;
    //set clock hand to elapse clockwise over time
    handAngle = handAngle + 0.5;

    //body follows mouse cursor
    translate( mouseX, mouseY );

    //torso
    push();
    strokeWeight( 3 );
    fill( 225 );
    ellipse( 0, 0, width / 8, height / 8 );
    
    //head
    push()
    ellipse( 0, -56, width / 10, height / 10 );
    strokeWeight( 3 );
    fill( 225 );
    translate( 0, -56 )
    rotate( radians(handAngleLimbs) );
    line( 0, 0, 22, 0 )
    pop()

    //left arm
    push()
    ellipse( -45, -20, width / 14, height / 14 );
    strokeWeight( 3 );
    fill( 225 );
    translate( -45, -20 )
    rotate( radians(handAngleLimbs) );
    line( 0, 0, 16, 0 )
    pop()

    //right arm
    push()
    ellipse( 45, -20, width / 14, height / 14 );
    strokeWeight( 3 );
    fill( 225 );
    translate( 45, -20 )
    rotate( radians(handAngleLimbs) );
    line( 0, 0, 16, 0 )
    pop()

    //left leg
    push()
    ellipse( -28, 40, width / 14, height / 14 );
    strokeWeight( 3 );
    fill( 225 );
    translate( -28, 40 )
    rotate( radians(handAngleLimbs) );
    line( 0, 0, 16, 0 )
    pop()

    //right leg
    push()
    ellipse( 28, 40, width / 14, height / 14 );
    strokeWeight( 3 );
    fill( 225 );
    translate( 28, 40 )
    rotate( radians(handAngleLimbs) );
    line( 0, 0, 16, 0 )
    pop()

    //long hand
    push();
    //long hand moves with the Y axis of mouse
    rotate( radians(mouseY) );
    line( 0, 0, 28, 0);
    pop();

    //short hand
    push();
    //short hand rotates clockwise over time
    rotate( radians(handAngle) );
    line( 0, 0, 18, 0);
    pop();
    pop();

}

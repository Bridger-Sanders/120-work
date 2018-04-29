function setup(){
    createCanvas( 1350, 650 );
    noCursor();
    frameRate( 60 );
}

function draw(){
    background( 255, 99, 71 );
    
    //background squares
    for (let k = 0; k <= 1350; k += 50) {
        for (let v = 0; v <= 650; v += 50) {
            push();
            noStroke();
            fill( 0, random(255), random(255) );
            rect( k, v, 50, 50 );
            pop();
        }
    }
    
    strokeWeight(1);
    //top and bottom line grid
    stroke( 0, random(255), random(255));
    for (let i = 0; i <= 1350; i += 5) {
		line( i, 0, mouseX, mouseY );
        line( mouseX, mouseY, i, 650 );
    }
    //left and right line grid
    for (let l = 0; l <= 650; l += 5) {
        line( 0, l, mouseX, mouseY );
        line( mouseX, mouseY, 1350, l );
    }
}

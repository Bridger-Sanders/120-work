//               0     1
var canSize = [ 1350, 650, ];
//         0
let fR = [ 60 ]
//               0   1   2
let backCol = [ 255, 99, 71]
//           0
let zerO = [ 0 ]
//               0
let rectSize = [ 50 ]
//                0
let spaceSize = [ 50 ]
//               0
let lineGrid = [ 5 ]

function setup(){
    createCanvas( canSize[0], canSize[1] );
    noCursor();
    frameRate( fR[0] );
}

function draw(){
    background( backCol[0], backCol[1], backCol[2] );
    
    squareBack( 
        rectSize[0], 
        rectSize[0],
        spaceSize[0],
        spaceSize[0],
        zerO = [0],
        backCol[0],
        backCol[0],
    );
    
    corridor( 
        lineGrid[0], 
        lineGrid[0], 
        zerO[0], 
        backCol[0],
        backCol[0], 
    );
}

function squareBack( xW, yH, sK, sV, cR, cG, cB ){
    //background squares
    for (let k = 0; k <= width; k += sK) {
        for (let v = 0; v <= height; v += sV) {
            push();
            noStroke();
            fill( random(cR), random(cG), random(cB) );
            rect( k, v, xW, yH );
            pop();
        }
    }
}

function corridor( lineTB, lineLR, lineCR, lineCG, lineCB){
    strokeWeight(1);
    //top and bottom line grid
    stroke( random(lineCR), random(lineCG), random(lineCB) );
    for (let i = 0; i <= width; i += lineTB) {
		line( i, 0, mouseX, mouseY );
        line( mouseX, mouseY, i, height );
    }
    //left and right line grid
    for (let l = 0; l <= height; l += lineLR) {
        line( 0, l, mouseX, mouseY );
        line( mouseX, mouseY, width, l );
    }
}


let ballBlack = {};
ballBlack.width = 40;
ballBlack.x = 1356;
ballBlack.y = 10;
ballBlack.delta_x = -2;
ballBlack.delta_y = 2;
ballBlack.scale_x = 2;
ballBlack.scale_y = 2;

let ballDark = {};
ballDark.width = 40;
ballDark.x = 10;
ballDark.y = 10;
ballDark.delta_x = 2;
ballDark.delta_y = 2;
ballDark.scale_x = 2;
ballDark.scale_y = 2;

let ballWhite = {};
ballWhite.width = 40;
ballWhite.x = 10;
ballWhite.y = 658;
ballWhite.delta_x = 2;
ballWhite.delta_y = 2;
ballWhite.scale_x = 2;
ballWhite.scale_y = -2;

let ballLight = {};
ballLight.width = 40;
ballLight.x = 1356;
ballLight.y = 658;
ballLight.delta_x = 2;
ballLight.delta_y = -2;
ballLight.scale_x = -2;
ballLight.scale_y = 2;

function setup() {
    createCanvas(1366, 668);
    background(126);
}



function draw() {

    ballBlack.x += ballBlack.delta_x * ballBlack.scale_x;
    ballBlack.y += ballBlack.delta_y * ballBlack.scale_y;

    if (ballBlack.x >= width || ballBlack.x <= 0) {
        ballBlack.delta_x = -1 * ballBlack.delta_x;
    }
    if (ballBlack.y >= height || ballBlack.y <= 0) {
        ballBlack.delta_y = -1 * ballBlack.delta_y;
    }
    
    fill(0);
    noStroke();
    ellipse(ballBlack.x, ballBlack.y, ballBlack.width, ballBlack.width);

    ballDark.x += ballDark.delta_x * ballDark.scale_x;
    ballDark.y += ballDark.delta_y * ballDark.scale_y;

    if (ballDark.x >= width || ballDark.x <= 0) {
        ballDark.delta_x = -1 * ballDark.delta_x;
    }
    if (ballDark.y >= height || ballDark.y <= 0) {
        ballDark.delta_y = -1 * ballDark.delta_y;
    }
    
    fill(64);
    noStroke();
    ellipse(ballDark.x, ballDark.y, ballDark.width, ballDark.width);
    
    ballWhite.x += ballWhite.delta_x * ballWhite.scale_x;
    ballWhite.y += ballWhite.delta_y * ballWhite.scale_y;

    if (ballWhite.x >= width || ballWhite.x <= 0) {
        ballWhite.delta_x = -1 * ballWhite.delta_x;
    }
    if (ballWhite.y >= height || ballWhite.y <= 0) {
        ballWhite.delta_y = -1 * ballWhite.delta_y;
    }
    
    fill(255);
    noStroke();
    ellipse(ballWhite.x, ballWhite.y, ballWhite.width, ballWhite.width);

    ballLight.x += ballLight.delta_x * ballLight.scale_x;
    ballLight.y += ballLight.delta_y * ballLight.scale_y;

    if (ballLight.x >= width || ballLight.x <= 0) {
        ballLight.delta_x = -1 * ballLight.delta_x;
    }
    if (ballLight.y >= height || ballLight.y <= 0) {
        ballLight.delta_y = -1 * ballLight.delta_y;
    }
    
    fill(192);
    noStroke();
    ellipse(ballLight.x, ballLight.y, ballLight.width, ballLight.width);
}

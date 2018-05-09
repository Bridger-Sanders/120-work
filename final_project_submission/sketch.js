var avatar;
var platform1;
var platform2;
var platform3;
var platform4;


boolean (jumping) = false;

function setup() {
    createCanvas(1350, 650);
    avatar = new Avatar();
    platform1 = new Platform1();
    platform2 = new Platform2();
    platform3 = new Platform3();
    platform4 = new Platform4();
}

function draw() {
    background(0);
    avatar.show();
    platform1.show();
    platform1.update();
    platform2.show();
    platform2.update();
    platform3.show();
    platform3.update();
    platform4.show();
    platform4.update();

    avatar.y_axis += avatar.gravity;
    if (avatar.x_axis + avatar.x_long > platform1.x_axis && 
        avatar.x_axis < platform1.x_axis + platform1.x_long && 
        avatar.y_axis + avatar.y_high + avatar.gravity > (platform1.y_axis - 5) && 
        avatar.y_axis + avatar.gravity < (platform1.y_axis - 5) + platform1.y_high) {
    avatar.gravity = 0;
    jumping = false;
    }
    else if (avatar.x_axis + avatar.x_long + avatar.gravity > (platform1.x_axis - 5) && 
            avatar.x_axis + avatar.gravity < (platform1.x_axis - 5) + platform1.x_long && 
            avatar.y_axis + avatar.y_high > platform1.y_axis && 
            avatar.y_axis < platform1.y_axis + platform1.y_high) {
    avatar.x_axis += -10;
    }
    else if (avatar.x_axis + avatar.x_long > platform2.x_axis && 
        avatar.x_axis < platform2.x_axis + platform2.x_long && 
        avatar.y_axis + avatar.y_high + avatar.gravity > (platform2.y_axis - 5) && 
        avatar.y_axis + avatar.gravity < (platform2.y_axis - 5) + platform2.y_high) {
    avatar.gravity = 0;
    jumping = false;
    }
    else if (avatar.x_axis + avatar.x_long + avatar.gravity > (platform2.x_axis - 5) && 
            avatar.x_axis + avatar.gravity < (platform2.x_axis - 5) + platform2.x_long && 
            avatar.y_axis + avatar.y_high > platform2.y_axis && 
            avatar.y_axis < platform2.y_axis + platform2.y_high) {
    avatar.x_axis += -10;
    }
    else if (avatar.x_axis + avatar.x_long > platform3.x_axis && 
        avatar.x_axis < platform3.x_axis + platform3.x_long && 
        avatar.y_axis + avatar.y_high + avatar.gravity > (platform3.y_axis - 5) && 
        avatar.y_axis + avatar.gravity < (platform3.y_axis - 5) + platform3.y_high) {
    avatar.gravity = 0;
    jumping = false;
    }
    else if (avatar.x_axis + avatar.x_long + avatar.gravity > (platform3.x_axis - 5) && 
            avatar.x_axis + avatar.gravity < (platform3.x_axis - 5) + platform3.x_long && 
            avatar.y_axis + avatar.y_high > platform3.y_axis && 
            avatar.y_axis < platform3.y_axis + platform3.y_high) {
    avatar.x_axis += -10;
    }
    else if (avatar.x_axis + avatar.x_long > platform4.x_axis && 
        avatar.x_axis < platform4.x_axis + platform4.x_long && 
        avatar.y_axis + avatar.y_high + avatar.gravity > (platform4.y_axis - 5) && 
        avatar.y_axis + avatar.gravity < (platform4.y_axis - 5) + platform4.y_high) {
    avatar.gravity = 0;
    jumping = false;
    }
    else if (avatar.x_axis + avatar.x_long + avatar.gravity > (platform4.x_axis - 5) && 
            avatar.x_axis + avatar.gravity < (platform4.x_axis - 5) + platform4.x_long && 
            avatar.y_axis + avatar.y_high > platform4.y_axis && 
            avatar.y_axis < platform4.y_axis + platform4.y_high) {
    avatar.x_axis += -10;
    }
    else if (avatar.y_axis + avatar.y_high > height) {
    //avatar.y_axis = height - avatar.y_high;
    //avatar.gravity = 0;
    //jumping = false;
    avatar.y_axis = height/8;
    avatar.x_axis = width/8;
    jumping = true;
    }
    else {
    avatar.gravity ++;
    }
}

function keyPressed() {
    if (!jumping) {
        avatar.gravity = -20;
        jumping = true;
    
    }
}
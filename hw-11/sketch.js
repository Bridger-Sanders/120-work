//array
let squareAngels = [];
//population
let square_populace = 10;
//background color
let backCol;

function setup() {
    createCanvas(1366, 650);
    //teal
    backCol = color(0, 128, 128);

    //new object
    for (let p = 0; p < square_populace; p++) {
        squareAngels.push( new FlyBro() );
    }
}

function draw() {
    background(backCol);

    //population stops at whatever square_populace equals 
    for (var m = 0; m < squareAngels.length; m++) {
        squareAngels[m].frame();
    }
}


class FlyBro {

    constructor() {
        //proportions
        this.size_width = random(40, 120);
        this.size_height = random(40, 120);
        //start location
        this.location_x_axis = width / 2;
        this.location_y_axis = height / 2;
        //directions
        this.move_horizontal = random(-5, 5);
        this.move_vertical = random(-5, 5);
        //body color
        this.body_color = color(random(128, 255), random(128, 255), random(128, 255));
        //proportions equal to themselves
        this.size_width = this.size_width;
        this.size_height = this.size_height;
        //goggles
        this.goggles_x_axis = this.size_width * 0.165;
        this.goggles_y_axis = (this.size_height / 3) * -1;
        this.goggles_size = this.size_width / 4;
        //wings
        this.wings_x_axis = this.size_width / 3.33 + (this.size_width / 3.33);
        this.wings_y_axis = this.size_height * 0.01;
        this.wings_width = this.size_width * 0.70;
        this.wings_height = this.size_height * 0.5;
        this.left_wing_angle = 0;
        this.right_wing_angle = 0;
        this.left_wing_angle_rate = 2;
        this.right_wing_angle_rate = 2;
        this.left_wing_angle_max = -30;
        this.right_wing_angle_max = -30;
        this.occupied_left_wing = 0;
        this.occupied_right_wing = 0;
    }

    frame() {
        this.wingsAngle();
        this.display();
        this.fly();
    }

    display() {

        push();

        //position of FlyBro
        translate(this.location_x_axis, this.location_y_axis);

        // right wing
        push();
        fill(255);
        rotate(-PI * (this.right_wing_angle * 0.01));
        translate(this.wings_x_axis, this.wings_y_axis);
        scale(1, -1);
        arc(0, 0, this.wings_width, this.wings_height, radians(320), PI, CHORD);
        pop();
        
        //left wing
        push();
        fill(255);
        rotate(-PI * -(this.left_wing_angle * 0.01));
        translate(-this.wings_x_axis, this.wings_y_axis);
        scale(-1, -1);
        arc(0, 0, this.wings_width, this.wings_height, radians(320), PI, CHORD);
        pop();
        
        // body
        fill(this.body_color);
        rect(-this.goggles_x_axis * 3.1, this.goggles_y_axis * 1.55, this.size_width, this.size_height);

        // goggles
        fill(32);
        rect(-this.goggles_x_axis * 3.1, this.goggles_y_axis * 1.32, this.size_width, this.size_height / 5);
        fill(192);
        ellipse(-this.goggles_x_axis, this.goggles_y_axis, this.goggles_size, this.goggles_size);
        ellipse(this.goggles_x_axis, this.goggles_y_axis, this.goggles_size, this.goggles_size);

        pop();
    }

    wingsAngle() {
        //left wing
        if (this.occupied_left_wing === 0) {
            this.left_wing_angle -= this.left_wing_angle_rate;
            if (this.left_wing_angle <= this.left_wing_angle_max) {
                this.left_wing_angle_rate *= -1;
            }
            if (this.left_wing_angle >= 0) {
                this.occupied_left_wing = 0;
                this.left_wing_angle_rate *= -1;
            }
        }
        //right wing
        if (this.occupied_right_wing === 0) {
            this.right_wing_angle -= this.right_wing_angle_rate;
            if (this.right_wing_angle <= this.right_wing_angle_max) {
                this.right_wing_angle_rate *= -1;
            }
            if (this.right_wing_angle >= 0) {
                this.occupied_right_wing = 0;
                this.right_wing_angle_rate *= -1;
            }
        }

    }

    fly() {
        //movement
        this.location_x_axis += this.move_horizontal;
        this.location_y_axis += this.move_vertical;

        if (this.location_x_axis >= width) {
            this.move_horizontal *= -1;
            this.location_x_axis = width - abs(this.move_horizontal);
        }        
        else if (this.location_x_axis <= 0) {
            this.move_horizontal *= -1;
            this.location_x_axis = abs(this.move_horizontal);
        }         
        else if (this.location_y_axis >= height) {
            this.move_vertical *= -1;
            this.location_y_axis = height - abs(this.move_vertical);
        }         
        else if (this.location_y_axis <= 0) {
            this.move_vertical *= -1;
            this.location_y_axis = abs(this.move_vertical);
        }
    }    
}

class Platform1 {
    constructor() {
        var y_p1 = [550, 350]
        this.x_axis = 1350 - (1312.5 - 34.5);
        this.y_axis = random(y_p1);
        this.x_long = windowWidth/4;
        this.y_high = 25;
        this.x_speed = 9;

        this.show = function() {
            stroke(255);
            strokeWeight(5);
            fill(0);
            rect(this.x_axis, this.y_axis, this.x_long, this.y_high);
        }
        this.update = function() {
           this.x_axis -= this.x_speed;
           if (this.x_axis <= -this.x_long) {
            this.x_axis = windowWidth;
            this.y_axis = random(y_p1);
            }
        }
    }
}
class Platform2 {
    constructor() {
        var y_p2 = [450, 350]
        this.x_axis = 1350 - (875 - 23);
        this.y_axis = random(y_p2);
        this.x_long = windowWidth/4;
        this.y_high = 25;
        this.x_speed = 9;

        this.show = function() {
            stroke(255);
            strokeWeight(5);
            fill(0);
            rect(this.x_axis, this.y_axis, this.x_long, this.y_high);
        }
        this.update = function() {
           this.x_axis -= this.x_speed;
           if (this.x_axis <= -this.x_long) {
            this.x_axis = windowWidth;
            this.y_axis = random(y_p2);
            }
        }
    }
}
class Platform3 {
    constructor() {
        var y_p3 = [350, 250]
        this.x_axis = 1350 - (437.5 - 11.5);
        this.y_axis = random(y_p3);
        this.x_long = windowWidth/4;
        this.y_high = 25;
        this.x_speed = 9;

        this.show = function() {
            stroke(255);
            strokeWeight(5);
            fill(0);
            rect(this.x_axis, this.y_axis, this.x_long, this.y_high);
        }
        this.update = function() {
           this.x_axis -= this.x_speed;
           if (this.x_axis <= -this.x_long) {
            this.x_axis = windowWidth;
            this.y_axis = random(y_p3);
           }
        }
    }
}
class Platform4 {
    constructor() {
        var y_p4 = [450, 250]
        this.x_axis = 1350;
        this.y_axis = random(y_p4);
        this.x_long = windowWidth/4;
        this.y_high = 25;
        this.x_speed = 9;

        this.show = function() {
            stroke(255);
            strokeWeight(5);
            fill(0);
            rect(this.x_axis, this.y_axis, this.x_long, this.y_high);
        }
        this.update = function() {
           this.x_axis -= this.x_speed;
           if (this.x_axis <= -this.x_long) {
            this.x_axis = windowWidth;
            this.y_axis = random(y_p4);
           }
        }
    }
}
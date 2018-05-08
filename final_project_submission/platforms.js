class Platform1 {
    constructor() {
        this.x_axis = -284;
        this.y_axis = 600;
        this.x_long = windowWidth/4;
        this.y_high = 25;
        this.x_speed = 10;

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
            }
        }
    }
}
class Platform2 {
    constructor() {
        this.x_axis = 266;
        this.y_axis = 600;
        this.x_long = windowWidth/4;
        this.y_high = 25;
        this.x_speed = 10;

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
            }
        }
    }
}
class Platform3 {
    constructor() {
        this.x_axis = 816;
        this.y_axis = 600;
        this.x_long = windowWidth/4;
        this.y_high = 25;
        this.x_speed = 10;

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
           }
        }
    }
}
class Platform4 {
    constructor() {
        this.x_axis = windowWidth;
        this.y_axis = 600;
        this.x_long = windowWidth/4;
        this.y_high = 25;
        this.x_speed = 10;

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
           }
        }
    }
}
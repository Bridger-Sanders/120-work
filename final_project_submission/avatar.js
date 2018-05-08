class Avatar {
    constructor() {
        this.x_axis = width/8;
        this.y_axis = height/2;
        this.x_long = 25;
        this.y_high = 25;
        this.gravity = 0;

        this.show = function () {
            stroke(255);
            strokeWeight(5);
            fill(0);
            rect(this.x_axis, this.y_axis, this.x_long, this.y_high);    
        }
    }
}

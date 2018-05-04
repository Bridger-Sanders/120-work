var pong;

function setup(){
createCanvas(windowWidth, 650);
pong = new Pong();
noCursor();
}

function draw(){
background(0);
pong.show();
pong.glide();
pong.appear();
pong.move();
pong.bounce();
}

class Pong {
  constructor() {
    //paddle info
    this.paddle_x_axis = 0;
    this.paddle_y_axis = height - 25;
    this.paddle_size_width = 100;
    this.paddle_size_height = 10;
    this.paddle_barrier_right = width - 100;
    this.paddle_barrier_left = 0;
    //paddle visual
    this.show = function () {
      fill(255);
      noStroke();
      rect(this.paddle_x_axis, this.paddle_y_axis, 
        this.paddle_size_width, this.paddle_size_height);
    };
    //paddle position and tracking
    this.glide = function () {
      this.paddle_x_axis = constrain(mouseX - (this.paddle_size_width / 2), 
      this.paddle_barrier_left, this.paddle_barrier_right);
    };
    //ball info
    var fives = [-5, 5]
    this.ball_x_axis = width / 2;
    this.ball_y_axis = height / 2;
    this.ball_size = 10;
    this.ball_move_x_axis = random(fives);
    this.ball_move_y_axis = 5;
    this.ball_radius = this.ball_size / 2;
    //ball visual
    this.appear = function (){
      fill(255);
      noStroke();
      ellipse(this.ball_x_axis, this.ball_y_axis, this.ball_size, this.ball_size);
    };
    //ball movement and restrictions
    this.move = function (){
      this.ball_x_axis += this.ball_move_x_axis;
      this.ball_y_axis += this.ball_move_y_axis;

        if (this.ball_x_axis >= width) {
          this.ball_move_x_axis *= -1;
          this.ball_x_axis = width - abs(this.ball_move_x_axis);
        } 
        else if (this.ball_x_axis <= 0) {
          this.ball_move_x_axis *= -1;
          this.ball_x_axis = abs(this.ball_move_x_axis);
        } 
        else if (this.ball_y_axis >= height) {
          this.ball_x_axis = width / 2; 
          this.ball_y_axis = height / 2;
          this.ball_move_x_axis = random(fives);
          //this.ball_move_y_axis *= -1;
          //this.ball_y_axis = height - abs(this.ball_move_y_axis);
        } 
        else if (this.ball_y_axis <= 0) {
          this.ball_move_y_axis *= -1;
          this.ball_y_axis = abs(this.ball_move_y_axis);
        };
    //collision between ball and paddle
    this.bounce = function (){
      if (this.ball_x_axis + this.ball_size > this.paddle_x_axis && 
          this.ball_x_axis < this.paddle_x_axis + this.paddle_size_width && 
          this.ball_y_axis + this.ball_size + this.ball_move_y_axis > this.paddle_y_axis && 
          this.ball_y_axis + this.ball_move_y_axis < this.paddle_y_axis + this.paddle_size_height) {
          this.ball_move_y_axis *= -1;
        };
      };
    };
  };
}

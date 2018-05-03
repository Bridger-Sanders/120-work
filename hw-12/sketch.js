var paddle;
var ball;
function setup(){
createCanvas(windowWidth, 650);
paddle = new Paddle();
ball = new Ball();
}

function draw(){
background(0);
paddle.show();
paddle.glide();
ball.show();
ball.move();
}

class Paddle {
  constructor() {
    this.paddle_x_axis = 0;
    this.paddle_y_axis = height - 25;
    this.paddle_size_width = 100;
    this.paddle_size_height = 10;
    this.paddle_barrier_right = width - 100;
    this.paddle_barrier_left = 0;
    this.show = function () {
      fill(255);
      noStroke();
      rect(this.paddle_x_axis, this.paddle_y_axis, 
        this.paddle_size_width, this.paddle_size_height);
    };
    this.glide = function () {
      this.paddle_x_axis = constrain(mouseX - (this.paddle_size_width / 2), 
      this.paddle_barrier_left, this.paddle_barrier_right);
    };
  };
}

class Ball {
  constructor() {
    var five = [5, -5]
    this.ball_x_axis = width / 2;
    this.ball_y_axis = height / 2;
    this.ball_size = 10;
    this.ball_move_x_axis = random(five);
    this.ball_move_y_axis = 5;
    this.show = function (){
      fill(255);
      noStroke();
      ellipse(this.ball_x_axis, this.ball_y_axis, this.ball_size, this.ball_size);
    };
    this.move = function (){
        this.ball_x_axis += this.ball_move_x_axis;
        this.ball_y_axis += this.ball_move_y_axis;

        if (this.ball_x_axis >= width) {
          this.ball_move_x_axis *= -1;
          this.ball_x_axis = width - abs(this.ball_move_x_axis);
        } else if (this.ball_x_axis <= 0) {
          this.ball_move_x_axis *= -1;
          this.ball_x_axis = abs(this.ball_move_x_axis);
        } else if (this.ball_y_axis >= height) {
          this.ball_move_y_axis *= -1;
          this.ball_y_axis = height - abs(this.ball_move_y_axis);
        } else if (this.ball_y_axis <= 0) {
          this.ball_move_y_axis *= -1;
          this.ball_y_axis = abs(this.ball_move_y_axis);
      }
    };
  };
}

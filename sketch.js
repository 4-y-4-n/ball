var ball= {
  color:["blue","red","green"],
  ball_x:(370),
  ball_y:30,
  ball_radius: 25,
  ballVelocityx:0
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.ball_x,ball.ball_y,ball.ball_radius)
 ball.ball_x=ball.ball_x+ball.ballVelocityx
 ball.ballVelocityx=ball.ballVelocityx-0.1
  fill(ball.color[1])
}
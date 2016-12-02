var x = [],
  y = [],
  angle = [],
  segNum = 10,
  segLength = 5, 
  //speed
  ballX = 50,
  ballY = 50,
  ballXDirection = 3,
  ballYDirection = 3;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

function setup() {
  createCanvas(710, 400);
  strokeWeight(9);
  stroke(255, 100);
}

function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
  
  strokeWeight(20);
  ballX = ballX + 1.0 * ballXDirection;
  ballY = ballY + 0.8 * ballYDirection;
  if(ballX > width-25 || ballX < 25) {
    ballXDirection *= -1;
  }
  if(ballY > height-25 || ballY < 25) {
    ballYDirection *= -1;
  }
  ellipse(ballX, ballY, 10, 10);
  collision();
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

//function called collison
//check to see if the the mousex and mousey is with 5 pixels of the ball
//the mosue x <= ball locationX + half the size of the ball, ie. 5
//th mouse y <= ball lcoationY + half the size of the ball, ie. 5
//if true console hit
function collision() {
  if((mouseX <= ballX + 5 && mouseX > ballX - 5) && (mouseY <= ballY + 5 && mouseY > ballY - 5)) {
    console.log("good job"); 
    console.log("seg length is", segLength)
    segLength = segLength + 0.5;
  }
}
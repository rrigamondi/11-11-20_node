let socket = io();

let myColor = 'white';
let strokeSize = 25;

socket.on('connect', newConnection);
socket.on('mouseBroadcast', otherMouse);
socket.on('color', setColor);

function newConnection(){
  console.log("your id: " + socket.id);
}

function setColor(assignedColor){
  myColor = assignedColor;
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background('black');
  noStroke();
}

function draw() {
  // put drawing code here
}

function mouseMoved(){
  push();
    fill(myColor);
    stroke(myColor);
    strokeWeight(strokeSize);
    line(mouseX, mouseY, pmouseX, pmouseY);
    noStroke()
    ellipse(mouseX, mouseY, strokeSize);
    let message = {
      x: mouseX,
      y: mouseY,
      px: pmouseX,
      py: pmouseY,
      col: myColor
    };
    socket.emit('mouseMoved', message);
  pop();
}

function otherMouse(data){
  push();
    fill(data.col);
    stroke(data.col);
    strokeWeight(strokeSize);
    line(data.x, data.y, data.px, data.py);
    noStroke()
    ellipse(data.x, data.y, strokeSize);
  pop();
}

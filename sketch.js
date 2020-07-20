// Global Variables
let h;
let sRotation;
let mRotation;
let hRotation;

function setup() {
  // Canvas Props
  const cnv = createCanvas(400, 400);
  cnv.style("margin-left", "auto");
  cnv.style("margin-right", "auto");
  
  sRotation = second() * 6;
  setInterval(function() {sRotation = second() * 6}, 1000);
  
  // Misc Props
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  // Assign Times
  h = hour();
  h = checkTime(h);
  
  // Assign Rotation
  sRotation += 0.1;
  mRotation = minute() * 6 + (second() / 10);
  hRotation = h * 30 + (minute() / 10) + (second() / 100);
  
  // Change Time Text
  document.getElementById("time").innerHTML = `${h}:${minute()}:${second()}`;

  drawClock();
}

// Functions
function checkTime(time) {
  if (time >= 13) {
    return time - 12;
  } else if (time == 12) {
    return 0;
  } else {
    return time;
  }
}

function drawClock() {
  // Draw Clock Frame
  push();
  translate(width / 2, height / 2);
  noFill();
  stroke(0);
  strokeWeight(8);
  ellipse(0, 0, height - 50);
  pop();

  // Draw Hour Hand
  push();
  translate(width / 2, height / 2);
  stroke(255, 0, 0);
  strokeWeight(6);
  rotate(hRotation);
  line(0, 0, 0, -100);
  pop();

  // Draw Minute Hand
  push();
  translate(width / 2, height / 2);
  stroke(0, 255, 0);
  strokeWeight(6);
  rotate(mRotation);
  line(0, 0, 0, -150);
  pop();
  
  // Draw Second Hand
  push();
  translate(width / 2, height / 2);
  stroke(0, 0, 255);
  strokeWeight(6);
  rotate(sRotation);
  line(0, 0, 0, -150);
  pop();
}

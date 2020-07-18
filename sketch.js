// Global Variables
let h;
let m;
let s;
let hRotation;
let mRotation;
let sRotation;

function setup() {
  // Canvas Props
  const cnv = createCanvas(400, 400);
  cnv.style("margin-left", "auto");
  cnv.style("margin-right", "auto");

  // Misc Props
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  // Assign Times
  h = hour();
  h = checkTime(h);
  m = minute();
  s = second();

  // Change Time Text
  document.getElementById("time").innerHTML = `${h}:${m}:${s}`;

  // Assign Rotation Values
  hRotation = map(h, 0, 11, 0, 360);
  mRotation = map(m, 0, 59, 0, 360);
  sRotation = map(s, 0, 59, 0, 360);

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
  stroke(0);
  strokeWeight(6);
  rotate(hRotation);
  line(0, 0, 0, -100);
  pop();

  // Draw Minute Hand
  push();
  translate(width / 2, height / 2);
  stroke(0);
  strokeWeight(6);
  rotate(mRotation);
  line(0, 0, 0, -150);
  pop();
}

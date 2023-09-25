let pos;
let vel;
let acc;
let radius = 20;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 1);
  acc = createVector(0, 0);
  mouse = createVector();
  follow = createVector();
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  update();
  mouseTrack();
  mousePress();
  display();
}

function display() {
  fill('black');
  ellipse(pos.x, pos.y, 2 * radius);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.1);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
}

function mouseTrack() {
  //   console.log(vel);
  mouse.set(mouseX, mouseY);
  follow = p5.Vector.sub(mouse, pos);
  if (mouse.x < pos.x || mouse.x > pos.x) {
    vel.add((follow.x * 0.01) / 10, 0);
  }
  if (mouse.y < pos.y || mouse.y > pos.y) {
    vel.add(0, (follow.y * 0.01) / 10);
  }
  line(mouseX, mouseY, pos.x, pos.y);
}

function mousePress() {
  if (mouseIsPressed === true) {
    console.log('누름');
    if (mouse.x < pos.x || mouse.x > pos.x) {
      vel.add((-1 * (follow.x * 0.01)) / 5, 0);
    }
    if (mouse.y < pos.y || mouse.y > pos.y) {
      vel.add(0, (-1 * (follow.y * 0.01)) / 5);
    }
  }
}

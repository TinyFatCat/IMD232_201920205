let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 2);
  acc = createVector(0, 1);
  mouse = createVector();
  centerValue = createVector();
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  update();
  mouseTrack();
  infiniteEdge();
  display();
  displayVector();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(1);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
}

function display() {
  fill('black');
  ellipse(pos.x, pos.y, 2 * radius);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function mouseTrack() {
  mouse.set(mouseX, mouseY);
  centerValue = p5.Vector.sub(mouse, pos);
  // translate(pos.x, pos.y);
  stroke('black');
  strokeWeight(2);
  line(mouseX, mouseY, pos.x, pos.y);
}

function displayVector() {
  stroke('red');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
  stroke('blue');
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);
}

//공에 필요한 애니메이션들을 함수화하면 수백 개도 금세 만들 수 있음.

//과제는 써놓은 그대로, 마우스를 쫒아 등가속 운동하는 원...
//점점 나에게 빨리 쫓아오는.. vel, acc 모두 있어야만 할 것.
//가장 큰 힌트: 원이 마우스로 향하는 벡터가 있을 것임.
//벡터 subtraction 연산 참조, 중앙에서 향하는 벡터를 만들었듯이,
//마우스로 향하는 벡터도 만들 수 있을 것.
//

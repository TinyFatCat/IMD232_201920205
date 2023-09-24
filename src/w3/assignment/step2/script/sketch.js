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
//공에 필요한 애니메이션들을 함수화하면 수백 개도 금세 만들 수 있음.

//과제는 써놓은 그대로, 마우스를 쫒아 등가속 운동하는 원...
//점점 나에게 빨리 쫓아오는.. vel, acc 모두 있어야만 할 것.
//가장 큰 힌트: 원이 마우스로 향하는 벡터가 있을 것임.
//벡터 subtraction 연산 참조, 중앙에서 향하는 벡터를 만들었듯이,
//마우스로 향하는 벡터도 만들 수 있을 것.
//

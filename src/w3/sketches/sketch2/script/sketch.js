let pos;
let vel;
let acc;
let radius = 25;
//변수를 따로 관리해주면 값을 바꿀 때 편하다.

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  // vel = createVector(3, 5);
  vel = createVector(0, 0);
  acc = createVector(0, 1);
  console.log(pos);
  console.log(vel);
  ellipse(pos.X, pos.Y, 50);
  //필수 과정
  //화면 정중앙 정렬
}

function draw() {
  background(255);
  update();
  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if ((pos.x, pos.y, 50)) vel.x *= -1;
  // if (pos.x - radius < 0 || pos.x + radius > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y - radius < 0 || pos.y + radius > height) {
  //   vel.y *= -1;
  // }
  infiniteEdge();
  display();
}

//수식의 경우 미리 계산하고 가는 게 좋다. 헷갈리지 않도록...

//어느 방향으로, 얼마만큼의 빠르기냐? = Velocity 속력
//벡터: 어떤 방향으로 얼마나... "각도"와 "길이"

//화면 엣지에 닿으면 튕겨지지만, 좌표가 0에 달하는 중앙에 와야지만 튕겨짐
//이를 해결하기 위해 반지름을 변수로 따로 빼고, 그 값만큼을 빼서 해결.

function display() {
  fill('red');
  ellipse(pos.x, pos.y, 2 * radius);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  //가속도, 길이는 무조건 1이고 방향은 랜덤
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
  infiniteEdge();
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

//공에 필요한 애니메이션들을 함수화하면 수백 개도 금세 만들 수 있음.

//과제는 써놓은 그대로, 마우스를 쫒아 등가속 운동하는 원...
//점점 나에게 빨리 쫓아오는.. vel, acc 모두 있어야만 할 것.
//가장 큰 힌트: 원이 마우스로 향하는 벡터가 있을 것임.
//벡터 subtraction 연산 참조, 중앙에서 향하는 벡터를 만들었듯이,
//마우스로 향하는 벡터도 만들 수 있을 것.
//

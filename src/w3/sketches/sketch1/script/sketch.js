let posX;
let posY;
let posXAdd = 3;
let posYAdd = -2;
//변수를 따로 관리해주면 값을 바꿀 때 편하다.

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('white');
  posX = width / 2;
  posY = height / 2;
  //화면 정중앙 정렬
}

function draw() {
  background(255);
  posX += posXAdd;
  posY += posYAdd;
  ellipse(posX, posY, 50);
}

//수식의 경우 미리 계산하고 가는 게 좋다. 헷갈리지 않도록...

//벡터: 어떤 방향으로 얼마나... "각도"와 "길이"

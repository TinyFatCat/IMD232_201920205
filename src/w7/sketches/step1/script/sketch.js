let vehicle;
let mVec;
let debug = true;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  vehicle = new Vehicle(width / 2, height / 2, 16, 5, 0.1, color(330, 100, 50));
  mVec = createVector();
  colorMode(RGB, 255, 255, 255);
  background(255);
}

function draw() {
  background(255);
  mVec.set(mouseX, mouseY);
  vehicle.seek(mVec);
  vehicle.update();
  vehicle.display();
}

//cohesion, align, separation
//align 주변 개체들의 평균값을 구해서 거기에 같이 방향을 맞춘다
//separation 일정 반경에 벡터가 들어오면 다른 벡터로 이동하는 것
//cohesion 무리에서 잘 안 벗어나도록,,

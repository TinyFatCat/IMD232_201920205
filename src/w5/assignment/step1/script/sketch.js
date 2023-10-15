const cNum = 8;
const rNum = 8;
let angleBegin = 0;
let angleBeginVel;
// let angleBeginVel = (TAU / 360) * 1;
// let amplitude = [100, 100];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  colorMode(HSL, 360, 100, 100, 100);
  angle = createVector(0, TAU / 4);
  angleBeginVel = (TAU / 360) * 1;

  background(100, 100, 100);
}

function draw() {
  noStroke();
  background(100, 100, 100);
  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      //   push();
      //   translate();
      //   rotate();
      //   pop();
    }
  }
  for (let a = 0; a < cNum; a++) {
    for (let b = 0; b < rNum; b++) {
      hueValue = (360 / cNum) * a;
      stroke(hueValue, 100, 30);
      //   stroke((255 / cNum) * a, (255 / rNum) * b, 255);
      let x = ((a + 1) * width) / (cNum + 1);
      let y = ((b + 1) * height) / (rNum + 1);
      ellipse(x, y, 40);
      //   ellipse(x, y, 20 * angle, x, y, 20 * angle);
      //   rotate(angle);
      //   angle += angleBeginVel;
    }
  }
}

function periodToAngleVel(periodAsFrame) {
  return TAU / periodAsFrame;
}

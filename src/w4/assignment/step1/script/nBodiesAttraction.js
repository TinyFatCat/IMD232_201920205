let bodies = [];
let G = 1;
let showVector = false;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  reset();
}

function draw() {
  background(255);
  for (let i = 0; i < 31; i++) {
    for (let j = 0; j < 31; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  for (let i = 0; i < 31; i++) {
    bodies[i] = new Body(random(width), random(height), random(0.1, 2));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

// 모든 물체가 서로를 중력으로 끌어당기도록 한다.
// 초기위치는 화면 안의 임의의 지점으로 한다.
// 9번 예제 와는 달리, 16에서 100사이의 임의의 질량값을 갖도록 한다.
// 반지름은 질량의 제곱근에 비례해 20에서 50사의의 값을 갖도록 한다.
// 물체의 갯수는 20개를 넘어야하고, 반드시 어레이를 사용한다.
// 클릭하면 새로 시작해야한다.

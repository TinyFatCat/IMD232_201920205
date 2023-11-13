let { Engine, Bodies, Composite } = Matter;

let engine = Engine.create();

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  rectMode(CENTER);

  background(255);
}

function draw() {
  Engine.update(engine);
  background(255);
}

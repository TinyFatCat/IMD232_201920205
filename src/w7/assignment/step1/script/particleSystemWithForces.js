let emitter;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  colorMode(HSL, 360, 100, 100);
  let h = random(360);
  let s = 100;
  let l = 50;
  fill(h, s, l);
  emitter = new Emitter(random(width), -50);
}

function draw() {
  background(255);
  emitter.addParticle();
  let gravity = createVector(0, 0.1);
  emitter.applyGravity(gravity);
  emitter.run();
  console.log('[현재 파티클 갯수: ', emitter, '<<<');
}

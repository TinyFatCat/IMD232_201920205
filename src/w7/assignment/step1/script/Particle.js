class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-2, 0);
    this.vel.rotate(80);
    this.lifespan = 400.0;
    this.radius = 20;
    this.mass = -1;
    // this.angle = 0;
    // this.angleVel = (TAU / 360) * 0.01;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.pos.add(this.vel);
    this.lifespan -= 1;
    // this.angle += this.angleVel;
  }

  display() {
    noStroke();
    square(this.pos.x, this.pos.y, this.radius);
  }

  applyForce(force) {}

  isDead() {
    return this.lifespan < 0.0;
  }
}

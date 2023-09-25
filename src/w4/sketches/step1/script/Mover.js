class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2);
    let gravity;
    let wind;
  }

  applyForce(force) {
    // force.div(this,mass);
    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    // mult를 적어주는 이유..
    // pos, vel, acc 세 값이 있는데
    // 값을 초기화시키지 않으면 계속 add가 추가되면서
    // acc의 값이 비정상적으로 증폭됨.
    // 매번 계산할 때마다 초기화하고 새로운 값을 ㅂ다아야함.
  }
  edgeBounce() {
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    } else if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }
  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
    //this가 안 붙으면 누구의 무엇을 묻는지 애매하므로 반드시
    //this를 넣기.
  }
}

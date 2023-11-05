class Vehicle {
  constructor(x, y, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    //반드시 질량을 만들 필요는 없음. 모든 물체 질량을 똑같이 하는 것이라면.
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.color = color;
  }

  seek(target) {
    // target.sub(this.pos);
    let desired = p5.Vector.sub(target, this.pos);
    // desired.normalize()
    // desired.mult(this.speedMx)
    desired.setMag(this.speedMx);
    let steering = p5.Vector.sub(desired, this.vel);
    if (debug) {
      push();
      translate(this.pos.x, this.pos.y);
      noFill();
      stroke(127);
      line(0, 0, desired.x * 10, desired.y * 10);
      stroke(0, 0, 255);
      line(0, 0, desired.x * 10, desired.y * 10);
      pop();
    }
    steering.limit(this.forceMx);
    this.applyForce(steering);
  }
  //타겟에서 나까지의 위치를 구하기... 타겟의 위치에서 내 위치를 빼야 함 (순서 유의)

  applyForce(force) {
    //force.div(this.mass)
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    let angle = this.vel.heading();
    //아크탄젠트 돌린 값을 그대로 뱉어줌
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    //60도법 각도를 넣어주면 radians 각도로 바꿔줌
    endShape(CLOSE);
    pop();
  }
}

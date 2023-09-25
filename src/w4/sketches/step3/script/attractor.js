// class Attractor {
//   attract(mover) {
//     let force = p5.Vector.sub(this.position, mover.position);
//     //벡터 간의 차이를 구하기

//     let distance = force.mag();
//     //거리가 멀수록 중력이 약하게 작용.
//     distance = constrain(distance, 5, 25);
//     let strength = (G * this.mass * mover.mass) / distance ** 2;
//     //거리가 멀어질수록 힘이 몇 배로 급격히 약해진다.
//     force.setMag(strength);
//     return force;
//   }
// }

class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attract(mover) {
    let dirVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVector.mag();
    let strength = (this.mass * mover.mass) / distance ** 2;
    return dirVector.setMag(strength);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}

class Vehicle {
  //Vehicle 클래스 생성;
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //컨스트럭터; 넣은 값을 받아 아래 속성 생성
    this.pos = createVector(x, y); //pos(위치)벡터 생성
    this.vel = p5.Vector.random2D(); //속도 벡터, 임의 각도에 2D벡터 생성
    this.acc = createVector(); //가속도 벡터
    this.mass = mass; //질량값
    this.rad = rad; //반지름
    this.speedMx = speedMx; //속도값 제한
    this.forceMx = forceMx; //힘 최대치 제한
    this.neighborhooodRad = 50; //근처에 들어오는 원 반지름값; 아래 cohesion 구현을 위함
    this.color = color; //컬러값 할당을 위해 넣음
  }
  addVehicle(traffic) {
    this.traffic.push(traffic);
  }

  cohesion(others) {
    //응집; 근처의 개체들의 평균 위치값을 구하고, 무리를 지어 다니도록 구현
    let cnt = 0; // count 변수 선언
    const steer = createVector(0, 0); //steer 벡터 생성;
    others.forEach((each) => {
      //other 배열에 있는 개체 각각에 적용되도록.
      if (each !== this) {
        //others와 each가 다를 경우...
        const distSq = // distSq = others의 포지션x에서 개체의 포지션x를 뺀 값의 2 거듭제곱 + others의 포지션y에서 포지션y를 뺀 값의 2 거듭제곱
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          // distSq가 neighborhooodRad의 2 거듭제곱보다 작으면
          steer.add(each.pos); // steer 벡터에 개체의 속도 추가
          cnt++; // count 변수값 1 추가
        }
      }
    });
    if (cnt > 0) {
      //위 cnt 값이 0보다 크면;
      steer.div(cnt); //cnt를 스칼라로 나눔
      steer.sub(this.pos); //steer에서 포지션 벡터를 뺀다
      steer.setMag(this.speedMx); //steer의 크기를 speedMax;속도한계값으로 설정
      steer.sub(this.vel); //vel; 속도 벡터를 뺀다
      steer.limit(this.forceMx); //steer의 최대값을 forceMx 값으로 제한
    }
    return steer; //steer 값 반환
  }

  align(others) {
    //정렬; 근처의 개체들에 대한 평균 속도를 계산함.
    let cnt = 0; // count 변수 선언
    const steer = createVector(0, 0); // steer 벡터 생성
    others.forEach((each) => {
      //other 배열에 있는 개체 각각에 적용되도록.
      if (each !== this) {
        //others와 each가 다를 경우...
        const distSq = // distSq = others의 포지션x에서 개체의 포지션x를 뺀 값의 2 거듭제곱 + others의 포지션y에서 포지션y를 뺀 값의 2 거듭제곱
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          // distSq가 neighborhooodRad의 2 거듭제곱보다 작으면
          steer.add(each.vel); // steer 벡터에 개체의 속도 추가
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++; // count 값 1 추가
        }
      }
    });
    if (cnt > 0) {
      // count가 0 보다 클 때;
      steer.div(cnt); //cnt를 스칼라로 나눔
      steer.setMag(this.speedMx); //steer의 크기를 speedMax;속도한계값으로 설정
      steer.sub(this.vel); //vel; 속도 벡터를 뺀다
      steer.limit(this.forceMx); //forceMX 값으로 제한
    }
    return steer; //steer 값을 반환
  }

  separate(others) {
    //separate; 분리. 산개 구현.
    let cnt = 0; // count 선언;
    const steer = createVector(0, 0); //steer 벡터 생성;
    others.forEach((each) => {
      //other 배열에 있는 개체 각각에 적용되도록.
      if (each !== this) {
        //others와 each가 다를 경우...
        const dist = this.pos.dist(each.pos); //others(무리)에서 개체 사이의 포지션 값을 dist라는 변수에 할당
        if (dist > 0 && this.rad + each.rad > dist) {
          //dist가 0보다 크고, others의 rad와 개체의 rad를 합한 값이 dist보다 크면;
          const distNormal = dist / (this.rad + each.rad); //거리 평균값을 구한다. dist에서 others의 rad와 개체의 rad를 합한 값을 빼서 할당함.
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); //pos에서 개체 pos를 뺀 값을 towardmeVec에 할당
          towardMeVec.setMag(1 / distNormal); //towardMeVec의 크기를 1을 거리 평균값으로 나눈 값으로 설정함.
          steer.add(towardMeVec); //towardMeVec 값을 추가.
          cnt++; // count 값 1 추가
        }
      }
    });
    if (cnt > 0) {
      // count가 0 보다 클 때;
      steer.div(cnt); //count 값으로 나눈다
      steer.setMag(this.speedMx); //speedMx 값으로 벡터 크기를 설정함
      steer.sub(this.vel); //속도 벡터를 뺀다
      steer.limit(this.forceMx); //forceMx 값으로 제한
    }
    return steer; //steer 값 반환.
  }

  applyForce(force) {
    //힘(force) 적용
    const forceDivedByMass = p5.Vector.div(force, this.mass); //힘을 - 질량으로 나눈 값
    this.acc.add(forceDivedByMass); //위에서 힘을 질량으로 나눈 값을 가속도에 추가
  }

  update() {
    //매번 업데이트; 계속 적용시키기 위함
    this.vel.add(this.acc); //속도 추가
    this.vel.limit(this.speedMx); //위에서 넣은 속도 한계치 이상으로 올라가지 않음
    this.pos.add(this.vel); //위치값 추가
    this.acc.mult(0); //속도가 한번에 무한히 증가하지 않도록 매번 초기화
  }

  borderInfinite() {
    //화면 밖을 벗어나면 반대편에 나타나게 함
    if (this.pos.x < -infiniteOffset) {
      //오프셋
      //개체의 포지션x값이 오프셋(sketch.js에 존재) 음수값보다 작으면; 즉 화면에서 더 좌측 밖으로 나가있으면
      this.pos.x = width + infiniteOffset; //포지션x에 화면 오프셋값 추가해 옮긴다. 즉 우측으로 이동한다.
    } else if (this.pos.x > width + infiniteOffset) {
      //포지션x가 아까와 같이 합한 값보다 클 경우;
      this.pos.x = -infiniteOffset; // 포지션x가 오프셋 음수값과 같아진다. 즉 좌측으로 이동한다.
    }
    if (this.pos.y < -infiniteOffset) {
      //포지션y의 경우를 말함. 오프셋 음수값보다 작으면; 화면에서 상단 이상으로 나가있으면,
      this.pos.y = height + infiniteOffset; //포지션y에 화면 height + 오프셋값을 추가해 옮긴다; 하단으로 이동함.
    } else if (this.pos.y > height + infiniteOffset) {
      //포지션y가 height + 오프셋을 합한 값보다 클 경우;
      this.pos.y = -infiniteOffset; //포지션y가 오프셋 음수값과 같아진다. 상단으로 이동함.
    }
  }

  display() {
    //디스플레이; 화면 표시
    push(); //드로잉 설정 저장
    translate(this.pos.x, this.pos.y); // 물체가 이동될 포지션값 지정
    rotate(this.vel.heading()); //속도에 따라 벡터 회전각도를 계산해 추가
    noStroke(); //스트로크 제거
    fill(this.color); //color값을 받아와 색을 바꾸기
    beginShape(); //도형 기록, 아래 점들 좌표를 받아 셰이프 생성.
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE); //도형 기록 종료
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop(); //드로잉 설정 복구
  }
}

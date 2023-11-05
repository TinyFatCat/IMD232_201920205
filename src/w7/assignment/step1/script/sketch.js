let traffic; //traffic이라는 변수를 선언
let infiniteOffset = 80; //오프셋 설정; 화면 밖 어디 이상으로 벗어날 경우;

function setup() {
  //셋업
  setCanvasContainer('canvas', 3, 2, true); //어디에 캔버스를 만들지 지정, 비율, 플렉스 설정
  colorMode(HSL, 360, 100, 100, 100); //컬러모드 설정, HSL 기준 채도,
  background('white'); //배경색 설정
  traffic = new Traffic();
  for (let n = 0; n < 10; n++) {
    //처음 시작할 때 화면에 나타나는 개체 추가하기
    traffic.addVehicle(random(width), random(height)); //랜덤한 위치에 Vehicle 생성
  }
}

function draw() {
  //드로우2`
  background('white'); //배경색 설정
  traffic.run(); //실행
}

function mouseDragged() {
  //마우스 드래그 기능
  traffic.addVehicle(mouseX, mouseY); //클릭한 좌표에 Vehicle 추가
}

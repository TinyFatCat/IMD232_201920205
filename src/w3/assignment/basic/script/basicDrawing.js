function setup() {
  setCanvasContainer('p5-canvas', 3, 1.25, true);
  // createCanvas(windowWidth, windowHeight / 0.5);
  background('white');
  console.log(width);
  console.log(height);
}

function draw() {
  background('#d5dbdb');
  fill(255);
  rectMode(CENTER);
  strokeWeight(0);

  //curtain2
  rectMode(CORNER);
  fill('#4c6185');
  rect(1150, 0, 1200, 800);
  fill('#37455e');
  rect(1190, 0, 35, 800);
  fill('#37455e');
  rect(1270, 0, 35, 800);
  fill('#37455e');
  rect(1350, 0, 35, 800);
  fill('#37455e');
  rect(1430, 0, 35, 800);
  fill('#37455e');
  rect(1510, 0, 35, 800);
  fill('#37455e');
  rect(1590, 0, 35, 800);
  fill('#37455e');
  rect(1670, 0, 35, 800);
  fill('#37455e');
  rect(1750, 0, 35, 800);

  //window
  fill('#999d9e');
  rect(250, 40, 790, 360);
  fill('#9dd6f2');
  rect(250, 60, 775, 320);
  fill('#b9bdbc');
  rect(300, 290, 500, 90);
  fill('#b59f81');
  rect(725, 180, 300, 200);
  fill('#d9b789');
  rect(725, 170, 300, 30);
  fill('#a6ab9a');
  rect(170, 90, 300, 150);
  fill('#9aadac');
  rect(200, 230, 300, 150);
  fill('#79969c');
  rect(200, 210, 300, 30);
  strokeWeight(0);
  fill('#999d9e');
  rect(570, 40, 13, 360);
  fill('#7c7e80');
  rect(580, 60, 13, 322);

  //curtain1
  rectMode(CORNER);
  strokeWeight(0);
  fill('#4c6185');
  rect(200, 0, 200, 800);
  fill('#37455e');
  rect(320, 0, 35, 800);
  fill('#37455e');
  rect(240, 0, 35, 800);

  //bed
  rectMode(CENTER);
  fill('#96cfd6');
  rect(600, 650, 800, 300, 0, 15, 0, 0);
  fill('#828f8e');
  rect(600, 700, 820, 300);
  fill('#7291b8');
  rect(620, 520, 720, 60, 10, 10, 0, 0);
  fill('#adada1');
  rect(600, 550, 820, 20);

  //monitor1
  stroke('#303030');
  strokeWeight(24);
  line(1450, 330, 1570, 470);
  line(1450, 570, 1570, 470);
  strokeWeight(0);
  fill('#282929');
  rect(1450, 300, 400, 220);
  fill('#141414');
  rect(1450, 300, 386, 206);

  //monitor2
  stroke('#303030');
  strokeWeight(24);
  line(1000, 330, 900, 470);
  line(1050, 580, 900, 470);
  strokeWeight(0);
  fill('#282929');
  rect(1000, 300, 400, 220);
  fill('#141414');
  rect(1000, 300, 386, 206);
  //monitor3
  fill('#282929');
  rect(1300, 480, 320, 180, 10, 10, 10, 10);
  fill('#141414');
  rect(1300, 480, 270, 140);

  //keyboard
  rectMode(CORNER);
  fill('#406682');
  rect(1255, 544, 30, 20, 5, 5, 0, 0);
  fill('#406682');
  rect(1288, 544, 30, 20, 5, 5, 0, 0);
  fill('#464a4d');
  rect(1321, 544, 70, 20, 5, 5, 0, 0);
  fill('#406682');
  rect(1394, 544, 30, 20, 5, 5, 0, 0);
  fill('#406682');
  rect(1427, 544, 30, 20, 5, 5, 0, 0);
  fill('#406682');
  rect(1462, 544, 50, 20, 5, 5, 0, 0);
  fill('#383b3d');
  rect(1250, 550, 270, 20);

  //mouse
  fill('#80898a');
  rect(1620, 545, 10, 15, 20, 20, 0, 0);
  fill('#c1c6c7');
  rect(1600, 550, 50, 20, 25, 25, 0, 0);

  //desk
  rectMode(CENTER);
  fill('#473531');
  rect(1450, 650, 1200, 170);
  fill('#2b1e1c');
  rect(1450, 660, 1200, 170);
  fill('#0d0a0a');
  rect(1450, 660, 550, 120);

  //bookshelf
  fill('#523832');
  rect(1900, 400, 200, 1000);
  rect(1890, 0, 230, 100);
  fill('#2e201c');
  rect(1920, 400, 200, 1000);
  rect(1910, 0, 230, 100);

  //chair
  fill('#262928');
  rect(1770, 395, 30, 30);
  fill('#568775');
  rect(1650, 700, 250, 160, 15, 15, 0, 5);
  fill('#7db39f');
  rect(1650, 627, 250, 15, 15, 15, 5, 5);
  fill('#568775');
  rect(1770, 334, 180, 90, 10, 10, 10, 10);
  fill('#568775');
  rect(1770, 600, 230, 380, 15, 15, 5, 5);
  fill('#7db39f');
  rect(1687, 334, 15, 90, 10, 5, 5, 10);
  fill('#7db39f');
  rect(1664, 600, 18, 380, 15, 5, 5, 5);
  //chair_supp
  fill('#262928');
  rect(1625, 640, 35, 140, 5, 5, 5, 5);
  fill('#262928');
  rect(1600, 580, 160, 25, 5, 5, 5, 5);
  //closet
  fill('#40321f');
  rect(0, 400, 400, 1000);
  fill('#dbd6ce');
  rect(98, 325, 145, 1000);
  fill('#40321f');
  ellipse(105, 350, 32, 32);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight / 1.5);
}

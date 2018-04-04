//Palette: 2: 'f3b103' 'ead556' 'c4bb14' 1: 'd5d9e4' '2f4263' b: '2e3440' '79888f'

boroughs = []; totals = []; maintained = [];
y = []; n = []; m = []; l = []; s = []; o = [];

var colours = ["#FFC100", "#F88600", "#AD3A59", "#8B1E42", "#47295E"];
var state = 0;

function preload() {
  table1 = loadTable('assets/BoroughMaintain.csv', 'csv', 'header');
  table2 = loadTable('assets/BoroughExtant.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1907, 950);

  button = createButton('Toggle');
  button.mousePressed(toggleState);
  button.position(50, 50);

  loadData();
}

function draw() {
  displayData();
}

function toggleState() {
  state = (state == 0) ? 1 : 0;
  // console.log(state);
  displayData();
}

function loadData() {
  // console.log(table);
  boroughs = table1.getColumn("borough");
  totals = table1.getColumn('Total Number');
  maintained = table1.getColumn("MaintainedByParks");

  y = table2.getColumn("Yes");
  n = table2.getColumn("No");
  m = table2.getColumn("Unconfirmed");
  l = table2.getColumn("Loaned");
  s = table2.getColumn("Storage");
  // console.log(table2);
}

function displayData() {
  displayLines();
  noStroke();
  if (state == 0) {
    x = 450;
    for (var i = 0; i < 5; i++) {
      h = map(totals[i], 0, 500, 0, 600);
      fill('#d5d9e4');
      rect(x, 150, 100, h);
      h = map(maintained[i], 0, 500, 0, 600);
      fill('#2f4263');
      rect(x, 150, 100, h);

      x += 200;
    }
  } else {
    x = 450;
    for (var i = 0; i < 5; i++) {
      h = map(y[i], 0, 500, 0, 600);
      fill('#f3b103');
      rect(x, 150, 100, h)

      h1 = map(n[i], 0, 500, 0, 600);
      fill('#83d300');
      rect(x, 150+h, 100, h1);

      h2 = map(m[i], 0, 500, 0, 600);
      fill('#760000');
      rect(x, 150+h+h1, 100, h2);

      h3 = map(l[i], 0, 500, 0, 600);
      fill('#d5d9e4');
      rect(x, 150+h+h1+h2, 100, h3);

      h4 = map(s[i], 0, 500, 0, 600);
      fill('#2f4263');
      rect(x, 150+h+h1+h2+h3, 100, h4);

      x += 200;
    }   
  }
  stroke('#2e3440');
  line(400, 150, 1450, 150);
  line(400, 150, 400, 750);
  displayKey();
}

function displayKey() {
  noStroke();
  if (state == 0) {
    fill('#d5d9e4');
    rect(50, 200, 20, 20);
    fill('#2f4263');
    rect(50, 250, 20, 20);

    fill('#2e3440')
    textSize(15);
    text("Total Monuments", 80, 215);
    text("Maintained by Parks", 80, 265);
  } else {
    fill('#f3b103');
    rect(50, 200, 20, 20);
    fill('#83d300');
    rect(50, 250, 20, 20);
    fill('#760000');
    rect(50, 300, 20, 20);
    fill('#d5d9e4');
    rect(50, 350, 20, 20);
    fill('#2f4263');
    rect(50, 400, 20, 20);

    fill('#2e3440')
    textSize(15);
    text("Exists", 80, 215);
    text("Doesn't Exist", 80, 265);
    text("Unconfirmed", 80, 315);
    text("Loaned", 80, 365);
    text("In Storage", 80, 415);
  }
}

function displayLines() {
  background('#79888f');
  fill('#2e3440');

  push();
  textSize(45);
  textAlign('CENTER');
  text("NYC Park Monuments from the 1900s", 550, 60);
  pop();

  for (var i = 0; i < 5; i++) {
    x = map(i, 0, 5, 150, 750);
    line(395, x, 405, x);

    push();
    fill('#2e3440');
    noStroke();
    textSize(20);
    text(i*100, 340, x+5);
    pop();
  }

  push();
  x = 450;
  for (var i = 0; i < 5; i++) {
    fill('#2e3440');
    noStroke();
    textSize(25);
    text(boroughs[i], x, 140);
    x += 200;
  }
  pop();
}
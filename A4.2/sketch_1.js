var table;
var tableEthnicity;
var leadingCauses;
var deathRates;
var ethnicityTable;

var state = 0;
var button;
var buttonText = "Explore by Bin Type";

function preload(){
  table = loadTable('Public_Recycling_Bins_Borough.csv', 'csv', 'header');
  tableEthnicity = loadTable('Type.csv', 'csv');
}

function setup() {
  button = createButton(buttonText);
  button.mousePressed(toggleState);
  button.position(820, 15);

  createCanvas(1200,500);
  loadData();

  textSize(25);
  noStroke();
}

function loadData() {
  borough = table.getColumn("Borough");
  amount = table.getColumn("Amount");
  ethnicityTable = tableEthnicity.getArray();
}

function draw(){
  background(255,255,255);
  if (state === 0 ){
    fill("#86B956");
    textSize(30);
    text("Public Recycling Bins Count by Borough",100,40);
    var lineheight = 30;
    var rectheight = 20;
    textSize(12);

    for (var i = 0; i < amount.length; i++) {
      fill("#57AFCE");
      var rectwidth = map(amount[i], 0, 163.75, 0, 1000);
      rect(200, (i+2)*lineheight, rectwidth, -1*rectheight)

      fill("#86B956");
      text(borough[i], 0, (i+2)*lineheight);
    }
  }
  else {
    fill("#86B956");
    textSize(30);
    text("Public Recycling Bins Count by Type",100,40);
    var lineheight = 30;
    var rectheight = 20;
    for (var i = 0; i < ethnicityTable.length; i++) {
      totalwidth=100;
       for (var j = 0; j < 5; j++){
      R_colour=190+j*100;
      G_colour=30+j*100;
      B_colour=70+j*100;
      fill(R_colour,G_colour,B_colour);

      //rect (100, 100, 60, 50);
      var rectwidth = map(ethnicityTable[i][j], 0, 163.75, 0, 1000);
      rect(totalwidth, (i+2)*lineheight, rectwidth, -1*rectheight);
      totalwidth=totalwidth+rectwidth;
    }
    }

    push();
    // Legend
    // textSize(14);
    // fill(210, 80, 150);
    // rect(30, 40, 30, 30);
    // fill(255, 255, 255);
    // text("Top 10 Cause", 65, 60);
    //
    // fill(190, 30, 70);
    // rect(170, 40, 30, 30);
    // fill(255, 255, 255);
    // text("Top 3 Cause", 205, 60);

    // textSize(18);
    // // Rows of grid: ethnicity
    // fill(255, 255, 255);
    // text("Asian",25,120);
    // text("Black",25,165);
    // text("Hispanic",5,210);
    // text("White",25,255);

    // Columns of grid: leading causes
    // rotate(PI / 2.0);
    // for (var i = 0; i < leadingCauses.length; i++) {
    //   text(leadingCauses[i], 280, -100-(i*45));
    // }
    pop();
  }
}

function toggleState() {
  state = (state == 0) ? 1 : 0;
  button.elt.textContent = (state == 0) ? "Explore by Bin Type" : "Explore by Borough";
}

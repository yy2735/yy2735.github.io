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

  textSize(18);
  noStroke();
}

function loadData() {
  borough = table.getColumn("Borough");
  amount = table.getColumn("Amount");
  ethnicityTable = tableEthnicity.getArray();
}

// function draw(){
// fill(240,90,40)
// rect(50, 350,10,10)
//
// fill(225,110,60)
// rect(50, 370,10,10)
//
// fill(255,130,80)
// rect(50, 390,10,10)
//
// fill(255,150,100)
// rect(50, 4100,10,10)
// }

function draw(){
  background(255,255,255);
  if (state === 0 ){
    fill("#86B956");
    textSize(30);
    text("Public Recycling Bins Count by Borough",50,30);
    var lineheight = 30;
    var rectheight = 20;
    textSize(12);

    for (var i = 0; i < amount.length; i++) {
      fill("#57AFCE");
      var rectwidth = map(amount[i], 0, 163.75, 0, 1000);
      rect(100, (i+2)*lineheight, rectwidth, -1*rectheight)

      fill("#86B956");
      text(borough[i], 0, (i+2)*lineheight);
    }
  }
  else {
    for (var i = 0; i < amount.length; i++) {
      textSize(12);
      var lineheight = 30;
      fill("#86B956");
      text(borough[i], 0, (i+2)*lineheight);
    }
    textSize(10);
    fill("#BCDFEB");
    rect(50, 250,10,10);
    text("Greenthumb",70,260);

    fill("#CF74E2");
    rect(50, 270,10,10);
    text("Indoor",70,280);

    fill("#E29F74");
    rect(50, 290,10,10);
    text("Outdoor",70,300);

    fill("#CAE274");
    rect(50, 310,10,10);
    text("Subproperty",70,320);

    fill("#86B956");
    textSize(30);
    text("Public Recycling Bins Count by Type",50,30);
    var lineheight = 30;
    var rectheight = 20;
    for (var i = 0; i < ethnicityTable.length; i++) {
      totalwidth=100;
       for (var j = 0; j < 4; j++){
         if (j === 0) {
           fill("#BCDFEB");
         }
         else if (j===1){
           fill("#CF74E2");
         }
         else if (j===2){
           fill("#E29F74");
         }
         else if (j===3){
           fill("#CAE274");
         }
      // R_colour=240+j*20;
      // G_colour=90+j*20;
      // B_colour=40+j*20;
      // fill(R_colour,G_colour,B_colour);

      var rectwidth = map(ethnicityTable[i][j], 0, 163.75, 0, 1000);
      rect(totalwidth, (i+2)*lineheight, rectwidth, -1*rectheight);
      totalwidth=totalwidth+rectwidth;
    }
    }

    push();

    pop();
  }
}


function toggleState() {
  state = (state == 0) ? 1 : 0;
  button.elt.textContent = (state == 0) ? "Explore by Bin Type" : "Explore by Borough";
}

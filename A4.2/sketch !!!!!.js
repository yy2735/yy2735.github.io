var table;
var Borough;
var Amount;

function preload(){
  table = loadTable('2014_data_pivot.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1000, 1000);
  loadData();
  noLoop();
}

function loadData() {
  Borough = table.getColumn("Borough");
  Amount = table.getColumn("Amount");
  console.log(Borough);
  console.log(Amount);
}

function draw(){
  background(100, 100, 100, 200);
  fill(255, 255, 255);
  textSize(20);
  text("Public Recycling Bins Count by Borough", 20,20);
  var lineheight = 25;
  var rectheight = 15;
  textSize(12);

  for (var i = 0; i < Amount.length; i++) {
    fill(190, 30, 70);
    var rectwidth = map(Amount[i], 0, 163.75, 0, 1000);
    rect(0, (i+2)*lineheight, rectwidth, -1*rectheight)

    fill(255, 255, 255);
    text(Borough[i], 0, (i+2)*lineheight);
  }
}
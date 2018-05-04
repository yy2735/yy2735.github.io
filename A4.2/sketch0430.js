var table;
var borough;
var amount;

var state = 0;
var button;
var buttonText = "Bin Type";

function preload(){
  table = loadTable('Public_Recycling_Bins_Borough.csv', 'csv', 'header');
}

function setup() {
  button = createButton(buttonText);
  button.mousePressed(toggleState);
  button.position(820, 15);

  createCanvas(1000, 500);
  loadData();

  textSize(25);
  noLoop();
}

function loadData() {
  borough = table.getColumn("Borough");
  amount = table.getColumn("Amount");
}

function draw(){
  background(255,255,255);
  if (state === 0 ){
    background(255,255,255);
    fill("#86B956");
    textSize(30);
    text("Public Recycling Bins Count by Borough",50,20);
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
}
function toggleState() {
  state = (state == 0) ? 1 : 0;
  button.elt.textContent = (state == 0) ? "Explore by ethnicity" : "Explore by death rate";
}

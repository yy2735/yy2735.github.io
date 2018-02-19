
var x = 250
var y = 250
function setup(){
  createCanvas(500,500);
}

function draw(){
  noStroke();
  background(100);

  // Put time in variables for easy testing
  
var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  // Testing min state
  // var s = 0;
  // var m = 0;
  // var h = 0;
  // Testing max state
  // var s = 60;
  // var m = 60;
  // var h = 24;

    fill(255,255,0,150) // blue
 arc(x,y,400,400,0,h,PIE)

  fill(0,0,255,150) // yellow
 arc(x,y,300,300,0,m,OPEN)

  fill(255,0,0,150) // red
  arc(x,y,200,200,0,s,CHORD);

    fill(0);
  text('The time right now is:\n' + hour + ':'+ minute +':'+ second,400,450);
 

}
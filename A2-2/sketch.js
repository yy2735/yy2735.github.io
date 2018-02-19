function setup() {
  createCanvas(640, 640);

}

function draw(){
  background(80,255,255);

  var h=hour();
  var m=minute();
  var s=second();

  var heightvar=map(s,0,60,0,height)
  fill(0);
  text('The time right now is:\n' + h + ':'+ m +':'+ s,500,600);
  ellipse(width/2, height/2, m*10,m*10);



  push();
  translate(width/2,height/2)
  rotate(PI/s);
  rect(0,0,100,10);
  pop();


push();
  translate(width/2,height/2)
  rotate(PI/s);
  triangle(10,10,50,50,100,100);
  pop();
}

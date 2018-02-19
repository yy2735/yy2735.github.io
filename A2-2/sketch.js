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

  
  push();
  rect(10,10,h*10,h*10);
  pop();


 
  push();
  fill(255,255,255)
  scale(m,m);
  rect(10,10,10,10);
  pop();

  ellipse(250,250, height/2, s*10,s*10);

  text('The time right now is:\n' + h + ':'+ m +':'+ s,25,600);
}

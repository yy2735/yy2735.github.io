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
  ellipse(250,250, height/2, s*10,s*10);

push();
fill(255,255,255)
  rect(10,10,m*10,m*10);
  pop();

 push();
  scale(h,h);
  rect(10,10,10,10);
  pop();




}

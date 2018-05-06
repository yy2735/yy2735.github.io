

 var table;
 var la=[];
 var long=[];




function preload() {

  table = loadTable('project.csv', 'csv', 'header');
  console.log(table);


}

function setup() {
  width = 2000;
  length = 2000;
  createCanvas(width, length);
  background(0);
  latitude = table.getColumn("a");
  longtitude = table.getColumn("b");
  type = table.getColumn("Site_type");
  console.log(latitude);
  console.log(longtitude);
  for (var i = 0; i < latitude.length; i++) {
    var l = Number(latitude[i]);
    var m = Number(longtitude[i]);
    append(la, l);
    append(long, m);

  }
  console.log(la);
  console.log(long);
  ra = 6;
  angleMode(DEGREES);

  var button = createButton("Show Bin Type");
  button.mousePressed(showType);

  var lafirst = max(la);
  var lasecond = max(la);

 for (var i = 0; i < 1000; i++) {
  var h = la[i];
  if ( h < lafirst )
  { lasecond = lafirst;
    lafirst = h;

 }

}

 var longfirst = min(long);
  var longsecond = min(long);

 for (var i = 0; i < 1000; i++) {
  var h = long[i];
  if ( h > longfirst )
  { longsecond = longfirst;
    longfirst = h;

 }
}




for (var i = 0; i < 1000; i++) {
  var h = map(la[i], lasecond, max(la), 0, length);
  var k = map(long[i], min(long), longsecond, 0, width);


  ellipse(k, length-h, ra, ra);




 }


}

function showType() {
  var lafirst = max(la);
  var lasecond = max(la);

 for (var i = 0; i < 1000; i++) {
  var h = la[i];
  if ( h < lafirst )
  { lasecond = lafirst;
    lafirst = h;

 }

}

 var longfirst = min(long);
  var longsecond = min(long);

 for (var i = 0; i < 1000; i++) {
  var h = long[i];
  if ( h > longfirst )
  { longsecond = longfirst;
    longfirst = h;

 }
}




for (var i = 0; i < 1000; i++) {

  var h = map(la[i], lasecond, max(la), 0, length);
  var k = map(long[i], min(long), longsecond, 0, width);

  if (type[i]==="Subproperty") {
    fill("#CAE274");
    ellipse(k, length-h, ra, ra);
  }
  //ellipse(k, length-h, ra, ra);
  if (type[i]==="Indoor") {
    fill("#CF74E2");
    ellipse(k, length-h, ra, ra);
  }

  if (type[i]==="Outdoor") {
    fill("#E29F74");
    ellipse(k, length-h, ra, ra);
  }

  if (type[i]==="Greenthumb") {
    fill("#BCDFEB");
    ellipse(k, length-h, ra, ra);
  }



 }

}





function draw() {
noStroke();
fill(255);
textSize(15);
text('NYC Public Recycling Bins Type', width-500, length-50);
fill(100,30,170);
ellipse(width-500, length-80, ra*2, ra*2);
text('Subproperty', width-500+10, length-80+ra);
fill("#86B956");
ellipse(width-400, length-80, ra*2, ra*2);
text('Indoor', width-400+10, length-80+ra);
fill("#57AFCE");
ellipse(width-300, length-80, ra*2, ra*2);
text('Outdoor', width-300+10, length-80+ra);
fill(255, 255, 255);
ellipse(width-200, length-80, ra*2, ra*2);
text('Greenthumb', width-200+10, length-80+ra);





}

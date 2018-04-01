var headlines = [];
var sign = [
"?", "!"];
var punc = [
".", ","];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "5048c9901c224a338bb10cf3b8f0b2b3"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(1000, 2000);
  background(255);

  textSize(10);
  textAlign(LEFT);

  noLoop(); 

  extractHeadlines();
}

function draw() {

  var lineheight = 100;
  var margin = .2;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], '');

    var nextX = 0;

      var rectheight = 4;


//draw sign to circles


    for (var j = 0; j < words.length; j++) {
      stroke(255, 102, 102);
      strokeWeight(0.1);
      line(i*lineheight,0, nextX, i*lineheight);

      //text
      noFill();
      noStroke();
      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+'  ');
    

      //define size of alphabets
      var str1 = 'abcdefghijklmnopqrstuvwxyz';
      var str2 = split(str1, '');
      var size = (str2.indexOf(words[j])+1);

      //define size of numbers
      var str3 = '0123456789';
      var str4 = split(str3, '');
      var sizen = (str4.indexOf(words[j])+1);



      //signs 
      if (sign.includes(words[j].toLowerCase())) {
        noStroke();
        fill(255, 179, 102);
        rect(nextX,i*lineheight,40,40);
        //punc
      } else if (punc.includes(words[j])){
        noStroke();
        fill(51,204,204,50);
        ellipse(nextX,i*lineheight,20,20);
        //alphabets
      } else if (str2.includes(words[j].toLowerCase())){
        fill(179, 255, 102);
        ellipse(nextX,i*lineheight,size,size);

        if (mouseX > margin && mouseX < width - margin && mouseY < 120 + margin+i*lineheight && mouseY > 80 + margin+i*lineheight+(-1*rectheight))
      {
      push();
      fill("#99ff33");
      textStyle(BOLD);
      textFont('Comic Sans MS');
      textSize(50 + (mouseY / width)*1000);
      textAlign(LEFT);
      text(headlines[i], 50, 50 + i*lineheight); 
      pop();
    } else {
      fill("#3366ff")
      textSize(12)
      textFont('Helvetica');
      text(headlines[i], 100, 100 + i*lineheight);    }

      };
      
    }
  }


}




function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

    append(headlines, h);
  }


  // console.log(headlines); // make sure counted data looks as expected
}
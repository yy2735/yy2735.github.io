var headlines = [];
var section = [];
var subsection = [];
var maxHeadLen, minHeadLen;

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "4c76a36ff8bf459b98a064a3a0e9299b"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

}

function setup() {
  createCanvas(1000,1000);
  background(0);

  textSize(10);
  textAlign(LEFT);


  extractHeadlines();
}

function draw() {
  background(0);

 
  var margin = 1;
  translate(margin, margin);

  var lineheight = 30;
  var rectheight = 0;




  for (var i = 0; i < headlines.length; i++) {
    fill("#3366ff");
    rect(2, 2 + i*lineheight, 2*headlines[i].length)
    or (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');



    if (mouseX > margin && mouseX < width - margin && mouseY < 120 + margin+i*lineheight && mouseY > 80 + margin+i*lineheight+(-1*rectheight)) {
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

  }
}

function extractHeadlines() {
  

  for (var i = 0; i < (nytResponse.results.length); i++) {
    var h = nytResponse.results[i].title;
   
    if (!maxHeadLen) {
      maxHeadLen = h.length;
    } else if (h.length > maxHeadLen) {
      maxHeadLen = h.length;
    }

    if (!minHeadLen) {
      minHeadLen = h.length;
    } else if (h.length < minHeadLen) {
      minHeadLen = h.length;
    }
    append(headlines, h);
    
  }

}
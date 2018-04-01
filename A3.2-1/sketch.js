var headlines = [];
var section = [];
var subsection = [];
var maxHeadLen, minHeadLen;

function preload() {

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "4c76a36ff8bf459b98a064a3a0e9299b"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
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

 
  var margin = 10;
  var lineheight = 30;
  var rectheight = 10;
  translate(margin, margin);



  for (var i = 0; i < headlines.length; i++) {

    fill("#ff9900");
    

    if (mouseX > margin && mouseX < width - margin && mouseY < 120 + margin+i*lineheight && mouseY > 80 + margin+i*lineheight+(-1*rectheight)) {
      push();
      fill("#99cc00");
      textStyle(BOLD);
      textFont('Helvetica');
      textSize(10 + (mouseY / margin)*2);
      textAlign(RIGHT);
      text(headlines[i], 100, 100 + i*lineheight); 
      pop();
    } else {
      fill("#00A6FF")
      textSize(12)
      textFont('Helvetica');
      text(headlines[i], 0, 100 + i*lineheight);    }

  }
}

function extractHeadlines() {
  //console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < (nytResponse.results.length); i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

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
<<<<<<< HEAD
  }
=======
    //console.log(ss);
  }


}


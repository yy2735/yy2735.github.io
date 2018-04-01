var headlines = [];
var sections = [];

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
  createCanvas(500, 1000);
  background(0);

  textSize(10);
  textAlign(LEFT);

  noLoop(); 

  extractHeadlines();
  extractSections();
}

function draw() {
  background(0);

  var lineheight = 50;
  var margin = 10;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');

    var nextX = 0;

    for (var j=0; j<words.length; j++) {
      // draw headline
      if (sections[i] == 'sex') {
        fill(255,255,0);
      } else {
        fill(0,0,255);
      }
      text(words[j]+ ' white house', nextX, i*lineheight);
      nextX += textWidth(words[j]+' ');
    }
    
  }
}

function extractHeadlines() {

 

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.
    append(headlines, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
}

function extractSections() {
  for (var i = 0; i < nytResponse.results.length; i++) {
    var section = nytResponse.results[i].section;
    append(sections, section);
  }
  //console.log(sections);
}


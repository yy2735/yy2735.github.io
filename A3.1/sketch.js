var headlines=[];
var desFacets = [];
var perFacets = [];
var deFwords = []
var Facets = []
var tSize = 10
var maxHeadLen, minHeadLen;

function preload(){

  // input your key and url
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "c61d1d6e94c6472d8cbf1b113c8c3ed6"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);

  
}

function setup(){
  createCanvas(600,1000);
  background(0)
  textSize(tSize)
  textAlign(LEFT,TOP)
  //noLoop();
  console.log(nytResponse)
  extractHeadlines();
  makewords();
}



function makewords(){
  for (var i = 0; i<desFacets.length; i++){ 
    // toString() make input into string
    var def = desFacets[i].toString().split(",");
    // console.log(def)
    
    // // console.log(deF)
    append(deFwords,def)
    // console.log(1212)
  }
  console.log(deFwords)
}
function draw() {
  background(0);

  var lineheight = 20;
  var rectheight = 10
  var margin = 40;
  fill(255)
  textSize(20)
  text("NY Times Headlines", 0, 10);







  for (var i = 0; i < headlines.length; i++) {
    //draw rectangle
    // fill(100);
    // var rectwidth = map(headlines[i].length, minHeadLen, maxHeadLen, margin, width-margin-300);
    // rect(0, 100 + i*lineheight, rectwidth, -1*rectheight)

    //draw headline, section, subsection
    if (mouseX>width/2){


      textSize(tSize)
      fill(128,0,0,[128]);
      textAlign(LEFT)
      textStyle(BOLD)
      text(perFacets[i],0, 100 + i*lineheight-lineheight/2);
      fill(255);
      textAlign(RIGHT)

      text(desFacets[i], 600, 100 + i*lineheight);


    } else{
      //console.log("check")

      textSize(tSize)
      textAlign(LEFT)
      fill(255);

      text(headlines[i], 0, 100 + i*lineheight);

    }






  }
}

function extractHeadlines() {

  //console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var df = nytResponse.results[i].des_facet;
    var pf = nytResponse.results[i].per_facet;
    var h = nytResponse.results[i].title;
    var facets = nytResponse.results[i].per_facet +" "+nytResponse.results[i].des_facet
  
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
    append(desFacets, df);
    append(perFacets, pf);
    append(Facets,facets)
    //console.log(ss);
  }

  //console.log(headlines); // make sure counted data looks as expected
  //console.log(maxHeadLen);
  //console.log(minHeadLen);
}
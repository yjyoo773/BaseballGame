// Create List of 3 digit distinct number
function ranNumList() {
  var ranList = [];
  for (var i = 100; i <= 999; i++) {
    var num = i.toString();
    if (num[0] == num[1] || num[1] == num[2] || num[0] == num[2]) {
      continue;
    } else if (num[0] == "0") {
      continue;
    }
    ranList.push(num);
  }
  return ranList;
}

// Set guesing number
const randomNum = ranNumList()[Math.floor(Math.random() * ranNumList().length)];

// Basic Algorthim for Game

var ansString = randomNum.toString();
// var guessString = guess.toString();

var outcome;
var outcomeNum = 0;
var resultArray = Array();

function getResultAddToArray(ansString) {
  var strike = 0;
  var ball = 0;
  var guessString = document.getElementById("buttonNumberInput").innerHTML;

  for (var i = 0; i < ansString.length; i++) {
    if (ansString[i] == guessString[i]) {
      strike++;
    } else if (guessString.includes(ansString[i])) {
      ball++;
    }
  }
  outcome = "S: " + strike + " B: " + ball;
  resultArray[outcomeNum] = outcome + " || " + guessString;
  outcomeNum++;
  document.getElementById("buttonNumberInput").innerHTML = "";
  if (ansString === guessString){
    if(alert('You Win!')){}
    else    window.location.reload(); 
  }
  x = Array();
}

function displayResultArray() {
  let e = "<hr/>";
  for (var y = 0; y < resultArray.length; y++) {
    e += `${resultArray[y]}<br/>`;
  }
  document.getElementById("results").innerHTML = e;
}

// Detect button click
var x = Array();
for (var i = 0; i < document.querySelectorAll(".nums").length; i++) {
  document.querySelectorAll(".nums")[i].addEventListener("click", function () {
    var clickNum = this.innerHTML;
    x.push(clickNum);
    if (x.length > 3) {
      x.shift();
    }
    // console.log(x.slice(0, 3));
    x = x.slice(0,3);
    document.getElementById("buttonNumberInput").innerHTML = x
      .join("")
      .toString();
  });
}


function resetInputNumber(){
  var emptyArray = Array();
  document.getElementById("buttonNumberInput").innerHTML = emptyArray;
  x = Array();
}
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

// Take Input and get result. Add result to array
function getResultAddToArray(ansString) {
  var strike = 0;
  var ball = 0;
  var guessString = document.getElementById("buttonNumberInput").innerHTML;

  resetLight();
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
  if (ansString === guessString) {
    if (alert("You Win!")) {
    } else window.location.reload();
  }
  makeGreen(strike);
  makeRed(ball);
  x = Array();
}

// Change Light
function makeRed(numBall) {
  for (var i = 0; i < numBall; i++) {
    document.querySelectorAll(".ballLight .bulb")[i].style.backgroundColor =
      "red";
  }
}

function makeGreen(numStrike) {
  for (var i = 0; i < numStrike; i++) {
    document.querySelectorAll(".strikeLight .bulb")[i].style.backgroundColor =
      "green";
  }
}

function resetLight() {
  var bulbsLength = document.querySelectorAll(".bulb").length;
  for (var i = 0; i < bulbsLength; i++)
    document.querySelectorAll(".bulb")[i].style.backgroundColor = "black";
}

// Display Array to result box
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
    x = x.slice(0, 3);
    document.getElementById("buttonNumberInput").innerHTML = x
      .join("")
      .toString();
  });
}

document.addEventListener("keypress", function () {
  var clickNum = this.innerHTML;
  x.push(clickNum);
  if (x.length > 3) {
    x.shift();
  }
  // console.log(x.slice(0, 3));
  x = x.slice(0, 3);
  document.getElementById("buttonNumberInput").innerHTML = x
    .join("")
    .toString();
});

function resetInputNumber() {
  var emptyArray = Array();
  document.getElementById("buttonNumberInput").innerHTML = emptyArray;
  x = Array();
}

window.addEventListener("load",function(){
	document.querySelector(".trigger_popup")
	.addEventListener("click",function(){
		document.querySelector('.hover_bkgr')
		.style.display = 'block'
	});
	document.querySelector(".hover_bkgr")
	.addEventListener("click",function(){
		document.querySelector('.hover_bkgr')
		.style.display = 'none'
	});
	document.querySelector(".popupCloseButton")
	.addEventListener("click",function(){
		document.querySelector('.hover_bkgr')
		.style.display = 'none'
	});
})
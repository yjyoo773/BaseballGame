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

let ansString = randomNum.toString();

// string that shows number of strikes and balls
var outcome;
// integer to increase outcome array
var outcomeNum = 0;
// empty array used to store outcome.
var resultArray = Array();

// Take Input and get result. Add result to array
function getResultAddToArray(ansString) {
  let strike = 0;
  let ball = 0;
  let guessString = document.getElementById("buttonNumberInput").innerHTML;

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
  inputArray = Array();
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

// array storing input by buttons
var inputArray = Array();
for (var i = 0; i < document.querySelectorAll(".nums").length; i++) {
  document.querySelectorAll(".nums")[i].addEventListener("click", function () {
    var clickNum = this.innerHTML;
    inputArray.push(clickNum);
    if (inputArray.length > 3) {
      inputArray.shift();
    }
    inputArray = inputArray.slice(0, 3);
    document.getElementById("buttonNumberInput").innerHTML = inputArray
      .join("")
      .toString();
  });
}

// input using keyboard ==> not functional yet
document.addEventListener("keypress", function () {
  var clickNum = this.innerHTML;
  inputArray.push(clickNum);
  if (inputArray.length > 3) {
    inputArray.shift();
  }
  inputArray = inputArray.slice(0, 3);
  document.getElementById("buttonNumberInput").innerHTML = inputArray
    .join("")
    .toString();
});

function resetInputNumber() {
  let emptyArray = Array();
  document.getElementById("buttonNumberInput").innerHTML = emptyArray;
  inputArray = Array();
}

window.addEventListener("load", function () {
  document
    .querySelector(".trigger_popup")
    .addEventListener("click", function () {
      document.querySelector(".hover_bkgr").style.display = "block";
    });
  document.querySelector(".hover_bkgr").addEventListener("click", function () {
    document.querySelector(".hover_bkgr").style.display = "none";
  });
  document
    .querySelector(".popupCloseButton")
    .addEventListener("click", function () {
      document.querySelector(".hover_bkgr").style.display = "none";
    });
});

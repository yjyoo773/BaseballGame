var outcome; // string that shows number of strikes and balls
var outcomeNum = 0; // integer to increase outcome array
var resultArray = Array(); // empty array used to store outcome.

const randomNum = ranNumList()[Math.floor(Math.random() * ranNumList().length)]; // Set guesing number
const btnNumInput = document.getElementById("buttonNumberInput");
const results = document.getElementById("results");
const nameInputForm = document.getElementById("nameInputForm");
const nameInputText = document.getElementById("numInputText");
const numInputFrom = document.getElementById("numberInputForm");
const nameInput = document.getElementById("nameInput");

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

// Take Input and get result. Add result to array
function getResultAddToArray(ansString) {
  let strike = 0;
  let ball = 0;
  let guessString = btnNumInput.innerHTML;

  resetLight();
  for (var i = 0; i < ansString.length; i++) {
    if (ansString[i] == guessString[i]) {
      strike++;
    } else if (guessString.includes(ansString[i])) {
      ball++;
    }
  }
  outcome = "S: " + strike + " B: " + ball;
  if (outcome && guessString.length == 3) {
    resultArray[outcomeNum] = outcome + " || " + guessString;

    outcomeNum++;
  }
  btnNumInput.innerHTML = "";
  if (ansString === guessString) {
    saveRank();
    alert("You Win!");
    window.location.reload();
  }

  changeLight(ball, strike);
  inputArray = Array();
}

// Change scoreboard light
function changeLight(numBall, numStrike) {
  for (var i = 0; i < numStrike; i++) {
    document.querySelectorAll(".strikeLight .bulb")[i].style.backgroundColor =
      "green";
  }
  for (var i = 0; i < numBall; i++) {
    document.querySelectorAll(".ballLight .bulb")[i].style.backgroundColor =
      "red";
  }
}

// Turn light back to black
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
  results.innerHTML = e;
  return resultArray;
}

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
    btnNumInput.innerHTML = inputArray.join("").toString();
  });
}

// // input using keyboard ==> not functional yet
// document.addEventListener("keypress", function () {
//   var clickNum = this.innerHTML;
//   inputArray.push(clickNum);
//   if (inputArray.length > 3) {
//     inputArray.shift();
//   }
//   inputArray = inputArray.slice(0, 3);
//   document.getElementById("buttonNumberInput").innerHTML = inputArray
//     .join("")
//     .toString();
// });

function resetInputNumber() {
  let emptyArray = Array();
  btnNumInput.innerHTML = emptyArray;
  inputArray = Array();
}

// Create pop-up for game rules
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

// After submitting name, show input number
function switchInputNameToNum() {
  let name = nameInput.value;
  if (name) {
    // document.getElementById("nameInputForm").style.display = 'none';
    nameInputForm.style.display = "none";
    nameInputText.innerHTML = name + " guess your number";
    numInputFrom.style.display = "block";
  }
}

// LOCAL STORAGE

// function GameScore(name,guessCount){
//   this.name = name;
//   this.guessCount = guessCount;
//   GameScore.records.push(this);
//   localStorage.gameScoreArray = JSON.stringify(GameScore.records);
// }

var defaultScore = [
  { name: "Dwight", guesses: 3 },
  { name: "Jim", guesses: 6 },
  { name: "Michael", guesses: 5 },
  { name: "Toby", guesses: 14 },
];

// function loadLocalStorage(){
//   if(!localStorage.getItem('gameScoreArray')){
//     for(var i in defaultScore){
//       new GameScore(defaultScore[i].name,defaultScore[i].guessCount);
//     }
//   }
//   else{
//     GameScore.records = [];
//     var lsScore = JSON.parse(localStorage.gameScoreArray);
//     for (var i in lsScore){
//       new GameScore(lsScore[i].name,lsScore[i].guessCount);
//     }
//   }
// }

// Reset 
function reset(){

}




// HighScores
const mostRecentScore = localStorage.getItem("mostRecentScore");
const ranks = JSON.parse(localStorage.getItem("ranking")) || [];

function saveRank() {
  const ranking = {
    username: nameInput.value,
    guessCount: resultArray.length,
  };
  // console.log(ranking);
  ranks.push(ranking);
  ranks.sort(function (a, b) {
    return a.guessCount - b.guessCount;
  });
  ranks.splice(10);
  localStorage.ranking = JSON.stringify(ranks);
}

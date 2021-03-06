var outcome; // string that shows number of strikes and balls
var outcomeNum = 0; // integer to increase outcome array
var resultArray = Array(); // empty array used to store outcome.

const randomNum = ranNumList()[Math.floor(Math.random() * ranNumList().length)]; // Set guesing number
const btnNumInput = document.getElementById("buttonNumberInput");
const results = document.getElementById("results");
const nameInputForm = document.getElementById("nameInputForm");
const numInputText = document.getElementById("numInputText");
const numInputForm = document.getElementById("numberInputForm");
const nameInput = document.getElementById("nameInput");

// Default ranks to be used
var defaultScore = [
  { name: "Dwight", guesses: 5 },
  { name: "Jim", guesses: 6 },
  { name: "Michael", guesses: 5 },
  { name: "Toby", guesses: 14 },
  { name: "Pam", guesses: 8 },
  { name: "Ryan", guesses: 11 },
  { name: "Kevin", guesses: 18 },
  { name: "Angela", guesses: 7 },
  { name: "Phylis", guesses: 9 },
  { name: "Andy", guesses: 15 },
];

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
      "#39FF14";
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

// array storing input by numbered buttons
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
    nameInputForm.style.display = "none";
    resetInputNumber();
    numInputText.innerHTML = name + " Guess Your Number";
    numInputForm.style.display = "block";
  }
}

// HighScores
const mostRecentScore = localStorage.getItem("mostRecentScore");
const ranks = JSON.parse(localStorage.getItem("ranking")) || [];

//  Get the username and number of guesses and stores and adds to array storing 
// scores based on number of guesses. Then stores to local storage
function saveRank() {
  const score = {
    username: nameInput.value,
    guessCount: resultArray.length,
  };
  ranks.push(score);
  ranks.sort(function (a, b) {
    return a.guessCount - b.guessCount;
  });
  ranks.splice(10);
  localStorage.ranking = JSON.stringify(ranks);
}

// If default ranking does not exists in localstorage, loads it.
function loadRank() {
  if (!localStorage.getItem("ranking")) {
    for (var i = 0; i < defaultScore.length; i++) {
      const score = {
        username: defaultScore[i].name,
        guessCount: defaultScore[i].guesses,
      };
      ranks.push(score);
      ranks.sort(function (a, b) {
        return a.guessCount - b.guessCount;
      });
    }
    localStorage.ranking = JSON.stringify(ranks);
  }
}

// Creates a table in guess history with number input and result
function resultTable() {
  var tableBody = document.getElementById("results"),
    newRow,
    newCell1,
    newCell2;
  tableBody.innerHTML = "";

  for (var i = 0; i < resultArray.length; i++) {
    newRow = document.createElement("tr");
    tableBody.appendChild(newRow);

    var cols = resultArray[i].split("||");

    newCell1 = document.createElement("td");
    newCell1.textContent = cols[0]
    newRow.appendChild(newCell1);
    newCell2 = document.createElement("td");
    newCell2.textContent = cols[1]
    newRow.appendChild(newCell2);

  }
  resultHeader();
}

// Create table header for guess history table
function resultHeader() {
  var tableBody = document.getElementById("results");
  var header = tableBody.createTHead();
  var headerRow = header.insertRow(0);
  var headCell1 = headerRow.insertCell(0);
  var headCell2 = headerRow.insertCell(1);
  headCell1.innerHTML = "Result";
  headCell2.innerHTML = "Your Number";
}

loadRank(); // create default ranks

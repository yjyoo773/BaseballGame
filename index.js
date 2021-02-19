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
var ans = 143;
var guess = 124;

var ansString = ans.toString();
var guessString = guess.toString();

var strike = 0;
var ball = 0;

for (var i=0;i<ansString.length;i++){
  if (ansString[i] == guessString[i]){
    strike++;
  }
  else if(guessString.includes(ansString[i])){
        ball++;
  }
}

// Detect button click
let x = [];
for (var i=0;i<document.querySelectorAll(".nums").length;i++){
    document.querySelectorAll(".nums")[i].addEventListener("click",function(){
        var clickNum = this.innerHTML;
        x.push(clickNum);
        if (x.length > 3){
            x.shift();
        }
        console.log(x.slice(0,3));
    })
}

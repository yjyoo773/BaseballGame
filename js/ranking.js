let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

// Create Rank Table based from local storage
function updateTableHTML(myArray) {
  var tableBody = document.getElementById("tableRanking"),
    newRow,
    newCell0,
    newCell1,
    newCell2;

  tableBody.innerHTML = "";

  for (var i = 0; i < myArray.length; i++) {
    newRow = document.createElement("tr");
    tableBody.appendChild(newRow);
    newCell0 = document.createElement("td");
    newCell0.textContent = i + 1;
    newRow.appendChild(newCell0);
    newCell1 = document.createElement("td");
    newCell1.textContent = myArray.map(function (x) {
      return x.username;
    })[i];
    newRow.appendChild(newCell1);
    newCell2 = document.createElement("td");
    newCell2.textContent = myArray.map(function (y) {
      return y.guessCount;
    })[i];
    newRow.appendChild(newCell2);

  }
}

// Create table header for ranks 
function createHeader() {
  var tableBody = document.getElementById("tableRanking");
  var header = tableBody.createTHead();
  var headerRow = header.insertRow(0);
  var headCell0  = headerRow.insertCell(0)
  var headCell1 = headerRow.insertCell(1);
  var headCell2 = headerRow.insertCell(2);
  headCell0.innerHTML = "Rank";
  headCell1.innerHTML = "Name";
  headCell2.innerHTML = "Num of Guesses";
}

updateTableHTML(ranking);
createHeader();

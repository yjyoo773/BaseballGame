let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

// rankList.innerHTML = ranks.map(function(score){
//     return `<li>${score.username}-${score.guessCount}</li>`;
// }).join("")

function updateTableHTML(myArray){
    var tableBody = document.getElementById("tableRanking"),
        newRow,newCell1,newCell2;

    tableBody.innerHTML ="";

    for(var i = 0; i<myArray.length;i++){
        newRow = document.createElement("tr");
        tableBody.appendChild(newRow);
        newCell1 = document.createElement("td");
        newCell1.textContent = myArray.map(function(x){
            return x.username;
        })[i]
        newRow.appendChild(newCell1);
        newCell2 = document.createElement("td");
        newCell2.textContent = myArray.map(function(y){
            return y.guessCount;
        })[i]
        newRow.appendChild(newCell2);
    }

}

function createHeader(){
    var tableBody = document.getElementById("tableRanking");
    var header = tableBody.createTHead();
    var headerRow = header.insertRow(0);
    var headCell1 = headerRow.insertCell(0);
    var headCell2 = headerRow.insertCell(1);
    headCell1.innerHTML = "Name";
    headCell2.innerHTML = "Number of Guesses"
}

updateTableHTML(ranking);
createHeader();
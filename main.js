//*************************************
//ROLLING DICE
//*************************************
function diceRoll(numSides, numRolls) {
    var result = new Array();
    var total = 0;

    for (var i = 0; i < numRolls; i++) {
        result[i] = Math.round(Math.random() * numSides) % numSides + 1;
    }

    if (numRolls === 4) {
        console.log("you rolled with 4 dice");

        var sorted = result.sort(function (a, b) {
            return a - b;
        });
        sorted.splice(0, 1);
        console.log(sorted);


    } else {
        for (var i in result) {
            total += result[i];
        }
    }

    return total;
}

//*************************************
//ON CLICK 3D6
//*************************************
function btnClick3d6() {
    diceRoll();
    var results3d6 = document.getElementsByClassName("showResult");

    for (var i = 0; i < results3d6.length; i++) {
        results3d6[i].innerHTML = diceRoll(6, 3);
    }
}

//*************************************
//ON CLICK 4D6
//*************************************
function btnClick4d6() {
    
    diceRoll();
    var results4d6 = document.getElementsByClassName("showResult");
    for (var i = 0; i < results4d6.length; i++) {
        results4d6[i].innerHTML = diceRoll(6, 3);
    }
}

//*************************************
//ON CLICK STORE VALUE
//*************************************
function storeRolls() {
    var storeResult = new Array();
    var storedResult = new Array();   
    
    storeResult = document.getElementsByClassName("showResult");
    storedResult = document.getElementsByClassName("storedResult");
    
    for (var i = 0; i < storeResult.length; i++) {
        storedResult[i].innerHTML = storeResult[i].innerHTML;
        console.log(storedResult[i]);
    }    
    return storedResultResult;
}

//*************************************
//ON CLICK RESTORE VALUE
//*************************************
function restoreRolls() {
    var restoreResult = document.getElementsByClassName("storedResult");
    var storeResult = document.getElementsByClassName("showResult");

    for (var i = 0; i < restoreResult.length; i++) {
        storeResult[i].innerHTML = restoreResult[i].innerHTML;
        console.log(restoreResult[i]);
    }
    return restoreResult;
}


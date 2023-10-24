
function checkEquation() {
    let row = getCookie("row");
    let equationCheck = '';
    let equalCounter = 0;
    let operationCounter = 0;
    const listOfOperations = ['+', '-', '*', "/", '=']
    if (document.getElementById("text" + row.toString() + "-6").textContent == "") {
        let equationCheck = "bad";
    } else {
        let equation = "";
        for (let i = 0; i < 6; i++) {
            equation = equation + document.getElementById("text" + row + '-' + (i+1)).textContent;
            if (document.getElementById("text" + row + '-' + (i+1)).textContent == "=") {
                equalCounter = equalCounter + 1;
            }
            for (let i = 0; i < 4; i++) {
                if (document.getElementById("text" + row + '-' + (i+1)).textContent == listOfOperations[i]) {
                    alert("done");
                    operationCounter = operationCounter + 1;
                    let operation = listOfOperations[i];
                }
            }
        }
        if (operationCounter != 1 || equalCounter != 1) {
            for (i = 0; i < 5; i++) {
                if (document.getElementById("text" + row + '-1').textContent == listOfOperations[i] || document.getElementById("text" + row + '-6').textContent == listOfOperations[i]) {
                    let equationCheck = bad;
                }
            }
        } else {
            let ogEquation = equation;
            equation = equation.split("=");
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 2; j++) {
                    if (equation[j].contains(listOfOperations[i]) == true) {
                        let expression = equation[j]
                        let answer = equation[j+1%2];
                    }
                }
            }
            expression = expression.split(operation);
            if (operation == "+" || expression[0] + expression[1] == answer) {
                let equationCheck = true;
            } else if (operation == "-" || expression[0] - expression[1] == answer) {
                let equationCheck = true;
            } else if (operation == "*" || expression[0] * expression[1] == answer) {
                let equationCheck = true;
            } else if (operation == "/" || expression[0] / expression[1] == answer) {
                let equationCheck = true;
            } else {
                let equationCheck = "bad";
            }
        }
    }
    if (equationCheck == true) {
        if (ogEquation == getCookie(secretEquation)) {
            alert("You Win!");
            endScreen("win");
        } else {
            if (getCookie("row") == 5) {
                alert("You Lose!");
                endScreen("lose");
            } else {
                document.cookie = "row=" + (getCookie("row") + 1).toString();
                document.cookie="box=1";
            }
        }
    } else if (equationCheck == "bad") {
        alert("Invalid Equation");
        document.getElementById("invalid").style.display="inline";
    }
}
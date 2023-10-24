function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function createEquation() {
    let equation;
    let equationCheck;
    while (true) {
        let number1 = Math.floor(Math.random() * 100);
        let number2 = Math.floor(Math.random() * 100);
        let operation = Math.floor(Math.random() * 4);
        let answer;
        if (operation == 0) {
            operation = "+";
            answer = number1 + number2;
        } else if (operation == 1) {
            if (number1 - number2 >= 0) {
                operation = "-";
                answer = number1 - number2;
            } else {
                continue;
            }
        } else if (operation == 2) {
            operation = "*";
            answer = number1 * number2;
        } else {
            if (number1 % number2 == 0) {
                operation = "/";
                answer = number1 / number2;
            } else {
                continue;
            }
        }
        equation = number1.toString() + operation + number2.toString() + "=" + answer;
        if (equation.length == 6) {
            let order = Math.floor(Math.random() * 2);
            if (order == 0) {
                equation = answer + "=" + number1.toString() + operation + number2.toString()
            }
            break;
        } else {
            continue;
        }
    }
    return equation;
}

function checkEquation() {
    let row = getCookie("row");
    let equationCheck = '';
    let equalCounter = 0;
    let operationCounter = 0;
    let operation = "";
    let equation = "";
    const listOfOperations = ['+', '-', '*', "/", '='];
    if (document.getElementById("text" + row.toString() + "-6").textContent == "") {
        alert("bad");
    } else {
        for (let i = 1; i < 7; i++) {
            equation = equation + document.getElementById("text" + row + '-' + (i)).textContent;
            if (document.getElementById("text" + row + '-' + (i)).textContent == "=") {
                equalCounter = equalCounter + 1;
            }
            for (let j = 0; j < 4; j++) {
                if (document.getElementById("text" + row + '-' + (i)).textContent == listOfOperations[j]) {
                    operationCounter = operationCounter + 1;
                    operation = listOfOperations[j];
                }
            }
        }
    }
    
}

function charTyped(char) {
    if (getCookie("box") == 7) {
        return;
    } else {
        document.getElementById("text" + getCookie("row") + '-' + getCookie("box")).textContent = char;
        document.cookie = "box=" + (parseInt(getCookie("box")) + 1);
    }
}

function charDelete() {
    if (getCookie("box") == 1) {
        return;
    } else {
        document.cookie = "box=" + (parseInt(getCookie("box")) - 1);
        document.getElementById("text" + getCookie("row") + '-' + getCookie("box")).textContent = "";
    }
}


function gameLoad(){
    document.cookie = "row=1";
    document.cookie = "box=1";
    document.cookie = "secretEquation=" + createEquation();
    document.getElementById("playAgain").style.display="none";
    document.getElementById("invalid").style.display="none";
}

function information(){
    document.getElementById("onLoad").style.display="none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("invalid").style.display="none";
    document.getElementById("playAgain").style.display="none";
}
function informationDisplay(){
    document.getElementById("onLoad").style.display="block";
    document.getElementById("instructions").style.display="inline";
    document.getElementById("playAgain").style.display="none";
    document.getElementById("invalid").style.display="none";
}

function playMore(){
    document.cookie = "row=1";
    document.cookie = "box=1";
    document.cookie = "secretEquation=" + createEquation();
    document.getElementById("playAgain").style.display="none";
    document.getElementById("invalid").style.display="none";
    document.getElementById("onLoad").style.display="none";
    document.getElementById("instructions").style.display = "none";
}

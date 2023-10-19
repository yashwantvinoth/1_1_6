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
        let equation = number1.toString() + operation + number2.toString() + "=" + answer;
        if (equation.length == 6) {
            let order = Math.floor(Math.random() * 2);
            if (order == 0) {
                equation = answer + "=" + number1.toString() + operation + number2.toString()
            }
            return equation;
            break;
        } else {
            continue;
        }
    }
}

function checkEquation() {
    let row = getCookie("row");
    if (document.getElementById("text" + row.toString() + "-6").textContent == "") {
        alert("Please input a valid 6-character equation");
    } else {
        let equation = "";
        for (let i = 0; i < 6; i++) {
            equation = equation + document.getElementById("text" + row + '-' + (i+1)).textContent;
            if (document.getElementById("text" + row + '-' + (i+1)).textContent == "=") {
                locationEqualSign = i + 1;
            }
            //checkpoint
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

function gameLoad(){
    document.cookie = "row=1";
    document.cookie = "box=1";
    document.cookie = "secretEquation=" + createEquation();
}

function information(){
    document.getElementById("onLoad").style.display="none";
    document.getElementById("instructions").style.display = "none";
}
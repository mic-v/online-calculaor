
let queue = [];
let firstNum = false;
let secNum = false;
let op= '';
let calculated = false;
let decimal = false;


document.addEventListener('keydown', function(event) {
    if(event.key >= 0 && event.key <= 9)
    {
        if(calculated === true) {
            document.getElementById("numberdisplay").innerHTML = "";
            firstNum = secNum = calculated = false;
        }
        document.getElementById("numberdisplay").innerHTML+= event.key;
    }
    if(event.code === 'Period') {
        if(!decimal) {
            decimal = true;
            document.getElementById("numberdisplay").innerHTML+= event.key
        }
    }
    if(event.code === 'KeyC')
    {
        document.getElementById("numberdisplay").innerHTML = "";
        document.getElementById("equationdisplay").innerHTML = "";
        firstNum = secNum = false;
    }
    if(event.code === 'Backspace') {
        var a = document.getElementById("numberdisplay").innerText;
        var b = a.slice(0, a.length - 1);
        document.getElementById("numberdisplay").innerHTML = b;

    }
    if(event.key === '+')
    {  
        operatorPressed('+');
    }
    if(event.key === '-') {
        operatorPressed('-');
    }
    if(event.key === '*') {
        operatorPressed('*');
    }
    if(event.key === '/') {
        operatorPressed('/');
    }
    if(event.key === '=')
    {
        var number = document.getElementById("numberdisplay").innerText;
        if(secNum === false)  {
            secNum = number;
            queue.push(secNum);
        } else {
            queue.push(number);
            queue.push(secNum);
        }
        document.getElementById("numberdisplay").innerHTML = "";
        secNum = parseFloat(queue.pop());
        firstNum = parseFloat(queue.pop());
        document.getElementById("equationdisplay").innerHTML = firstNum + " " + op + " " + secNum + " = ";
        var result = getResult(firstNum, secNum, op);
        document.getElementById("numberdisplay").innerHTML = result;

        if(result === 'undefined')
            firstNum = secondNum = decimal = false;
        calculated = true;
    }
});

// Return result of numerand 1 and numerand 2 with specific operator
function getResult(num1, num2, ope) {
    if(ope === '+')
        return num1 + num2;
    else if(op === '-')
        return num1 - num2;
    else if(op === '*')
        return num1 * num2;
    else {
        if(num2 === 0)
            return "undefined";
        return num1 / num2;
    }
}

function operatorPressed(ope) {
    op = ope;
    var number = document.getElementById("numberdisplay").innerText;
    queue.push(number);
    if(firstNum === false || secNum != false) {
        firstNum = number;
        secNum = false;
    } else {
        secNum = number;
    }
    document.getElementById("equationdisplay").innerHTML = number + " " + op + " ";
    document.getElementById("numberdisplay").innerHTML = "";   
}
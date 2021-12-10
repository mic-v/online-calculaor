
var queue = [];

document.addEventListener('keydown', function(event) {
    if(event.key >= 0 && event.key <= 9)
    {
        document.getElementById("numberdisplay").innerHTML+= event.key;
    }
    if(event.code === 'KeyC')
    {
        document.getElementById("numberdisplay").innerHTML = "";
    }
    if(event.key === '+')
    {
        var number = document.getElementById("numberdisplay").innerText;
        queue.push(number);
        //queue.push("+");
        document.getElementById("equationdisplay").innerHTML = number + " + "
        document.getElementById("numberdisplay").innerHTML = "";
    }
    if(event.key === '=')
    {
        var number = document.getElementById("numberdisplay").innerText;
        queue.push(number);
        document.getElementById("numberdisplay").innerHTML = "";
        var num1 = parseInt(queue.shift());
        var num2 = parseInt(queue.shift());
        document.getElementById("equationdisplay").innerHTML = num1 + " + " + num2 + " = ";
        document.getElementById("numberdisplay").innerHTML = num1 + num2;
        
    }
});
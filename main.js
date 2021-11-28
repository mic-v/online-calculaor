
var queue = [];

document.addEventListener('keydown', function(event) {
    if(event.key >= 0 && event.key <= 9)
    {
        document.getElementById("display").innerHTML+= event.key;
    }
    if(event.code === 'KeyC')
    {
        document.getElementById("display").innerHTML = "";
    }
    if(event.key === '+')
    {
        var number = document.getElementById("display").innerText;
        queue.push(number);
        //queue.push("+");
        document.getElementById("display").innerHTML = "";
    }
    if(event.key === '=')
    {
        var number = document.getElementById("display").innerText;
        queue.push(number);
        document.getElementById("display").innerHTML = "";
        var num1 = parseInt(queue.shift()) + parseInt(queue.shift());
        document.getElementById("display").innerHTML = num1;
        
    }
});
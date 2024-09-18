let currentDisplay="";
document.querySelector("#display").value=currentDisplay;

function addToDisplay(symbol){
    currentDisplay+=symbol;
    console.log(currentDisplay);
    document.querySelector("#display").value=currentDisplay;
}

function clearDisplay(){
    currentDisplay="";
    document.querySelector("#display").value=currentDisplay;
}

function calculate(){
    currentDisplay=eval(currentDisplay);
    document.querySelector("#display").value=currentDisplay;
}

function backspace(){
    currentDisplay=currentDisplay.substring(0,currentDisplay.length-1);
    document.querySelector("#display").value=currentDisplay;
}
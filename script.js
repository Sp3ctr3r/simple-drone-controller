"use strict";

var intervalid, number = 0;
var progressid = 0;
var intervalID = window.setInterval(myCallback, 2000);

function myIntervalFunction() {
    number = number + 1;
    document.getElementById("alt2").innerHTML = number + " FT";
}

function myIntervalFunction2() {
    number = number - 1;
    document.getElementById("alt2").innerHTML = number + " FT";
}

function increase(){
    intervalid = setInterval(myIntervalFunction, 1000)
    progressid = setInterval(decreaseProgress, 3000);
}

function stop() {
    clearInterval(intervalid)
    clearInterval(progressid)
}

function decreaseProgress(){
    var elem = document.getElementById("bar");
    var elemWidth = parseInt(elem.offsetWidth); // get the width of the progress bar and convert to number
    // the width of the progress bar is 319 pixels
    var convertedNWidthValue = elemWidth - 11;

    if(number < 0){
        stop()
        alert("Altitude lower than 0")
        console.log("number is " + number)
    }
    else if(number >= 0){
        if(convertedNWidthValue > 0){
            var convertedSWidthValue = convertedNWidthValue.toString();
            
            elem.style.width = convertedSWidthValue + "px";

            if(convertedNWidthValue <= 110){
                
                elem.style.fontSize = 16 + "px";
    
                if(convertedNWidthValue <= 44){
                    elem.style.backgroundColor = "red" ;
                    elem.innerHTML = "";
    
                    if(convertedNWidthValue == 11){
                        elem.style.width = "0px"
                        document.getElementById("alt2").innerHTML = 0 + " FT";
                        stop()
                    }
                }
            }
        }
    }
}

function decrease(){
    if(number <= 0){
        stop()
        alert("Altitude lower than 0")
    }
    else{
        intervalid = setInterval(myIntervalFunction2,1000)
        progressid = setInterval(decreaseProgress, 1000);
    }
}

function radgo(){
    var rad = document.getElementById("rad");
    var radWidth = parseInt(rad.offsetWidth);

    if(radWidth == 1){
        var radNWidth = 100 + "%";
        var radSWidth = radNWidth.toString()
        radWidth = radSWidth;
        rad.style.width = radWidth;
        rad.style.transition = "0.9s";
    }
}

function radback(){
    rad.style.width = 1 + "px";
}


function scan(){
    radgo();
    setTimeout(function() {radback();}, 1000);
}


function myCallback() {
    scan()
}
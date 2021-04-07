var input1 = document.getElementById("color1");
var input2 = document.getElementById("color2");
var rgBB = document.getElementById("rgb");
var bg = document.getElementById("background");
var randomGenerator = document.getElementById("randomGenerator");
var h2 = document.querySelector("h2");

function setGradient() {
    bg.style.background =
        "linear-gradient(to right, " +
        input1.value +
        ", " +
        input2.value +
        ")";

    rgBB.innerHTML = bg.style.background + ";";
}


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBg() {
    var r = Number(randomInteger(0, 255)).toString(16);
    var g = Number(randomInteger(0, 255)).toString(16);
    var b = Number(randomInteger(0, 255)).toString(16);

    var r2 = Number(randomInteger(0, 255)).toString(16);
    var g2 = Number(randomInteger(0, 255)).toString(16);
    var b2 = Number(randomInteger(0, 255)).toString(16);

    var stringColor = "#" + r + g + b;
    var stringColor2 = "#" + r2 + g2 + b2;

    input1.value = stringColor;
    input2.value = stringColor2;

    setGradient();
}


input1.addEventListener("input", setGradient);

input2.addEventListener("input", setGradient);

randomGenerator.addEventListener("click", randomBg);
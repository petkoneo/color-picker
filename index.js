var colors = generateRandomColors(6);

// Taking our variables
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var message = document.querySelector('#message')
var h1 = document.querySelector("h1")

colorDisplay.textContent = pickedColor;

// Function for changing colors
function changeColors(color) {
    for(var i = 0; i< squares.length; i++) {
        // change colors for for given color
        squares[i].style.backgroundColor = color;
    }
}

// Create colorpicker
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function generateRandomColors(num) {
    // Make array
    var arr = []
    // Adding random colors to array
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    // Return value
    return arr
}

function randomColor() {
    // Pick a "red" from 0-255
    var red = Math.floor(Math.random() * 256);
    // Pick a "green" from 0-255
    var green = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0-255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Creating the grid with different collors
for(var i = 0; i < squares.length; i++) {
    // Add initial color to squares
    squares[i].style.backgroundColor = colors[i]

    // Add clicklistener to squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor
        if(clickedColor === pickedColor) {
            message.textContent = "Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor
        } else {
            this.style.backgroundColor = "black"
            message.textContent = "Try again!"
        }
    });
}

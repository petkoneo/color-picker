var colors = [
    "rgb(255, 55, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)"
]

// Taking our variables
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var colorDisplay = document.getElementById("color-display");
var message = document.querySelector('#message')

colorDisplay.textContent = pickedColor;

// Function for changing collors
function changeColors(color) {
    for(var i = 0; i< squares.length; i++) {
        // change colors for for given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

// Creating the grid with different collors
for(var i = 0; i < squares.length; i++) {
    // Add initial color to squares
    squares[i].style.backgroundColor = colors[i]

    // Add clicklistener to squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor
        if(clickedColor === pickedColor) {
            message.textContent = "Correct"
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "black"
            message.textContent = "Try again"
        }
    });
}

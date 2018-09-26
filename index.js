var numberSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var message = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    // Modebutton setup
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            for(var j = 0; j < modeButtons.length; j++){
                modeButtons[j].classList.remove("selected");
            }
            this.classList.add("selected");

            // Figure out how many squares shows up
            this.textContent === "Easy" ? numberSquares = 3 : numberSquares = 6;
            reset();
        });
    }

    // Creating the grid with different collors
    for(var i = 0; i < squares.length; i++) {

        // Add clicklistener to squares
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor
            if(clickedColor === pickedColor) {
                message.textContent = "Correct!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor
                resetButton.textContent = "Play a new Game?"
            } else {
                this.style.backgroundColor = "black"
                message.textContent = "Try again!"
            }
        });
    }

    reset();
}



function reset() {
    // Generate new random color
    colors = generateRandomColors(numberSquares);
    // Generate color randomly from Array
    pickedColor = pickColor();
    // Change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // Deleting middle text
    message.textContent = "";
    // Change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"
    resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click", function(){
    reset();
});

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


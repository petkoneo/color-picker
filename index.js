var colors = [
    "rgb(255, 55, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3]

var colorDisplay = document.getElementById("color-display");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    // Add initial color to squares
    squares[i].style.backgroundColor = colors[i]

    // Add clicklistener to squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor
        if(clickedColor === pickedColor) {
            alert("correct");
        } else {
            alert("Wrong");
        }
    });
}



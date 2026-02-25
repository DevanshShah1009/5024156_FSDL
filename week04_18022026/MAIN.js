// Color list for square
let colors = ["red", "blue", "green", "orange", "purple", "black" , "yellow", "cyan", "magenta" , "lime", "pink", "teal" , "brown", "gray", "maroon", "navy", "olive", "silver", "gold", "coral", "indigo"];
let index = 0;

document.addEventListener("DOMContentLoaded", function () {

    let btn = document.getElementById("colorBtn");
    let square = document.getElementById("colorSquare");
    let form = document.querySelector("form");

    // BUTTON CLICK EVENT
    btn.addEventListener("click", function () {

        // Change square color
        index = (index + 1) % colors.length;
        let currentColor = colors[index];

        square.style.backgroundColor = currentColor;

        // Console message with color name
        console.log("The color is changed to " + currentColor);

    });

    // FORM SUBMIT EVENT
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully :)");
    });

});
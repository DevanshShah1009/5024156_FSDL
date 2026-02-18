
// ================= VARIABLES =================
let username = "Devansh";
let age = 20;

// ================= OPERATORS =================
let nextYearAge = age + 1;
console.log("Next year age:", nextYearAge);

// ================= OBJECT =================
let student = {
    name: "Devansh",
    course: "Computer Science",
    year: 2
};

console.log("Student Name:", student.name);

// ================= CLASS =================
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hello " + this.name;
    }
}

let p1 = new Person("Devansh");
console.log(p1.greet());

// ================= FUNCTION =================
function showSuccessMessage() {
    alert("Form submitted successfully :)");
}

// ================= CONDITIONS =================
if (age >= 18) {
    console.log("User is Adult");
} else {
    console.log("User is Minor");
}

// ================= LOOPS =================
for (let i = 1; i <= 3; i++) {
    console.log("Loop number:", i);
}

// ================= EVENTS =================

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Select the form from your HTML
    let form = document.querySelector("form");

    // Add submit event
    form.addEventListener("submit", function (event) {

        // Stop page refresh
        event.preventDefault();

        // Call function
        showSuccessMessage();

    });

});

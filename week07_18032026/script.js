// ================= ARRAYS =================
let users = [];

// ================= FORM EVENT =================
document.getElementById("userForm").addEventListener("submit", function (e) {

    e.preventDefault();

    try {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;

        // ================= VALIDATION =================

        // Empty check
        if (name.trim() === "" || age.trim() === "") {
            throw "All fields are required!";
        }

        // Name validation (string)
        if (!/^[A-Za-z]+$/.test(name)) {
            throw "Name must contain only letters!";
        }

        // Age validation
        if (age < 1 || age > 100) {
            throw "Age must be between 1 and 100!";
        }

        // ================= STRING METHODS =================
        name = name.toUpperCase();

        // ================= DATE =================
        let currentDate = new Date();
        let dateString = currentDate.toLocaleString();

        // ================= ARRAY =================
        let user = {
            name: name,
            age: age,
            date: dateString
        };

        users.push(user);

        // Display result
        document.getElementById("output").innerText =
            `User Added: ${name}, Age: ${age}, Time: ${dateString}`;

        console.log(users);

    } catch (error) {
        // ================= ERROR HANDLING =================
        alert(error);
    }

});
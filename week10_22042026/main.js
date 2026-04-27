const express = require("express");
const app = express();

// ================= INSTALLATION =================
const nodeInfo = `
Node.js is installed successfully!<br>
Node Version: ${process.version}<br><br>
`;

console.log("Node.js is installed successfully!");
console.log("Node Version:", process.version);

// ================= CALLBACK =================
function greet(name, callback) {
    console.log("Hello " + name);
    return "Hello " + name + "<br>";
}

function done() {
    console.log("Callback executed!");
    return "Callback executed!<br><br>";
}

const callbackOutput = greet("Devansh", done) + done();

// ================= EVENT LOOP =================
let eventOutput = "";

console.log("Start");

eventOutput += "Start<br>";

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

console.log("End");
eventOutput += "End<br>";
eventOutput += "Inside setTimeout (executed later)<br><br>";

// ================= EXPRESS =================

// HOME PAGE (VISUAL OUTPUT)
app.get("/", (req, res) => {
    res.send(`
        <h1>Node.js Practical Output</h1>

        <h2>1. Installation & Configuration</h2>
        ${nodeInfo}

        <h2>2. Callback Output</h2>
        ${callbackOutput}

        <h2>3. Event Loop Output</h2>
        ${eventOutput}

        <h2>4. Express App</h2>
        <p>Server is running successfully!</p>

        <a href="/about">Go to About Page</a>
    `);
});

// ABOUT PAGE
app.get("/about", (req, res) => {
    res.send(`
        <h2>About Page</h2>
        <p>This page is served using Express routing.</p>
        <a href="/">Go Back</a>
    `);
});

// SERVER
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
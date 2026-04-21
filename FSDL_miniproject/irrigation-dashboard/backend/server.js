const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// root route (fixes your error)
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// dummy data
let data = {
  moisture: 50,
  temperature: 25,
  humidity: 60,
  pump: false,
  auto: true
};

// API route
app.get("/api/data", (req, res) => {
  res.json(data);
});

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
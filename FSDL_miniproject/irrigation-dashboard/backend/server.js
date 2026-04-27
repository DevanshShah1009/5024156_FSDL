const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Smart Irrigation Backend Running ✅");
});

// DATA (in-memory)
let data = {
  moisture: 50,
  temperature: 25,
  humidity: 60,
  pump: false,
  auto: true
};

// GET data (frontend will use this)
app.get("/api/data", (req, res) => {
  res.json(data);
});

// TOGGLE PUMP
app.post("/api/pump", (req, res) => {
  const { status } = req.body;

  // block manual control if auto ON
  if (data.auto) {
    return res.json({
      message: "Pump controlled by auto mode",
      data
    });
  }

  data.pump = status;
  res.json(data);
});

// TOGGLE AUTO MODE
app.post("/api/auto", (req, res) => {
  const { status } = req.body;
  data.auto = status;
  res.json(data);
});

// SIMULATE SENSOR DATA
setInterval(() => {
  data.moisture = Math.floor(Math.random() * 100);
  data.temperature = Math.floor(Math.random() * 40);
  data.humidity = Math.floor(Math.random() * 100);

  // AUTO LOGIC
  if (data.auto) {
    if (data.moisture < 40) data.pump = true;
    if (data.moisture > 70) data.pump = false;
  }
}, 3000);

// START SERVER
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
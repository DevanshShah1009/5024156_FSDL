import { useState } from "react";
import "./App.css";

function App() {

  const [value, setValue] = useState("");
  const [type, setType] = useState("km-m");
  const [result, setResult] = useState("");

  function convert() {
    let res = 0;

    if (type === "km-m") {
      res = value * 1000;
    } else if (type === "m-km") {
      res = value / 1000;
    } else if (type === "kg-g") {
      res = value * 1000;
    } else if (type === "g-kg") {
      res = value / 1000;
    } else if (type === "c-f") {
      res = (value * 9/5) + 32;
    } else if (type === "f-c") {
      res = (value - 32) * 5/9;
    }

    setResult(res);
    console.log(`Converted ${value} using ${type}`);
  }

  return (
    <div className="app-container">

      <h2>Unit Converter</h2>

      {/* Input */}
      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <br /><br />

      {/* Dropdown */}
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="km-m">Kilometer → Meter</option>
        <option value="m-km">Meter → Kilometer</option>
        <option value="kg-g">Kilogram → Gram</option>
        <option value="g-kg">Gram → Kilogram</option>
        <option value="c-f">Celsius → Fahrenheit</option>
        <option value="f-c">Fahrenheit → Celsius</option>
      </select>

      <br /><br />

      {/* Button */}
      <button onClick={convert}>Convert</button>

      <br /><br />

      {/* Result */}
      <h2>Result: {result}</h2>

    </div>
  );
}

export default App;
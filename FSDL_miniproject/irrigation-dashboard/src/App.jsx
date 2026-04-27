import { useState, useEffect } from "react";
import "./App.css";
import {
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

export default function App() {

  const BASE_URL = "https://orange-succotash-5gr7q5qprxx5c4v7r-5000.app.github.dev"; // 🔥 YOUR URL

  const [data, setData] = useState({
    moisture: 0,
    temperature: 0,
    humidity: 0,
    pump: false,
    auto: true
  });

  const [history, setHistory] = useState([50, 52, 48, 49, 51, 53, 50]);

  // FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/data`);
        const result = await res.json();

        setData(result);
        setHistory(prev => [...prev.slice(-6), result.moisture]);

      } catch (err) {
        console.log("Error:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

  // TOGGLE AUTO
  const toggleAuto = async () => {
    const newStatus = !data.auto;

    try {
      const res = await fetch(`${BASE_URL}/api/auto`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: newStatus })
      });

      const result = await res.json();
      setData(result); // 🔥 FIX

    } catch (err) {
      console.log(err);
    }
  };

  // TOGGLE PUMP
  const togglePump = async () => {
    if (data.auto) return;

    const newStatus = !data.pump;

    try {
      const res = await fetch(`${BASE_URL}/api/pump`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: newStatus })
      });

      const result = await res.json();
      setData(result); // 🔥 FIX

    } catch (err) {
      console.log(err);
    }
  };

  // GRAPH DATA
  const chartData = {
    labels: ["00", "04", "08", "12", "16", "20", "24"],
    datasets: [
      {
        label: "Soil %",
        data: history,
        borderColor: "#16a34a",
        backgroundColor: "rgba(34,197,94,0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Temp °C",
        data: [22, 21, 23, 24, 25, 24, 23],
        borderColor: "#f97316",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Humidity %",
        data: [60, 62, 61, 63, 64, 62, 65],
        borderColor: "#3b82f6",
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 10 },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end"
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        min: 0,
        max: 100,
        grid: {
          color: "#e5e7eb",
          borderDash: [5, 5]
        }
      }
    }
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="header">
        <div>
          <span className="tag">FIELD 01 · NORTH PLOT</span>
          <h1>IriCore.</h1>
          <p className="sub">Live telemetry from soil, air and pump nodes</p>
        </div>

        <div className="auto-box">
          <span className="auto-label">AUTO MODE</span>

          <label className="switch">
            <input type="checkbox" checked={data.auto} onChange={toggleAuto} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* CARDS */}
      <div className="cards">

        <div className="card">
          <h4>SOIL MOISTURE</h4>
          <h2>{data.moisture}%</h2>
          <div className="progress">
            <div style={{ width: `${data.moisture}%` }} />
          </div>
        </div>

        <div className="card">
          <h4>TEMPERATURE</h4>
          <h2>{data.temperature}°C</h2>
        </div>

        <div className="card">
          <h4>HUMIDITY</h4>
          <h2>{data.humidity}%</h2>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="row">

        <div className="pump-card">

          <div className="pump-header">
            <span>PUMP CONTROL</span>

            <label className="switch">
              <input
                type="checkbox"
                checked={data.pump}
                onChange={togglePump}
                disabled={data.auto}
              />
              <span className="slider"></span>
            </label>
          </div>

          <h2>{data.pump ? "PUMP ON" : "PUMP OFF"}</h2>

          <p>
            {data.auto
              ? "Controlled by Auto mode"
              : "Manual control enabled"}
          </p>

        </div>

        <div className="trend-card">
          <h4>24-HOUR TREND</h4>

          <div className="chart-wrapper">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

      </div>

    </div>
  );
}
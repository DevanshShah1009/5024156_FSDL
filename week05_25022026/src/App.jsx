import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CitizenDashboard from "./pages/CitizenDashboard";
import LodgeComplaint from "./pages/LodgeComplaint";
import TrackComplaints from "./pages/TrackComplaints";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminComplaints from "./pages/AdminComplaints";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/lodge" element={<LodgeComplaint />} />
        <Route path="/track" element={<TrackComplaints />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-complaints" element={<AdminComplaints />} />
      </Routes>
    </BrowserRouter>
  );
}
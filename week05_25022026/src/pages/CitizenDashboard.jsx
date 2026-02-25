import {useNavigate} from "react-router-dom";

export default function CitizenDashboard(){
  const nav=useNavigate();

  return(
    <div className="dashboard">
      <h1>Citizen Dashboard</h1>

      <div className="grid">
        <div className="card-btn" onClick={()=>nav("/lodge")}>
          📸 Lodge Complaint
        </div>

        <div className="card-btn" onClick={()=>nav("/track")}>
          📊 Track Complaints
        </div>

        <div className="card-btn logout" onClick={()=>nav("/")}>
          🚪 Logout
        </div>
      </div>
    </div>
  )
}
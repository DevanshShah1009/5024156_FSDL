import {useNavigate} from "react-router-dom";

export default function AdminDashboard(){

  const nav=useNavigate();

  return(
    <div className="dashboard">
      <h1>🛠️ Admin Dashboard</h1>

      <div className="grid">
        <div className="card-btn" onClick={()=>nav("/admin-complaints")}>
          Complaint Management
        </div>

        <div className="card-btn logout" onClick={()=>nav("/")}>
          Logout
        </div>
      </div>
    </div>
  )
}
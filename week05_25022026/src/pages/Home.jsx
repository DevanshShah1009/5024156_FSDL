import { useNavigate } from "react-router-dom";

export default function Home(){
  const nav = useNavigate();

  return(
    <div className="center-page">
      <div className="card">
        <h1>🏛️ SNS</h1>
        <p>Citizen Grievance Redressal System</p>

        <div className="btn-row">
          <button onClick={()=>nav("/login")}>Citizen Login</button>
          <button onClick={()=>nav("/admin-login")}>Admin Login</button>
        </div>
      </div>
    </div>
  )
}
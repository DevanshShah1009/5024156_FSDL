import {useNavigate} from "react-router-dom";

export default function Register(){
  const nav=useNavigate();

  return(
    <div className="center-page">
      <div className="card">
        <h2>📝 Register</h2>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Password"/>
        <button onClick={()=>nav("/login")}>Register</button>
      </div>
    </div>
  )
}
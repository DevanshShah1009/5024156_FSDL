import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login(){
  const nav=useNavigate();
  const [e,setE]=useState("");
  const [p,setP]=useState("");

  return(
    <div className="center-page">
      <div className="card">
        <h2>👤 Citizen Login</h2>
        <input placeholder="Email" onChange={x=>setE(x.target.value)} />
        <input type="password" placeholder="Password" onChange={x=>setP(x.target.value)} />
        <button onClick={()=>nav("/citizen-dashboard")}>Login</button>
        <p className="link" onClick={()=>nav("/register")}>Create Account</p>
      </div>
    </div>
  )
}
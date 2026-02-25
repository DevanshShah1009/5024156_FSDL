import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function AdminLogin(){

  const nav=useNavigate();
  const [e,setE]=useState("");
  const [p,setP]=useState("");

  function login(){
    if(e==="admin@sns.gov" && p==="admin123"){
      nav("/admin-dashboard");
    }else alert("Invalid Admin");
  }

  return(
    <div className="center-page">
      <div className="card">
        <h2>🛠️ Admin Login</h2>
        <input placeholder="Admin Email" onChange={x=>setE(x.target.value)}/>
        <input type="password" placeholder="Password" onChange={x=>setP(x.target.value)}/>
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}
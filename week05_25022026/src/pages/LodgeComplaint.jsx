import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function LodgeComplaint(){

  const nav=useNavigate();
  const [desc,setDesc]=useState("");
  const [img,setImg]=useState(null);
  const [loc,setLoc]=useState("Detecting location...");

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(p=>{
      setLoc(`Lat:${p.coords.latitude.toFixed(3)} Lng:${p.coords.longitude.toFixed(3)}`);
    });
  },[]);

  function upload(e){
    const r=new FileReader();
    r.onload=()=>setImg(r.result);
    r.readAsDataURL(e.target.files[0]);
  }

  function submit(){
    const data=JSON.parse(localStorage.getItem("complaints"))||[];
    data.push({id:Date.now(),description:desc,beforeImage:img,status:"In Progress"});
    localStorage.setItem("complaints",JSON.stringify(data));
    nav("/track");
  }

  return(
    <div className="center-page">
      <div className="card wide">
        <h2>📸 Lodge Complaint</h2>
        <p>{loc}</p>
        <textarea placeholder="Describe issue" onChange={e=>setDesc(e.target.value)} />
        <input type="file" onChange={upload}/>
        <button onClick={submit}>Submit Complaint</button>
      </div>
    </div>
  )
}
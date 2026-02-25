import {useState,useEffect} from "react";

export default function TrackComplaints(){

  const [list,setList]=useState([]);

  useEffect(()=>{
    setList(JSON.parse(localStorage.getItem("complaints"))||[]);
  },[]);

  function del(i){
    const copy=[...list];
    copy.splice(i,1);
    localStorage.setItem("complaints",JSON.stringify(copy));
    setList(copy);
  }

  return(
    <div className="page-container">
      <h1>📊 Track Complaints</h1>

      {list.map((c,i)=>(
        <div className="complaint-card" key={c.id}>
          <h3>{c.status}</h3>
          <p>{c.description}</p>

          <div className="image-row">
            <img src={c.beforeImage}/>
            {c.afterImage && <img src={c.afterImage}/>}
          </div>

          {c.status!=="Resolved" &&
            <button className="danger" onClick={()=>del(i)}>Delete</button>
          }
        </div>
      ))}
    </div>
  )
}
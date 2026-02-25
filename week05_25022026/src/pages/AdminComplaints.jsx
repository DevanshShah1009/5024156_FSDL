import {useEffect,useState} from "react";

export default function AdminComplaints(){

  const [list,setList]=useState([]);

  useEffect(()=>{
    setList(JSON.parse(localStorage.getItem("complaints"))||[]);
  },[]);

  function upload(i,file){
    const r=new FileReader();
    r.onload=()=>{
      const copy=[...list];
      copy[i].afterImage=r.result;
      copy[i].status="Resolved";
      localStorage.setItem("complaints",JSON.stringify(copy));
      setList(copy);
    };
    r.readAsDataURL(file);
  }

  return(
    <div className="track-wrapper">
      {list.map((c,i)=>(
        <div className="complaint-card" key={c.id}>
          <h3>{c.status}</h3>
          <p>{c.description}</p>

          <div className="image-row">
            <img src={c.beforeImage}/>
            {c.afterImage
              ? <img src={c.afterImage}/>
              : <input type="file" onChange={e=>upload(i,e.target.files[0])}/>
            }
          </div>
        </div>
      ))}
    </div>
  )
}
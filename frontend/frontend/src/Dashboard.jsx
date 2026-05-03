import {useEffect,useState} from "react";
import axios from "axios";

export default function Dashboard(){
  const [tasks,setTasks]=useState([]);

  useEffect(()=>{
    axios.get("http://team-task-manager-production-d61e.up.railway.app",{
      headers:{authorization:localStorage.getItem("token")}
    }).then(res=>setTasks(res.data));
  },[]);

  const total = tasks.length;
  const completed = tasks.filter(t=>t.status==="done").length;
  const overdue = tasks.filter(t=> new Date(t.dueDate) < new Date()).length;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Overdue: {overdue}</p>
    </div>
  );
}
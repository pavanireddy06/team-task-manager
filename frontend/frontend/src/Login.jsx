import axios from "axios";
import {useState} from "react";

export default function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login = async()=>{
    const res = await axios.post("https://team-task-manager-production-d61e.up.railway.app/api/auth/login",{email,password});;
    localStorage.setItem("token",res.data.token);
    window.location="/dashboard";
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={login}>Login</button>
    </div>
  );
}
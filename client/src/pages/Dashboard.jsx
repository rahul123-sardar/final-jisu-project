import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
    const [msg,setMsg] = useState('');
    useEffect(()=>{
     axios.get("http://localhost:6500/api/auth/dashboard",{
        headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
     })
     .then(res=>setMsg(res.data.message))
     .catch(()=>setMsg('unauthorized'));
    },[]);
  return <>
    <h1>{msg}</h1>
  </>
}

export default Dashboard
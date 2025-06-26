import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [form,setForm] = useState({email:"",password:""});
    const navigate = useNavigate();
    const hc = (e)=> {
        setForm({...form,[e.target.name]:e.target.value});
    }
    const hs = async(e) =>{
        e.preventDefault();
       const res= await axios.post('http://localhost:6500/api/auth/login',form);
        localStorage.setItem('token',res.data.token);
        navigate('/dashboard');
    }

  return <>
     <form onSubmit={hs}>
       <input
          type="email"
          name="email"
          placeholder="enter email"
          onChange={hc}
          required
        />
        <br />
      <input
          type="password"
          name="password"
          placeholder="enter password"
          onChange={hc}
          required
        />
       <br/>
        <button className="btn btn-danger">
          Login
        </button>
      </form>
  </>
}

export default Login
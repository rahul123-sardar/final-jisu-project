import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [form,setForm] = useState({name:"",email:"",password:""});
    const hc = (e)=> {
        setForm({...form,[e.target.name]:e.target.value});
    }
    const hs = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:6500/api/auth/register',form);
        alert('registration successfully');
    }

  return <>
     <form onSubmit={hs}>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          onChange={hc}
          required
        />
        <br />

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
          Register
        </button>
      </form>
  </>
}

export default Register
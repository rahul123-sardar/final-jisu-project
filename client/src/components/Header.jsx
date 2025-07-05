import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Header = ({onSearch}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link class="navbar-brand" to=" ">Clean City</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

       
            <Link class="nav-link" to='/'>Register</Link> | <Link to="/login" className='nav-link'>Login</Link>|{''}
          
          {
            token && (
              <>
                 <li class="nav-item">
                <Link to="/dashboard" class="nav-link">Dashboard</Link>|{''}
                </li>
                
                <li class="nav-item">
                  <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/about'>About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/contact'>Contact</Link>
                </li>
                <li class="nav-item">
                <button onClick={handlelogout} class="nav-link">Logout</button>
                </li>

              </>
            )
          }
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" 
          aria-label="Search" 
            id="search" 
          onChange={(e)=>onSearch(e.target.value)}
           />
          
        </form>
      </div>
    </nav>
  </>
}

export default Header
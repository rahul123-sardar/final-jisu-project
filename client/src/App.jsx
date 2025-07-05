import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './pages/Dashboard';
import  './App.css'; // Import your CSS file

import { useState } from 'react';
const App = () => {
const [searchterm,setSearchterm] = useState('');
  return <>
    <BrowserRouter>
      <Header onSearch={setSearchterm} />
      <Routes>
        <Route path='/' element={<Register />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />}></Route>

          {/* Add more private routes as needed */}
          <Route path='/home' element={<Home searchterm={searchterm} />} ></Route>
          <Route path='/about' element={<About name="raj" city="kolkata" />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>


  </>
}

export default App;
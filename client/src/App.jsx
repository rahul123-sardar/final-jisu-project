import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {

  return <>
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/' element={<Home/>} ></Route>
  <Route path='/about' element={<About name="raj" city="kolkata"/>} ></Route>
  <Route path='/contact' element={<Contact/>} ></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  
  
  </>
}

export default App
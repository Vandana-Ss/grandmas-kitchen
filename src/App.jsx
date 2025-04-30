import { useState } from 'react'
import grandma from "./assets/grandma-title.png"
import BannerSection from './components/BannerSection';
import './App.css'
import GrandmasKitchen from './components/GrandmasKitchen';
import Navbar from './components/Navbar';
import Menu from './components/NavigationBar/Menu';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {

  return (
    <>
      <div className='flex justify-center'>
        <img src={grandma} alt="Grandma's Kitchen" className='w-65 h-30 -m-2'/>
      </div>
      
      <Navbar/>
      <BannerSection/>
      <GrandmasKitchen/>

      {/*<BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>*/}
    </>
  );
}


export default App

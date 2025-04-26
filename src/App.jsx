import { useState } from 'react'
import grandma from "./assets/grandma-title.png"
import BannerSection from './components/BannerSection';
import './App.css'
import GrandmasKitchen from './components/GrandmasKitchen';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='flex justify-center'>
        <img src={grandma} alt="Grandma's Kitchen" className='w-65 h-30 -m-2'/>
      </div>
      
      <Navbar/>
      <BannerSection/>
      <GrandmasKitchen/>
    </>
  );
}


export default App

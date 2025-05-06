import { BrowserRouter, Routes, Route } from 'react-router-dom';
import grandma from "./assets/grandma-title.png"
import BannerSection from './components/BannerSection';
import GrandmasKitchen from './components/GrandmasKitchen';
import Navbar from './components/Navbar';
import Menu from './components/NavigationBar/Menu';
// Import your other pages too (even if temporarily they are dummy)
import About from './components/NavigationBar/About';
import Events from './components/NavigationBar/Events';
import Gallery from './components/NavigationBar/Gallery';
import Reservation from './components/NavigationBar/Reservation';
import Social from './components/NavigationBar/Social';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='flex justify-center'>
          <a href='/'><img src={grandma} alt="Grandma's Kitchen" className='w-65 h-30 -m-2 cursor-pointer'/></a>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<><BannerSection /><GrandmasKitchen /></>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/social" element={<Social />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

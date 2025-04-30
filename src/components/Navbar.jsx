import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Menu from "./NavigationBar/Menu";

function Navbar() {
  return (
    <>
      <BrowserRouter>
        <nav className='mt-5'>
          <ul className='flex justify-center space-x-15 p-4'>
            <li>
              <Link to="/menu" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>
                MENU
              </Link>
            </li>
            <li>
              <Link to="/about" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/events" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>
                PRIVATE DINING & EVENTS
              </Link>
            </li>
            <li>
              <Link to="/gallery" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>
                GALLERY
              </Link>
            </li>
            <li>
              <Link to="/reservations" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>
                RESERVATIONS
              </Link>
            </li>
            <li>
              <Link to="/social" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>
                SOCIAL
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/reservations" element={<Reservation/>}/>
          <Route path="/social" element={<Social/>}/>
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default Navbar
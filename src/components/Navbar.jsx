import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='mt-5'>
      <ul className='flex justify-center space-x-15 p-4'>
        <li>
          <Link to="/menu" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200'>
            MENU
          </Link>
        </li>
        <li>
          <Link to="/about" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200'>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/events" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200'>
            PRIVATE DINING & EVENTS
          </Link>
        </li>
        <li>
          <Link to="/gallery" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200'>
            GALLERY
          </Link>
        </li>
        <li>
          <Link to="/reservations" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200'>
            RESERVATIONS
          </Link>
        </li>
        <li>
          <Link to="/social" className='text-green-800 text-xs font-light hover:text-blue-600 cursor-pointer active:bg-gray-200'>
            SOCIAL
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

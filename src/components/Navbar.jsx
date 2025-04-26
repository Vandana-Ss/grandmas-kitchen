function Navbar(){
    return(
        <nav className='mt-5'>
        <ul className='flex justify-center space-x-15 p-4'>
          <li className='text-xs-green-800 font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>MENU</li>
          <li className='text-xs-green-800 font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>ABOUT</li>
          <li className='text-xs-green-800 font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>PRIVATE DINING & EVENTS</li>
          <li className='text-xs-green-800 font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>GALLERY</li>
          <li className='text-xs-green-800 font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>RESERVATIONS</li>
          <li className='text-xs-green-800 font-light hover:text-blue-600 cursor-pointer active:bg-gray-400'>SOCIAL</li>
        </ul>
      </nav>
    );
}

export default Navbar
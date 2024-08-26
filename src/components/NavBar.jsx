import Cart from "./CartWidget"
import { Link } from 'react-router-dom'; 

function NavBar(){
    
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-2 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
      <a
        className="flex-none font-semibold dark:text-white focus:outline-none focus:opacity-80"
        href="#"
        aria-label="Brand"
      >
        <span className="inline-flex items-center gap-x-2 text-3xl font-semibold dark:text-white">
          <img
            className="w-20 h-auto"
            src="https://ssl.gstatic.com/docs/common/profile/platypus_lg.png"
            alt="Logo"
          />
          Ornitorrinco
        </span> 
      </a>

        <div className="flex flex-row items-center text-xl gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:ps-5 sm:pb-0 sm:overflow-x-visible [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <Link
            className="font-medium text-blue-500 focus:outline-none"
            to="/" // Change href="#" to to="/" for proper React Router Link usage
            aria-current="page"
          >
            Contacto
          </Link>
          <Link
            className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
            to="#"
          >
            User
          </Link>
          <Cart/>
        </div>
      </nav>
    </header>
  )
}
export default NavBar
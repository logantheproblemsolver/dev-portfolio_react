import React from 'react';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-end bg-yellow-25 bg-black">
    <div className="flex flex-wrap items-end w-full">
      <div className="w-full relative flex justify-end md:w-auto md:static md:block md:justify-start">
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <FontAwesomeIcon className="text-black" icon={faTimes} /> : <FontAwesomeIcon className="text-black" icon={faBars} />}
        </button>
      </div>
      <div
        className={
          "md:flex flex-grow items-center bg-black justify-center md:justify-end" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <ul className="flex flex-col md:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/introduction"
            >
              <span className="ml-2">About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/projects"
            >
              <span className="ml-2">Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="contact"
            >
              <span className="ml-2">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
};

export default NavBar;
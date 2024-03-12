import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black px-4 sm:px-8 lg:px-20 xl:px-28 font-sans font-medium sticky top-0 w-full z-50">
      <div className="flex mx-auto justify-between items-center py-4">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 44"
          className="w-32 h-8 sm:w-40 lg:w-44"
        >
          <title>TekRevol</title>
          <path
            fill="#ef5123"
            d="M270.43.31V17.87c-.34.68-9.05,20.25-25.06,23.92Z"
          ></path>
          <path
            fill="#f37a20"
            d="M298.5,41.78c-16.07-3.7-24.72-23.23-25.09-24.08l0-17.39Z"
          ></path>
          <polygon
            fill="#ee3824"
            points="263.63 35.73 280.24 35.73 293.31 43.69 271.94 43.6 250.57 43.69 263.63 35.73"
          ></polygon>
          <path
            fill="#FFFFFF"
            d="M265.73,33.07a.62.62,0,0,1-.55-.34.63.63,0,0,1,.05-.65L272,22.59a.63.63,0,0,1,.51-.27h0a.64.64,0,0,1,.51.31l5.68,9.5a.62.62,0,0,1,0,.62.64.64,0,0,1-.53.32Z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M114.63,38.85h-7.9L94.36,25h14.89c1,0,1.58-.86,1.58-2.55s-.53-2.56-1.58-2.56H91.33v19H85.56V14.09h24a6.18,6.18,0,0,1,5.25,2.6,9.28,9.28,0,0,1,1.79,5.74,9.23,9.23,0,0,1-1.79,5.73,6.16,6.16,0,0,1-5.25,2.6h-2.21Z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M146.47,19.87H125.81v3.72h19.32v5.77H125.81v3.71h20.61v5.78H120V14.09h26.44Z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M178.54,14.09,165.93,38.85H161L148.35,14.09h6.46l8.71,17,8.57-16.95Z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M211.92,31a7.39,7.39,0,0,1-2.36,5.59,8,8,0,0,1-5.73,2.24H189.29a8,8,0,0,1-5.74-2.24A7.38,7.38,0,0,1,181.2,31V21.93a7.38,7.38,0,0,1,2.35-5.6,8.06,8.06,0,0,1,5.74-2.24h14.54a8,8,0,0,1,5.73,2.24,7.39,7.39,0,0,1,2.36,5.6Zm-5.77,0V21.94c0-1.37-.78-2.07-2.32-2.07H189.29c-1.54,0-2.31.7-2.31,2.07V31c0,1.37.77,2.06,2.31,2.06h14.54C205.37,33.07,206.15,32.38,206.15,31Z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M240.15,38.85H215.34V14.09h5.79v19h19Z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M29.62,19.87H18.46v19H12.67v-19H1.5V14.1H29.62Z"
          ></path>
          <path
            fill="#FFFFFF"
            d="M59.14,19.87H38.48v3.72H57.81v5.77H38.48v3.71H59.11v5.79H32.71V14.1H59.14Z"
          ></path>
          <polygon
            fill="#ef5123"
            points="72.78 13.31 62.19 26.2 73.87 38.9 82.35 38.9 70.94 25.65 80.6 13.31 72.78 13.31"
          ></polygon>
        </svg>
        <div className="hidden md:flex space-x-4 md:space-x-5 lg:space-x-6">
          {/* Hide on screens smaller than md (medium) */}
          <a href="#home" className="text-white text-xs lg:text-sm">
            Home
          </a>
          <a href="#about" className="text-white text-xs lg:text-sm">
            About
          </a>
          <a href="#services" className="text-white text-xs lg:text-sm">
            Services
          </a>
          <a href="#solution" className="text-white text-xs lg:text-sm">
            Solution
          </a>
          <a href="#technologies" className="text-white text-xs lg:text-sm">
            Technologies
          </a>
          <a href="#location" className="text-white text-xs  lg:text-sm">
            Location
          </a>
        </div>
        <button className="hidden md:block lg:py-3 bg-primary text-white uppercase rounded-md text-xs  py-2 px-4">
          Get a Proposal
        </button>
        <div className="flex md:hidden space-x-4">
          {/* Show on screens smaller than md (medium) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            x="0px"
            y="0px"
            width="25"
            height="25"
            className="fill-white cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            overflow="hidden"
            className={`fill-white cursor-pointer ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            onClick={toggleMobileMenu}
          >
            <path d="M810.66 170.66q18.33 0 30.495 12.165t12.165 30.495q0 18.002-12.33 30.33L572.315 511.98 840.99 780.308q12.329 12.33 12.329 30.331 0 18.33-12.165 30.495T810.66 853.3q-18.002 0-30.331-12.329L512 572.293 243.671 840.97q-12.329 12.33-30.33 12.33-18.33 0-30.496-12.166T170.68 810.64q0-18.002 12.33-30.33l268.676-268.33L183.01 243.652q-12.329-12.33-12.329-30.331 0-18.33 12.165-30.495t30.495-12.165q18.002 0 30.331 12.329L512 451.666l268.329-268.677q12.329-12.33 30.33-12.33z"></path>
          </svg>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end h-16 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            x="0px"
            y="0px"
            width="25"
            height="25"
            className="fill-white cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center mt-20">
          <a href="#home" className="text-white py-4">
            Home
          </a>
          <a href="#about" className="text-white py-4">
            About
          </a>
          <a href="#services" className="text-white py-4">
            Services
          </a>
          <a href="#solution" className="text-white py-4">
            Solution
          </a>
          <a href="#technologies" className="text-white py-4">
            Technologies
          </a>
          <a href="#location" className="text-white py-4">
            Location
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

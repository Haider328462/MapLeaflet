import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-between`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          <li><a href="/" className="block px-2 py-1 hover:text-blue-300">Home</a></li>
          <li><a href="/about" className="block px-2 py-1 hover:text-blue-300">About</a></li>
          <li><a href="/services" className="block px-2 py-1 hover:text-blue-300">Services</a></li>
          <li><a href="/contact" className="block px-2 py-1 hover:text-blue-300">Contact</a></li>
        </ul>

        {/* Profile Section */}
        <div className="relative md:block">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src="https://via.placeholder.com/40" // Replace with user profile picture URL
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="hidden md:inline">User Name</span> {/* Replace with the user's name */}
          </button>

          {/* Dropdown for larger screens */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-blue-600 rounded shadow-lg md:block">
              <ul className="py-1">
                <li><a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</a></li>
                <li>
                  <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile View for Profile and Logout Options */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col bg-white text-blue-600 rounded shadow-lg">
            <li><a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</a></li>
            <li>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-200">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

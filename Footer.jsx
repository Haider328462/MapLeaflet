
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Company Name</h5>
            <ul className="mt-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

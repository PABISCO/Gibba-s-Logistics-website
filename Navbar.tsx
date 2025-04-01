import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Gibba's Logistics</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800">Home</a>
              <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800">Services</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800">About</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800">Home</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800">Services</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
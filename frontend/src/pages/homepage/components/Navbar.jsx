import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 ">
   <div className="flex items-center justify-between px-6 pt-10 mx-5 ">
        
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide items-center">
          MEDIFLOW_<span className="text-red-500">Ai</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-xs font-semibold">
          <a href="/" className="hover:text-red-600 transition">HOME</a>
          <a href="#" className="hover:text-red-600 transition">DEMO</a>
          <a href="#" className="hover:text-red-600 transition">PRICING</a>
          <a href="#" className="hover:text-red-600 transition">BOOK A CALL</a>
        </nav>

        {/* Desktop Button */}

        <button className="hidden md:block bg-orange-500 text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-orange-600 transition"
        onClick={() => navigate("/login")}
        >
          SIGN UP
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm font-semibold bg-gray-100">
          <a href="#">MENU</a>
          <a href="#">PARTNERS</a>
          <a href="#">EMI CALCULATOR</a>
          <a href="#">CONTACT US</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            SIGN IN
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

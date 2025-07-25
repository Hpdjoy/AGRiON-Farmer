import React, { useState } from "react";
import { PiPlantFill } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleTeamScroll = () => {
    const teamSection = document.getElementById("team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav className="bg-[#f0fdf4] shadow-md py-4 px-6 md:px-10 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      {/* Logo */}
      <p className="text-black text-2xl md:text-3xl font-bold flex items-center gap-2">
        <PiPlantFill className="text-[#5fa437]" size={28} />
        <span>
          AGRi<span className="text-[#5fa437]">ON</span>
        </span>
      </p>

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 items-center">
        <button
          className="text-gray-700 hover:text-[#5fa437] font-medium"
          onClick={handleTeamScroll}
        >
          Our Team
        </button>
        <button
          className="bg-[#5fa437] text-white font-bold py-2 px-6 rounded-md hover:bg-[#4e852e]"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#f0fdf4] shadow-md md:hidden flex flex-col items-start px-6 py-4 space-y-4 z-20">
          <button
            className="text-gray-700 hover:text-[#5fa437] font-medium"
            onClick={handleTeamScroll}
          >
            Our Team
          </button>
          <button
            className="bg-[#5fa437] text-white font-bold py-2 px-6 rounded-md hover:bg-[#4e852e]"
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

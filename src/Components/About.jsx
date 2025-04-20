import React from "react";
import { useNavigate } from "react-router-dom";
import { PiPlantFill } from "react-icons/pi";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-10 flex justify-between items-center">
        <p className="text-black text-4xl flex">
          <PiPlantFill className="text-[#5fa437] inline items-center" />AGRi
          <span className="text-[#5fa437]">ON</span>
        </p>
        <button
          className="bg-[#5fa437] text-white font-bold py-2 px-6 rounded-md hover:bg-[#4e852e]"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-5xl font-bold text-[#5fa437]">
          Welcome to AGRiON
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mt-4">
          Experience the future of agriculture with our Automated Adaptive
          Greenhouse technology, designed to optimize plant growth and maximize
          yield.

          
        </p>
        
        <button
          className="mt-6 bg-[#5fa437] text-white font-bold py-3 px-8 rounded-md hover:bg-[#4e852e]"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MainPage;

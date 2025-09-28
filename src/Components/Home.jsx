import React, { useState, Button  } from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import ReplyIcon from '@mui/icons-material/Reply';


function Home({ setIsloggedIn }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      {/* Desktop View */}
      <div className="hidden md:flex h-screen bg-gray-100">
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          setIsloggedIn={setIsloggedIn}
        />
        {/* Main Content Area shifts based on sidebar state */}
        <div
          className={`transition-all duration-500 flex-1 ${
            showSidebar ? "ml-[22%]" : "ml-[6%]"
          }`}
        >
          <Outlet />
        </div>
      </div>

       <div className="flex md:hidden flex-col h-screen bg-gray-50">
      {/* Navbar on top */}
      <Navbar />

      {/* Centered content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          <AppBlockingIcon className="animate-pulse"/> Desktop Only
        </h2>
        <p className="text-gray-600 mb-6">
          The devloper has not optimized the app for mobile devices.
          Please access it from a desktop or laptop for the best experience.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#5fa437] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#4e852e] transition flex items-center gap-2"
        > 
          <ReplyIcon />
          Go to Home
        </button>
      </div>
    </div>
    </div>
  );
}

export default Home;

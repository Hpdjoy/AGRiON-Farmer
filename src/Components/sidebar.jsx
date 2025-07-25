import React from "react";
import { auth } from "../../firebase";
import { GrTest } from "react-icons/gr";
import { signOut } from "firebase/auth";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { PiPlantFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { AiFillControl } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { FaBrain } from "react-icons/fa";

function Sidebar({ showSidebar, setShowSidebar, setIsloggedIn }) {

  const Signout = async () => {
    console.log("Logout Clicked");
    await signOut(auth);
    setIsloggedIn(false);
  };

  return (
    <div
      className={`h-screen bg-[#5fa437] text-white fixed left-0 top-0 transition-all duration-500 flex flex-col justify-items-center z-10 ${
        showSidebar ? "w-[22%]" : "w-[6%]"
      }`}
    >
      <a href="/">
      <div className="flex justify-center text-5xl mt-3">
        <PiPlantFill />
        {showSidebar && (
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-white">
              AGR<span className="text-[#]">i</span>ON
            </h1>
            <span className="text-lg ml-32 text-white">Farmer</span>
          </div>
        )}
      </div>
      </a>

      <div className="p-4 flex items-center justify-between">
        {showSidebar ? (
          <RxCross2
            className="text-6xl cursor-pointer hover:bg-white/10 p-2 rounded-md"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        ) : (
          <IoMenu
            className="text-6xl cursor-pointer hover:bg-white/10 p-2 rounded-md"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        )}
      </div>

      <div className="flex flex-col justify-start h-full pt-10">
        <Link to="/home" className="sidebar-link">
          <div className="flex items-center gap-4 p-2 hover:bg-white/10 rounded-md">
            <MdSpaceDashboard className="text-4xl" />
            {showSidebar && <span className="text-lg">Dashboard</span>}
          </div>
        </Link>


        <Link to="/home/llm" className="sidebar-link">
        <div className="flex items-center gap-4 p-2 hover:bg-white/10 rounded-md">
        <FaBrain  className="text-4xl" />
            {showSidebar && <span className="text-lg">AgriOn AI</span>}
          </div>
        </Link>

        <Link to="/home/controls" className="sidebar-link">
          <div className="flex items-center gap-4 p-2 hover:bg-white/10 rounded-md">
            <AiFillControl className="text-4xl" />
            {showSidebar && <span className="text-lg">Controls</span>}
          </div>
        </Link>

        <Link to="/home/settings" className="sidebar-link">
          <div className="flex items-center gap-4 p-2 hover:bg-white/10 rounded-md">
            <IoMdSettings className="text-4xl" />
            {showSidebar && <span className="text-lg">Settings</span>}
          </div>
        </Link>

        <Link to="/home/test" className="sidebar-link">
          <div className="flex items-center gap-4 p-2 hover:bg-white/10 rounded-md">
            <GrTest className="text-4xl" />
            {showSidebar && <span className="text-lg">Test Lab</span>}
          </div>
        </Link>


        <div className="mt-auto mb-4 w-full" onClick={Signout}>
          <button className="flex items-center gap-4 p-2 w-full hover:bg-white/10 rounded-md">
            <FiLogOut className="text-4xl" />
            {showSidebar && <span className="text-lg">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

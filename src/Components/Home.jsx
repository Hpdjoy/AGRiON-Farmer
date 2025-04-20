// This COMPONENT IS USED for making a sidebar and a main content area.
// It uses the Sidebar component and the Outlet component from react-router-dom to render the main content area based on the current route.
// It also accepts a prop setIsloggedIn to manage the login state of the user.


import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

function Home({ setIsloggedIn }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-gray-00">
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        setIsloggedIn={setIsloggedIn}
      />
      {/* Main Content Area shifts based on sidebar state */}
      <div className={`transition-all duration-500 flex-1 ${showSidebar ? 'ml-[22%]' : 'ml-[6%]'}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

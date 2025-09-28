import React, { useState, useEffect } from "react";
import AutorenewIcon from '@mui/icons-material/Autorenew';

function DemoLoader() {
//   const [dots, setDots] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prev) => (prev.length < 3 ? prev + "." : ""));
//     }, 500);
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="">
      <span>Setting up demo user <AutorenewIcon className="animate-spin" /></span>
    </div>
  );
}

export default DemoLoader;

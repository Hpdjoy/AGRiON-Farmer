import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PiPlantFill } from "react-icons/pi";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase";
import {Link} from "react-router-dom";

function Login(props) {

  const {isLoggedIn, setIsloggedIn} = props;
  const Navigate = useNavigate();

  const handleGoogleSignIn =async () => {
      console.log("Google Sign-In Clicked");
     const result = await signInWithPopup(auth, googleAuthProvider );
     console.log(result);
      setIsloggedIn(true);
      Navigate("/Home");
      // Implement Google authentication logic here
    }


  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center">
      {/* Left Image Section */}
      <div className="bg-white h-screen w-[60%]">
        <img
          src="https://advcloudfiles.advantech.com/cms/f31c3275-af78-45cf-9a0f-3a9762d357c6/Content/content-image-1627985071702.jpg"
          alt="login"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="bg-white h-screen w-[40%] flex flex-col items-center justify-center">
        {/* Heading */}
        <p className="text-black text-4xl flex"><PiPlantFill className="text-[#5fa437] inline items-center mb-15" />AGRi<span className="text-[#5fa437] ">ON</span></p>
       
        <h1 className="text-3xl text-[#5fa437] font-bold text-center">
          <span className="text-black">AUTOMATED ADAPTIVE</span>
          <br /> GREENHOUSE <br />
          <span className="text-black">AGRICULTURE</span>
        </h1>

        {/* Input Fields */}
        <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-xs">
          <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth />
          <TextField id="outlined-password-input" label="Password" type="password" variant="outlined" fullWidth />

      <button className="bg-[#5fa437] text-white font-bold py-2 px-4 rounded-md w-full active:bg-[#4e852e]" onClick={handleGoogleSignIn}> Login </button>


      <Button
      variant="contained"
      startIcon={<GoogleIcon />}
      onClick={handleGoogleSignIn}
      sx={{
        backgroundColor: "#ddd", // Google Red
        color: "white",
        "&:hover": { backgroundColor: "#C1351D" }, // Darker red on hover
        textTransform: "none",
        fontWeight: "bold",
        padding: "10px 20px",
        borderRadius: "8px",
      }}

      
    >
      Sign in with Google
    </Button>

    <Link
    to="/home"
    className="text-[#5fa437] font-bold px-3 py-2 hover:bg-[#4e852e] hover:text-white rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#5fa437] focus:ring-opacity-50"
  >
    Surpass Login
    </Link>
    <span className="text-red-600">Notice: Surpass is just for Demo View.</span>

          
        </div>
      </div>
    </div>
  );
}

export default Login;

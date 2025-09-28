import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useNavigate, Link } from "react-router-dom";
import { PiPlantFill } from "react-icons/pi";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase";
import DemoLoader from "./DemoLoader";

function Login(props) {
  const { isLoggedIn, setIsloggedIn } = props;
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [demoUser, setDemoUser] = React.useState("");
  const [loadingDemo, setLoadingDemo] = useState(false);
  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(""), 2000);
    return () => clearTimeout(timer);
  }, [error]);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsloggedIn(true);
      navigate("/home"); // redirect after login
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    console.log("Google Sign-In Clicked");
    const result = await signInWithPopup(auth, googleAuthProvider);
    console.log(result);
    setIsloggedIn(true);
    navigate("/Home");
  };

  const handleDemoLogin = () => {
    setLoadingDemo(true);
    setTimeout(() => {
      // simulate demo setup
      setDemoUser("demoUser@gmail.com");
      setIsloggedIn(true);
      navigate("/home");
    }, 2000); // 2-second delay for demo setup    
  };

  return (
    <div className="bg-gray-100 min-h-screen w-screen flex flex-col md:flex-row">
      {/* Left Image Section */}
      <div className="hidden md:block bg-white md:w-1/2 lg:w-3/5">
        <img
          src="https://advcloudfiles.advantech.com/cms/f31c3275-af78-45cf-9a0f-3a9762d357c6/Content/content-image-1627985071702.jpg"
          alt="login"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="bg-white flex flex-col items-center justify-center px-6 py-10 w-full md:w-1/2 lg:w-2/5">
        {/* Logo / Heading */}
        <div className="text-black text-4xl flex-col items-center mb-4">
          <div className="flex items-center">
            <PiPlantFill className="text-[#5fa437]" />
            AGRi<span className="text-[#5fa437]">ON</span>
          </div>
          <div className="text-sm flex justify-end">Farmer</div>
        </div>


        <h1 className="text-2xl md:text-3xl text-[#5fa437] font-bold text-center leading-snug mb-6">
          <span className="text-black">AUTOMATED ADAPTIVE</span>
          <br /> GREENHOUSE <br />
          <span className="text-black">AGRICULTURE</span>
        </h1>

        {/* Input Fields */}
        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-red-600 text-white rounded shadow-lg animate-fade-in-out z-50">
              * Invalid credentials, please try again.
            </div>
          )}
          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            onClick={handleEmailLogin}
            sx={{
              backgroundColor: "#5fa437",
              color: "white",
              "&:hover": { backgroundColor: "#4e852e" },
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              width: "100%",
            }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
            sx={{
              backgroundColor: "#5fa437",
              color: "white",
              "&:hover": { backgroundColor: "#4e852e" },
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              width: "100%",
            }}
          >
            Sign in with Google
          </Button>


          <div className="w-full">
            <Button
              variant="contained"
              startIcon={<AccessibilityNewIcon />}
              onClick={handleDemoLogin}
              sx={{
                border: "2px solid yellow",
                background: "linear-gradient(90deg, #4e852e, #5fa437)",
                color: "white",
                "&:hover": {
                  background: "linear-gradient(90deg, #3c6b23, #4e852e)",
                },
                textTransform: "none",
                fontWeight: "600",
                padding: "12px 24px",
                borderRadius: "10px",
                width: "100%",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                fontSize: "16px",
              }}
            >
              {loadingDemo ? <DemoLoader /> : <span>Demo (No Signup Required)</span>}
            </Button>
          </div>


          <span className="text-red-600 text-sm text-center">
            Notice: Demo account is for trial purposes only.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

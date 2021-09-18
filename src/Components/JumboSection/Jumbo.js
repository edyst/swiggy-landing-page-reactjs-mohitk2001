import React, { useState } from "react";
import "./Jumbo.css";
import Box from "./Box";
import Login from "./Login";
import Signup from "./Signup";
function Jumbo() {
  
  const [animeText, setanimeText] = useState("Movie marathon?");
  const handleLogin=()=>{
    console.log("login")
  }
  const handleSignUp=()=>{
    console.log("handleSignUp")
  }
  return (
    <div className="jumbo">
      <div className="jumboLeft">
        <div className="jumboLeftHeader">
          <div className="logoPart">
          <img src="https://cdn.iconscout.com/icon/free/png-256/swiggy-1613371-1369418.png" alt="logo" className="swiggyLogo" />
          <h1>SWIGGY</h1>
          </div>
          <div className="buttons">
            <button className="login" onClick={handleLogin}>Login</button>
            <button className="signUp" onClick={handleSignUp}>Sign up</button>
          </div>
        </div>
        <Box/>
      </div>
      <div className="jumboRight">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Breakfast2-new_men3ne"
          alt="topPic"
        />
        <Login/>
      </div>
    </div>
   
   
  );
}

export default Jumbo;

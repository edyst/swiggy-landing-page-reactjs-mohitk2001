import React, { useState } from "react";
import "./Jumbo.css";
import Box from "./Box";
function Jumbo() {
  
  const [animeText, setanimeText] = useState("Movie marathon?");
    

  return (
    <div className="jumbo">
      <div className="jumboLeft">
        <div className="jumboLeftHeader">
          <h1>SWIGGY</h1>
          <div className="buttons">
            <button className="login">Login</button>
            <button className="signUp">Sign up</button>
          </div>
        </div>
        <Box/>
      </div>
      <div className="jumboRight">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Breakfast2-new_men3ne"
          alt="topPic"
        />
      </div>
    </div>
  );
}

export default Jumbo;

import React, { useState } from "react";
import "./Jumbo.css";
import texts from "./AnimeText";
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
        <h1 className="animationText">{animeText}</h1>
      </div>
      <div className="jumboRight">
        <img
          src="https://web.archive.org/web/20210903175246im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
          alt="topPic"
        />
      </div>
    </div>
  );
}

export default Jumbo;

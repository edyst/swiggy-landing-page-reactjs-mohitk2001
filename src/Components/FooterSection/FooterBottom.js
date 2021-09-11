import React from "react";
import "./FooterBottom.css";
function FooterBottom() {
  return (
    <div className="FooterBottom">
      <div className="firstB">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
          alt="img"
        />
      </div>
      <div className="firstS">
        <h2>&copy;  2021 Swiggy</h2>
      </div>
      <div className="bottomLast">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-pinterest-p"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter-square"></i>
      </div>
    </div>
  );
}

export default FooterBottom;

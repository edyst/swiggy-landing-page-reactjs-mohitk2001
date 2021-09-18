import React from "react";
import "./Jumbo.css";
function Login() {
    const cut=()=>{
        console.log("cut")
    }
  return (
    <div className="loginCompo">
      <div className="loginBox">
        <i class="fas fa-times" style={{ fontSize: "30px", }} onClick={cut}></i>
        <div className="loginHead">
          <div>
            <h1>Login</h1>
            <p>or create an account</p>
          </div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            alt="img"
            className="loginImage"
          />
        </div>
        <input type="number" name="" id="logINBTN" placeholder="Phone number"/>
        <button id="logButton">LOGIN</button>
        <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
      </div>
    </div>
  );
}

export default Login;

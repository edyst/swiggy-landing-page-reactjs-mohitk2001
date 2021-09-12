import React,{useState} from "react";
import texts from "./AnimeText";
import "./Box.css";
function Box() {
    const [location, setLocation] = useState("")
    const [animeText, setanimeText] = useState("Cooking gone wrong?")
   
   
  return (
    <div className="box">
      <h1>{animeText}</h1>
      <p className="order_food_desc">Order food from favourite restaurants near you.</p>
      <div className="address_pick">
        <input type="text" placeholder="Enter Your Delivery Location" onChange={(e)=>setLocation(e.target.value)} />
        <button>Find Food</button>
      </div>
      <h3 className="popular_city">POPULAR CITIES IN INDIA</h3>
      <p className="cities">
        <span>Ahmedabad</span>
        <span>Banglore</span>
        <span>Chennai</span>
        <span>Delhi</span>
        <span>Gurgaon</span>
        <span>Hyderabad</span>
        <span>Kolkata</span>
        <span>Mumbai</span>
        <span>Pune</span>
        <span>& more</span>
      </p>
    </div>
  );
}

export default Box;

import React from "react";
import "./Logo.css";
import ebBauLogo from "../../assets/ebBauLogo.png";
import { PiBuildingFill } from "react-icons/pi";

const Logo = () => {
  return (
    <div className="logo">
      <div className="icon_container">
      {/* <PiBuildingFill /> */}
      <img src={ebBauLogo} alt="" />
      </div>
        <h1 className="name">EB<span>Bau</span></h1>
    </div>
  );
};

export default Logo;
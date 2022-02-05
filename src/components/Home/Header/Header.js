import React from "react";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <Navbar />
      <HeaderMain />
      <BusinessInfo />
    </div>
  );
};

export default Header;

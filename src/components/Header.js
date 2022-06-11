import NavBtn from "./Navbtn";
import React from "react";
import Logo from "../images/marvel-us.jpg";
const Header = (props) => {
  return (
    <div className="navContainer">
      <div className="header">
        <div className="logo">
          <img src={Logo} />
        </div>
        <nav id="NavBar">
          <div className="navLinks">
            <NavBtn text="Button 1" />
            <NavBtn text="Button 2" />
            <NavBtn text="Button 3" />
            <NavBtn text="Button 4" />
            <NavBtn text="Button 5" />
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;

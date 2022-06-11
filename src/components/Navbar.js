import React, { useState } from "react";
import { Navbtn } from "./Navbtn";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Logo from "../images/marvel-us.jpg";

const Navbar = (props) => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} />
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

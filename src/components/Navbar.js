import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Logo from "../images/marvel-us.jpg";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    }
    else {
      setDropdown(true);
    }
  }
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    }
    else {
      setDropdown(false);
    }
  }
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} />
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="../pages/Home"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link
              to="../pages/Tech"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Tech Trends
              {dropdown && <Dropdown/> }
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="../pages/Tech"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Global News
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="../pages/hotw"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Hero of the Week
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="../pages/mw"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Most Wanted
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Button />   
      </nav>
    </div>
  );
};
export default Navbar;

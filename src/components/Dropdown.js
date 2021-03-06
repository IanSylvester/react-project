import React, { useState } from "react";
import MenuItems from "./MenuItems.js";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  return (
    <div>
      <ul
        onClick={clickHandler}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="item-dropdown"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Dropdown;

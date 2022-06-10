import NavBtn from "./NavBtn";
import React from "react";
const Header = (props) => {
  return (
    <div className="header">
      <h1>header</h1>
      <NavBtn text="Button 1" />
      <NavBtn text="Button 2" />
      <NavBtn text="Button 3" />
      <NavBtn text="Button 4" />
      <NavBtn text="Button 5" />
    </div>
  );
};
export default Header;

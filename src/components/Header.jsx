import React from "react";
import burger from "../assets/menu.png";
import logo from "../assets/Montecito.gif";

function Burger() {
  return (
    <header className="dark flex between padding-header">
      <button type="button">
        <img
          src={burger}
          alt="navigation menu for mobile - three lines navigation"
        />
      </button>
      <img src={logo} alt="logo of Montecito" className="logo-mobile" />
    </header>
  );
}

export default Burger;

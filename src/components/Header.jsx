import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger from "../assets/menu.png";
import croix from "../assets/croix.png";
import logo from "../assets/Montecito.gif";

function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="flex padding-header">
      <button type="button" onClick={() => setOpenBurger(!openBurger)}>
        <img
          src={burger}
          alt="menu de navigation sur le site internet - trois lignes de navigation"
        />
      </button>
      <img src={logo} alt="logo of Montecito" className="logo-mobile" />
      {openBurger && (
        <nav className="flex col openBurger between">
          <button
            type="button"
            onClick={() => setOpenBurger(false)}
            className="croix"
          >
            <img
              src={croix}
              alt="croix pour fermer la navigation sur la page"
            />
          </button>
          <Link to="/">
            <button type="button" onClick={() => setOpenBurger(false)}>
              Accueil
            </button>
          </Link>
          <Link to="/Carte">
            <button type="button" onClick={() => setOpenBurger(false)}>
              Carte
            </button>
          </Link>
          <Link to="/Evenements">
            <button type="button" onClick={() => setOpenBurger(false)}>
              Evenements
            </button>
          </Link>
          <Link to="/Contact">
            <button type="button" onClick={() => setOpenBurger(false)}>
              Contact
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Burger;

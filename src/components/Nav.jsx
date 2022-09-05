import React from "react";
import { Link } from "react-router-dom";
import croix from "../assets/croix.png";

function Nav({ setOpenBurger }) {
  return (
    <nav className="flex col openBurger between">
      <button
        type="button"
        onClick={() => setOpenBurger(false)}
        className="croix"
      >
        <img src={croix} alt="croix pour fermer la navigation sur la page" />
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
          Évènements
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Contact
        </button>
      </Link>
    </nav>
  );
}

export default Nav;

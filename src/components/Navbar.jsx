import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex between">
      <Link to="/">Accueil</Link>
      <Link to="/Carte">Carte</Link>
      <Link to="/Evenements">Evenements</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

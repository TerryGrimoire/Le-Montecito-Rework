import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="dark flex col center padding1 footer">
      <p>Site internet fait par Terry Grimoire</p>
      <Link to="/Mentions">Mentions Légales</Link>
    </footer>
  );
}

export default Footer;

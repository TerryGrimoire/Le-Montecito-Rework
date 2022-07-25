import React from "react";
import carte from "../assets/carte.png";

function Carte() {
  return (
    <div>
      <img
        src={carte}
        alt="cocktail avec carte du Montecito en fond et bougie sur le coté"
        className="banner"
      />

      <h1>Notre carte</h1>
    </div>
  );
}

export default Carte;

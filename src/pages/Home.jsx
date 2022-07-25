import React from "react";
import simon from "../assets/Simon.jpg";

function Home() {
  return (
    <div className="container">
      <img
        src={simon}
        alt="Simon le propriétaire du Montecito pose devant le bar"
        className="banner"
      />

      <h1>Bienvenue au Montecito</h1>

      <article>
        <h2>Notre histoire</h2>
        <p>
          Le Montecito est un bar gay-friendly, spécialisé dans la confection de
          cocktails. En plus de ses 32 cocktails à la carte, Simon vous propose
          également des cocktails sur-mesure, un vaste choix de vins, de
          spiritueux, de bières et pour les gourmands, des planches apéritives.
          En plus d'être une bonne adresse pour boire, c'est aussi et surtout
          une bonne adresse pour s'amuser. Chaque mois, l'équipe y organise des
          soirées à thème (DJ , Scènes ouvertes , Cabaret transformiste, etc).
          Mais le rendez-vous à ne surtout pas manquer, c'est le loto bingo du
          Montecito présenté par notre artiste transformiste incontournable des
          nuits nantaises : Pamela Kay. L'ambiance du Montecito se veut
          familiale et bienveillante. Ici tout le monde a sa place et peut venir
          comme bon lui semble.
        </p>
      </article>
    </div>
  );
}
export default Home;

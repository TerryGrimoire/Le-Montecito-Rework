import React from "react";
import simon from "../assets/Simon.png";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";

function Home() {
  return (
    <div className="container">
      <LandingImage data={LandingImageData[0]} />
      <article>
        <h2>A propos</h2>
        <img
          src={simon}
          alt="Simon le propriétaire du Montecito pose devant le bar"
          className="banner"
        />
        <p>
          Le Montecito est un bar gay-friendly, spécialisé dans la confection de
          cocktails. En plus de ses 32 cocktails à la carte, Simon vous propose
          également des cocktails sur-mesure, un vaste choix de vins, de
          spiritueux, de bières et pour les gourmands, des planches apéritives.
          En plus d'être une bonne adresse pour boire, c'est aussi et surtout
          une bonne adresse pour s'amuser.
        </p>
      </article>
      <article>
        <h2>Notre carte</h2>
        <img
          src="https://media2.giphy.com/media/woq6NIyY0IpoI/giphy.gif?cid=790b7611472efe65a9d6919f2c5c70b190a1517291c79ecd&rid=giphy.gif&ct=g"
          alt="cocktail joli qui tourne sur lui-même"
          className="banner"
        />
      </article>

      <article>
        <h2>Nos soirées et évènements</h2>
        <img
          src="https://media1.giphy.com/media/1fPogKALBII0OFpxHj/giphy.gif?cid=ecf05e47mcch6d73j8ceznpgbxnhmhfk0hearjbt80axt3an&rid=giphy.gif&ct=g"
          alt=""
          className="banner"
        />
        <p>
          Chaque mois, l'équipe y organise des soirées à thème (DJ , Scènes
          ouvertes , Cabaret transformiste, etc). Mais le rendez-vous à ne
          surtout pas manquer, c'est le loto bingo du Montecito présenté par
          notre artiste transformiste incontournable des nuits nantaises :
          Pamela Kay. L'ambiance du Montecito se veut familiale et
          bienveillante. Ici tout le monde a sa place et peut venir comme bon
          lui semble.
        </p>
      </article>
    </div>
  );
}
export default Home;

import React from "react";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";
import evenement from "../assets/events.gif";

function Evenements() {
  return (
    <div>
      <LandingImage data={LandingImageData[2]} />

      <article>
        <h2>Retrouvez tous nos évènements sur Facebook</h2>
        <img
          src={evenement}
          alt="gif de plusieurs evenements passés qui se succèdent"
          className="main-image"
        />
        <p>
          Nos soirées et évènements sont listées sur notre page Facebook et sur
          notre compte instagram. Vous pouvez également nous contacter pour plus
          d'informations sur ou si vous souhaitez faire un partenariat ou
          organiser des évènements au Montecito.
        </p>
      </article>
    </div>
  );
}

export default Evenements;

import React from "react";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";
import facebook from "../assets/facebook.png";

function Evenements() {
  return (
    <div>
      <LandingImage data={LandingImageData[2]} />

      <article>
        <h2>Notre page Facebook</h2>
        <p>
          Nos soirées et évènements sont listées sur notre page Facebook et sur
          notre compte instagram. Vous pouvez également nous contacter pour plus
          d'informations sur ou si vous souhaitez faire un partenariat ou
          organiser des évènements au Montecito.
        </p>
        <a
          href="https://www.facebook.com/montecito.nantes/events"
          className="flex col center al-center"
        >
          <img src={facebook} alt="Facebook" className="m1-1" />
          <p>Nos soirées</p>
        </a>
      </article>
    </div>
  );
}

export default Evenements;

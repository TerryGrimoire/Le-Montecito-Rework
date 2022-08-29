import React from "react";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";

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
        <a href="https://www.facebook.com/montecito.nantes">
          <button type="button"> Consulter notre page Facebook</button>
        </a>
      </article>
    </div>
  );
}

export default Evenements;

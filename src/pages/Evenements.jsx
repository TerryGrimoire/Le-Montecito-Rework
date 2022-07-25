import React from "react";
import evenement from "../assets/events.gif";

function Evenements() {
  return (
    <div>
      <img
        src={evenement}
        alt="gif de plusieurs evenements passés qui se succèdent"
        className="banner"
      />

      <h1>Nos soirées évènements</h1>

      <article>
        <h2>Retrouvez tous nos évènements sur Facebook</h2>
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

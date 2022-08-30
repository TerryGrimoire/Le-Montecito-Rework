import React, { useEffect } from "react";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <LandingImage data={LandingImageData[3]} />

      <section className="flex col center al-center">
        <p>
          Nous sommes joignables par téléphone au 09.86.50.12.07 <br /> ou
          directement sur nos réseaux sociaux, via Facebook ou Instagram.
        </p>
        <div className="flex m1-1">
          <a href="https://www.facebook.com/montecito.nantes">
            <img src={facebook} alt="Facebook" className="m1-1" />
          </a>
          <a href="https://www.instagram.com/lemontecitobar/">
            <img src={instagram} alt="Instagram" className="m1-1" />
          </a>
        </div>

        <p>
          Retrouvez nous également sur place au Le Montecito 6 All. Duquesne,
          44000, Nantes.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10839.804482615813!2d-1.5567481!3d47.2175387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6166585259eeb9fd!2sLe%20Montecito!5e0!3m2!1sfr!2sat!4v1661797588435!5m2!1sfr!2sat"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="plan pour trouver le Montecito"
        />
      </section>
    </div>
  );
}

export default Contact;

import React from "react";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";
import contact from "../assets/contact.png";

function Contact() {
  return (
    <div>
      <LandingImage data={LandingImageData[3]} />

      <img
        src={contact}
        alt="Simon le propriétaire du Montecito pose devant le bar"
        className="main-image"
      />
    </div>
  );
}

export default Contact;

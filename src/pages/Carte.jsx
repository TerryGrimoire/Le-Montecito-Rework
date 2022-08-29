import React from "react";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";

function Carte() {
  return (
    <div>
      <LandingImage data={LandingImageData[1]} />
    </div>
  );
}

export default Carte;

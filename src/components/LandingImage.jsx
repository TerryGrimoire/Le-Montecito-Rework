import React from "react";

function LandingImage({ data }) {
  return (
    <section className="main-image">
      <img src={data.src} alt={data.alt} />
      <h1>{data.title}</h1>
    </section>
  );
}

export default LandingImage;

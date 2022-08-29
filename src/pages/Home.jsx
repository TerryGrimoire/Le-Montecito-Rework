import React from "react";
import { Link } from "react-router-dom";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";
import HomeData from "../data/HomeData";

function Home() {
  return (
    <div className="container">
      <LandingImage data={LandingImageData[0]} />
      <section className="text-center">
        <h2>Bienvenue</h2>
        <h3> Le Montecito bar à cocktails gayfriendly</h3>
        <p>
          vous accueille tous les jours <br /> de 16h00 à 02h00
        </p>
        <p>6 Allée Duquesne, Nantes</p>
        <p> 09.86.50.12.07</p>
      </section>
      {HomeData.map((data) => (
        <article>
          <h2>{data.title}</h2>
          <img src={data.img} alt={data.alt} className="banner" />
          <p>{data.description}</p>
          {data.button && (
            <Link to={data.link}>
              <button type="button">{data.button}</button>
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
export default Home;

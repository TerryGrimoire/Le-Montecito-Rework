import React from "react";
import { Link } from "react-router-dom";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";
import HomeData from "../data/HomeData";

function Home() {
  return (
    <div className="container">
      <LandingImage data={LandingImageData[0]} />
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

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import LandingImage from "../components/LandingImage";
import Article from "../components/Article";
import LandingImageData from "../data/LandingImageData";
import facebook from "../assets/facebook.png";

function Evenements() {
  const [events, setEvents] = useState([]);
  const prepareData = (data) => {
    let obj = {};
    const json = data.map((line, index) => {
      if (index > 1) {
        data[1].forEach((key, j) => {
          obj = { ...obj, [key]: line[j] };
        });
      }
      return obj;
    });
    json.shift();
    json.shift();

    setEvents(json);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJug-4yBLX6H3RbUPOLygnVFnaRqgXJH-wwDy9gsd7WtdM9plGSaTvE3amkD0GbF9JTCelwo04YbkW/pub?gid=1080080014&single=true&output=csv"
    )
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}/${mm}/${dd}`;

  const filteredEvents = events
    .filter((event) => event.date.split("/").reverse().join("/") >= today)
    .sort(
      (a, b) =>
        parseInt(a.date.split("/").reverse().join(""), 10) -
        parseInt(b.date.split("/").reverse().join(""), 10)
    );

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Le Montecito | Évènements</title>
        <link rel="canonical" href="https://lemontecito.com/Evenements" />
      </Helmet>
      <LandingImage data={LandingImageData[2]} />
      {filteredEvents.map((event) => (
        <Article data={event} />
      ))}

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
        </a>
      </article>
    </div>
  );
}

export default Evenements;

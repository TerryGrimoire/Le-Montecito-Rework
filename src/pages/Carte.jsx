import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import LandingImage from "../components/LandingImage";
import LandingImageData from "../data/LandingImageData";
import filtre from "../assets/filtre.png";
import croix from "../assets/multiplier.png";

function Carte() {
  const [drinks, setDrinks] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("all");
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

    setDrinks(json);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJug-4yBLX6H3RbUPOLygnVFnaRqgXJH-wwDy9gsd7WtdM9plGSaTvE3amkD0GbF9JTCelwo04YbkW/pub?gid=0&single=true&output=csv"
    )
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareData(data.data));
  }, []);

  const categories = [
    {
      button: "Toute la carte",
      value: "all",
    },
    {
      button: "Les cocktails",
      value: "cocktails",
    },
    {
      button: "Les bières",
      value: "bieres",
    },
    {
      button: "Les spiritueux",
      value: "spiritueux",
    },
    {
      button: "Les vins",
      value: "vin",
    },
    {
      button: "Les softs",
      value: "soft",
    },
    {
      button: "L'apéro",
      value: "apero",
    },
  ];

  const HandleClick = (el) => {
    setCategory(el);
    setOpen(false);
  };

  return (
    <div className="carte-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Le Montecito | Carte</title>
        <link rel="canonical" href="https://lemontecito.com/Carte" />
      </Helmet>
      <LandingImage data={LandingImageData[1]} />
      <section className="filter-container">
        <button
          type="button"
          className="filter-button mobile"
          onClick={() => setOpen(!open)}
        >
          <img
            src={open ? croix : filtre}
            alt="symbole pour filtrer les elements"
          />
        </button>
        {open && (
          <div className="flex wrap col m1-1 laptopflex">
            {categories.map((el) => (
              <button
                type="button"
                className="button-style m1-1"
                onClick={() => HandleClick(el.value)}
              >
                {el.button}
              </button>
            ))}
          </div>
        )}

        <div className="desktop flex center buttons">
          {categories.map((el) => (
            <button
              type="button"
              className={
                category === el.value
                  ? "button-style red2 m1-1 chosen"
                  : "button-style red2 m1-1"
              }
              onClick={() => setCategory(el.value)}
            >
              {el.button}
            </button>
          ))}
        </div>
        <div className="padding-top">
          {category === "all"
            ? drinks.map((drink) => (
                <div className="cocktail-container">
                  <div className="flex between">
                    <p>{drink.nom}</p>
                    <p className="small">{drink.prix}€</p>
                    {drink.prix2 && <p className="small">{drink.prix2}€</p>}
                  </div>
                  <p className="small ingredients">{drink.ingredients}</p>
                </div>
              ))
            : drinks
                .filter((drink) => drink.categorie === category)
                .map((drink) => (
                  <div className="cocktail-container">
                    <div className="flex between">
                      <p>{drink.nom}</p>
                      <p className="small">{drink.prix}€</p>
                      {drink.prix2 && <p className="small">{drink.prix2}€</p>}
                    </div>
                    <p className="small ingredients">{drink.ingredients}</p>
                  </div>
                ))}
        </div>
      </section>
    </div>
  );
}

export default Carte;

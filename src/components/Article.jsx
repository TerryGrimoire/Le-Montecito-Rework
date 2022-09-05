import React from "react";
import { Link } from "react-router-dom";

function Article({ data }) {
  return (
    <article className="flex col">
      <h2>{data.title}</h2>
      {data.link ? (
        <Link to={data.link}>
          <img src={data.img} alt={data.alt} className="banner" />
        </Link>
      ) : (
        <img src={data.img} alt={data.alt} className="banner" />
      )}

      {data.date && <h3>Date : {data.date} </h3>}
      <p>{data.description}</p>
    </article>
  );
}

export default Article;

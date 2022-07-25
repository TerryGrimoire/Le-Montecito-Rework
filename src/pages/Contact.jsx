import React from "react";
import contact from "../assets/contact.png";

function Contact() {
  return (
    <div>
      <img
        src={contact}
        alt="Simon le propriétaire du Montecito pose devant le bar"
        className="banner"
      />

      <h1>Nous contacter</h1>
    </div>
  );
}

export default Contact;

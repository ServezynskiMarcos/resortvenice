import React from "react";
import s from "./About.module.css";
import cabecera from "./cabecera.jpg";
const About = () => {
  return (
    <div className={s.container}>
      <h1>ABOUT US</h1>
      <img src={cabecera} alt="about" />
      <div className={s.info}>
        <h2>We are part of history</h2>
        <p>
          The Venice resort is listed as one of Italy historical hotels. In
          1941, when it opened for business, it played host to the officer
          Cadets from West Point academy. Famous Hollywood star Clark Gable took
          residence here as Captain in charge of the Cadets. It is one of the
          few privately owned hotels in the area, owned by breast cancer
          specialist Vilma Biaggi, M.D, who spends almost every weekend at the
          hotel and plays piano for guests some nights.
        </p>
      </div>
    </div>
  );
};

export default About;

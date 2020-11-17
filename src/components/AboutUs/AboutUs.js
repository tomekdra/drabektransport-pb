import React from "react";
import "./AboutUs.scss";
import Gallery from "../Gallery/Gallery";

const AboutUs = () => {
  return (
    <div className={"aboutus-container"}>
      <header>
        <div className="aboutus-header-image"></div>
        <div className="aboutus-header-title">
          <h1>O nas</h1>
        </div>
      </header>
      <article className={"container"}>
        <div className="row small-container">
          <i className={"icon-users"} />
          <p className={"p-header"}>
            Jesteśmy firmą specjalizującą się w przewozach międzynarodowych i
            krajowych materiałów sypkich, odpadów, złomu itp. Posiadamy
            nowoczesny tabor który cały czas rozwijamy. Kierujemy się zasadami
            fair-play w biznesie, dzięki czemu współpraca z nami to gwarancja
            bezpieczeństwa.
          </p>
        </div>
        <div className="bar" />
        <div className="row">
          <Gallery />
        </div>
      </article>
    </div>
  );
};

export default AboutUs;

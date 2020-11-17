import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import NavItems from "../NavBar/NavItems";
import Copyright from "./Copyright";
import Overfoot from "./Overfoot";

const Footer = () => {
  const mail1 = "pawel";
  const mail2 = "drabektransport.pl";

  return (
    <footer>
      <Overfoot />
      <div className="container">
        <div className={"row"}>
          <div className="foot-nav-items">
            <NavItems />
          </div>

          <div className="foot-brand-name">
            <Link to={"/"}>DRABEKTRANSPORT.PL</Link>
          </div>

          <div className="foot-contact">
            <div>
              <p>„DRABEK” PAWEŁ DRABEK</p>
              <p>UL. SŁOWIKÓW 14/6 </p>
              <p>PL 41-940 PIEKARY ŚLĄSKIE</p>
            </div>
            <div>
              <p>
                <a href={"tel:+48 792260266"}>
                  <i className={"icon-phone"} /> Tel: +48 792 260 266
                </a>
              </p>
              <p>
                <a href={`mailto:${mail1}@${mail2}`}>
                  <i className={"icon-mail-alt"} /> {`${mail1}@${mail2}`}
                </a>
              </p>
            </div>
            <div>
              <p>NIP: PL 6492140186</p>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <ul>
      <li>
        <NavLink exact to={"/"}>
          STRONA GŁÓWNA
        </NavLink>
      </li>
      <li>
        <NavLink to={"/certyfikaty"}>CERTYFIKATY</NavLink>
      </li>
      <li>
        <NavLink exact to={"/"}>
          USŁUGI
        </NavLink>
      </li>
      <li>
        <NavLink to={"/onas"}>O NAS</NavLink>
      </li>
      <li>
        <NavLink to={"/kontakt"}>KONTAKT</NavLink>
      </li>
    </ul>
  );
};

export default NavItems;

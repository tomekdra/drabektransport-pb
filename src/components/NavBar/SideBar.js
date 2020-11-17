import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  let classes = "side-menu";

  if (props.show) {
    classes = "side-menu show";
  }

  return (
    <div className={classes}>
      <ul className={"navigation-side"}>
        <li>
          <NavLink exact to={"/"} onClick={props.closeSideBar}>
            STRONA GŁOWNA
          </NavLink>
        </li>
        <li>
          <NavLink to={"/certyfikaty"} onClick={props.closeSideBar}>
            CERTYFIKATY
          </NavLink>
        </li>
        <li>
          <NavLink exact to={"/"} onClick={props.closeSideBar}>
            USŁUGI
          </NavLink>
        </li>
        <li>
          <NavLink to={"/onas"} onClick={props.closeSideBar}>
            O NAS
          </NavLink>
        </li>
        <li>
          <NavLink to={"/kontakt"} onClick={props.closeSideBar}>
            KONTAKT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

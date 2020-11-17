import React from "react";
import {Link} from "react-router-dom";

const Overfoot = () => {
    return (
        <>
            <div className={"overfoot"}><Link to={"/"}>DRABEKTRANSPORT.PL</Link></div>
            <div className="overfoot-lg"/>
            <div className="overfoot-bar-lg"></div>
        </>
    )
}

export default Overfoot;
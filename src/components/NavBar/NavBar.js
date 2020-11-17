import React, {useState} from 'react'
import './NavBar.scss'
import {Link} from "react-router-dom"
import logo from '../../images/Drabeklogo.png'
import NavItems from "./NavItems"
import SideBar from "./SideBar";

const NavBar = () => {
    const [sideOpen, setSideOpen] = useState(false);

    const handleToggleSidebar = () => {
        setSideOpen(prevState => !prevState)
    }

    let hamburgerActive = 'hamburger';

    if (sideOpen) {
        hamburgerActive = 'hamburger hamburger-active';
    }

    return (
        <nav className={"navigation-bar"}>
            <div className={"container"}>
                <div className={"navigation-container"}>
                    <Link to={"/"}><img src={logo} className={"brand-logo"} alt={"Drabek Transport"}/></Link>
                    <div className="navigation-menu">
                        <NavItems/>
                    </div>
                    <button className={hamburgerActive} onClick={handleToggleSidebar}/>
                    <SideBar show={sideOpen} closeSideBar={handleToggleSidebar}/>
                </div>
            </div>
            {sideOpen && <div className={"backdrop"} onClick={handleToggleSidebar}/>}
        </nav>
    )
}

export default NavBar;
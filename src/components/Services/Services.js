import React from "react";
import './Services.scss';

const Services = () => {
    return (
        <div className={"services-container"}>
            <header>
                <div className="services-header-image"></div>
                <div className="services-header-title"><h1>Usługi</h1></div>
            </header>
            <article className={"container"}>
                <div className="row small-container">
                    <i className={"icon-users"}/>
                    <div>
                        <p className={"p-header"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor
                            eligendi est fuga harum laboriosam mollitia, nulla officiis, quaerat qui quidem reiciendis
                            tenetur ullam? Dolorum porro quis quos saepe tempore!</p>
                    </div>
                </div>
                <div className="bar"/>
                <div className="row">
                    <div className="services-card">
                        <i className={"icon-map-o"}/>
                        <div className="services-card-title">
                            TRANSPORT MIĘDZYNARODOWY
                        </div>
                        <div className="services-card-content">
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, omnis.
                        </div>
                    </div>

                    <div className="services-card">
                        <i className={"icon-recycle"}/>
                        <div className="services-card-title">
                            TRANSPORT ODPADÓW
                        </div>
                        <div className="services-card-content">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>

                    <div className="services-card">
                        <i className={"icon-truck"}/>
                        <div className="services-card-title">
                            RUCHOME PODŁOGI
                        </div>
                        <div className="services-card-content">
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Services;
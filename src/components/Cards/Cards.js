import React from 'react'
import './Cards.scss'
import img1 from '../../images/asphalt.jpg'
import img2 from '../../images/action-tunnel.jpg'
import img3 from '../../images/sign-pen.jpg'

const Cards = () => {

    return (
        <div className="cards-container container">
            <div className="card">
                <div className="card-title">
                    TRANSPORT MIĘDZYNARODOWY
                </div>
                <div className="card-img">
                    <img src={img1} alt={"Card first"}/>
                </div>
                <div className="card-content">
                    Naszymi głównymi kierunkami są: Włochy, Austria, Niemcy, Holandia, Czechy, Słowacja.
                </div>
            </div>

            <div className="card">
                <div className="card-title">
                    ŁADUNKI
                </div>
                <div className="card-img">
                    <img src={img2} alt={"Card second"}/>
                </div>
                <div className="card-content">
                    Przewozimy: materiały sypkie, odpady, big-bagi itp. Ładunki masowe na ruchome podłogi.
                </div>
            </div>

            <div className="card">
                <div className="card-title">
                    CERTYFIKATY
                </div>
                <div className="card-img">
                    <img src={img3} alt={"Card second"}/>
                </div>
                <div className="card-content">
                    Posiadamy szereg zezwoleń na przewóz odpadów w kraju i za granicą.
                </div>
            </div>
        </div>
    )
}

export default Cards;
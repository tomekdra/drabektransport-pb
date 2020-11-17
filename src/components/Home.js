import React from 'react'
import Cards from "./Cards/Cards";
import Header from "./Header/Header";

const Home = () => {


    return (
        <div className={'home-container'}>
            <Header />
            <Cards />
        </div>
    )
}

export default Home;
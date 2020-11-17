import React from 'react'
import './PageNotFount.scss'

const PageNotFound = () => {

    return (
        <div className={"pageNotFound"}>
            <h1>Przepraszamy</h1>
            <h2>Błąd 404</h2>
            <i className={"icon-attention"} style={{fontSize: '5rem'}} />
            <p>Podana strona nie istnieje :(</p>
        </div>

    )
}

export default PageNotFound;
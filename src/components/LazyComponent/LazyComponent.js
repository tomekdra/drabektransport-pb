import React from "react";
import './LazyComponent.scss'

const LazyComponent = () => {
    return (
        <div className={"lazy-container"}>
            <div className="loader" />
        </div>

    )
}

export default LazyComponent;
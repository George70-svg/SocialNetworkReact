import preloaderImg from "./preloader.svg";
import React from "react";

const Preloader = (props) => {
    return (
        <img className="preloader" src={preloaderImg} alt="Preloader"/>
    )
}

export default Preloader
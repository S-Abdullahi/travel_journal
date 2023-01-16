import React from "react";
import Logo from '../images/logo.svg'

export default function Nav(){
    return(
        <nav>
            <img src={Logo} alt="travel journal logo"/>
            <h2>my travel journal</h2>
        </nav>
    )
}
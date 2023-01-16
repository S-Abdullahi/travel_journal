import React from "react";
import MountFiji from '../images/mountfiji.svg'
import LocationIcon from '../images/location_icon.svg'

export default function Card(){
    return (
        <section className="card">
            <div className="card__image-con">
                <img src={MountFiji} className="card__image"/>
            </div>
            <div className="card__detail">
                <div className="card__head">
                    <img src={LocationIcon}/>
                    <span className="card__country">Japan</span>
                    <span className="card__link"><a href="#">View on Google Maps</a></span>
                </div>
                <h3 className="card__title">Mount Fuji</h3>
                <p className="card__date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card__description">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </section>
    )
}
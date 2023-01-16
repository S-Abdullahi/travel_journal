import React from "react";
import MountFiji from '../images/mountfiji.svg'
import LocationIcon from '../images/location_icon.svg'

export default function Card(props){
    console.log(props)
    return (
        <section className="card">
            <div className="card__image-con">
                <img src={props.imageUrl} className="card__image"/>
            </div>
            <div className="card__detail">
                <div className="card__head">
                    <img src={LocationIcon}/>
                    <span className="card__country">{props.location}</span>
                    <span className="card__link"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h3 className="card__title">{props.title}</h3>
                <p className="card__date">{props.startDate} - {props.endDate}</p>
                <p className="card__description">   {props.description}</p>
            </div>
        </section>
    )
}
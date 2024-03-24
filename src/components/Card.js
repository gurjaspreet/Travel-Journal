import React from "react";
import pin from "../assets/map-pin.png";
import "../App.css";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} width="150px" alt={props.title} />
            <div className="card-content">
                <div className="card-location-content">
                    <p className="location"> <img src={pin} width="20px" /> {props.location}</p>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="card-dates">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
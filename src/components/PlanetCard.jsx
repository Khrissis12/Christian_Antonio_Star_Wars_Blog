import React from "react"

const PlanetCard = ({ name, population, residents, gravity, url, image }) => {
    
    return (
        <div className="card mb-4 shadow-sm border-light rounded">
            <img
                src={image}
                className="card-img-top"
                alt={url}
            />
            <div className="card-body">
                <a className="card-title char-name">{name}</a>
                <p className="card-text">
                    <strong>Population</strong> {population}
                </p>
                <p className="card-text">
                    <strong>residents</strong> {residents}
                </p>
                <p className="card-text">
                    <strong>Gravity</strong> {gravity}
                </p>
            </div>
        </div>
    );
};

export default PlanetCard;
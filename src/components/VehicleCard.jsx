import React from "react"

const VehicleCard = ({ name, cargo_capacity, cost_in_credits, passengers, url, image }) => {
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
                    <strong>Passengers:</strong> {passengers}
                </p>
                <p className="card-text">
                    <strong>Cost:</strong> {cost_in_credits}
                </p>
                <p className="card-text">
                    <strong>Cargo Capacity:</strong> {cargo_capacity}
                </p>
            </div>
        </div>
    );
};

export default VehicleCard;
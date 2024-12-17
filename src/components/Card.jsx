import React from "react"
import { NavLink } from "react-router-dom";

const Card = ({ name, url, image, onAddToFavorites, uid  }) => {
    return (
        <div className="card mb-4 shadow-sm border-light rounded">
            <img
                src={image} 
                className="card-img char-img"
                alt={url}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <a className="card-title char-name">{name}</a>
                <NavLink to="/characters/:uid" className="btn btn-primary">See Details</NavLink>
                <button 
                    className="btn btn-warning"
                    onClick={onAddToFavorites}
                >
                    Add to Favorites
                </button>
            </div>
        </div>
    );
};

export default Card;
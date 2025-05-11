import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="card h-100 shadow-sm border-0">
            <img
                src={image}
                className="card-img-top"
                alt={title}
                style={{ height: '180px', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text text-muted">{description}</p>
            </div>
            <div className="card-footer bg-white border-0">
                <button className="btn btn-outline-primary w-100">
                    Reservar
                </button>
            </div>
        </div>
    );
};

export default Card; 
import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron bg-success bg-gradient py-5 mb-4 text-white">
            <div className="container text-center">
                <h1 className="display-5 fw-bold">¡Aventuras Inolvidables!</h1>
                <p className="lead opacity-75">Descubre los mejores destinos con guías locales</p>
                <button className="btn btn-light btn-lg mt-3 px-4 fw-semibold">
                    Ver Catálogo
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;
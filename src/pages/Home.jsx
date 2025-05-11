import React from "react";
import Navbar from "../js/components/Navbar/Navbar";
import Jumbotron from "../js/components/Jumbotron/Jumbotron";
import Card from "../js/components/Card/Card";
import Footer from "../js/components/Footer/Footer";

const Home = () => {
    const tours = [
        {
            image: "https://picsum.photos/id/10/600/400",
            title: "Tour Aventura",
            description: "Experiencias extremas en la naturaleza"
        },
        {
            image: "https://picsum.photos/id/11/600/400",
            title: "Tour Cultural",
            description: "Conoce tradiciones ancestrales"
        },
        {
            image: "https://picsum.photos/id/12/600/400",
            title: "Tour Playa",
            description: "Relájate en paraísos tropicales"
        },
        {
            image: "https://picsum.photos/id/13/600/400",
            title: "Tour Montaña",
            description: "Escaladas inolvidables"
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <Jumbotron />
            <div className="container my-4 flex-grow-1">
                <h2 className="text-center mb-4 fw-bold">Nuestros Tours</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {tours.map((tour, index) => (
                        <div className="col" key={index}>
                            <Card {...tour} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home; 
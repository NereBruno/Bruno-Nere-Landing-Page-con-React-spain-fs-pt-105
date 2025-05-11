import React from "react";
import Jumbotron from "../js/components/Jumbotron";
import Card from "../js/components/Card";

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <Card 
              image="https://via.placeholder.com/500x325"
              title="Card One"
              text="Este es el contenido de la primera tarjeta."
              buttonLabel="Find Out More!" 
            />
          </div>
          <div className="col-md-3">
            <Card 
              image="https://via.placeholder.com/500x325"
              title="Card Two"
              text="Texto personalizado para la segunda tarjeta."
              buttonLabel="Learn More" 
            />
          </div>
          <div className="col-md-3">
            <Card 
              image="https://via.placeholder.com/500x325"
              title="Card Three"
              text="Contenido de la tercera tarjeta con texto distinto."
              buttonLabel="Discover" 
            />
          </div>
          <div className="col-md-3">
            <Card 
              image="https://via.placeholder.com/500x325"
              title="Card Four"
              text="Cuarta tarjeta con su propio contenido."
              buttonLabel="Explore" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

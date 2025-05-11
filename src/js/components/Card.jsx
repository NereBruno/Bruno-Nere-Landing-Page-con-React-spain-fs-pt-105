import React from "react";

function Card(props) {
  return (
    <div className="card text-center">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
      </div>
    </div>
  );
}

export default Card;

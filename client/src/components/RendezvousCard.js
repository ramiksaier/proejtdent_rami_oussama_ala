import React from "react";

const RendezvousCard = ({ el, docteur }) => {
  return (
    <div className="col-md-4">
      <div className="testimonial">
        <div>
          <h1>{el.dateRen}</h1>
          <h2>{el.jour}</h2>
          <h2>{el.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default RendezvousCard;

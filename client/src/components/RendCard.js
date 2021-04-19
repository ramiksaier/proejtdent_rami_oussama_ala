import React from "react";

const RendCard = ({ el }) => {
  return (
    <div className="col-md-4">
      <div className="testimonial">
        <div>
          <h1>{el.firstName_doc}</h1>
          <h1>{el.lastName_doc}</h1>
          <h1>{el.dateRen}</h1>
          <h2>{el.jour}</h2>
          <h2>{el.description}</h2>
        </div>
        
      </div>
    </div>
  );
};

export default RendCard;

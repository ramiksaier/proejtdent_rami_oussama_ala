import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle_edit } from "../REduxJS/ACTION/Edit";
import { getonerendezvous } from "../REduxJS/ACTION/Rendezvous";

const RendCard = ({ el }) => {
  const dispatch = useDispatch();
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

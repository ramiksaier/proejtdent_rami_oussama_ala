import React from "react";
import { useDispatch } from "react-redux";
import {
  Deleterendezvous,
  editrendezvous,
  getonerendezvous,
} from "../REduxJS/ACTION/Rendezvous";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import { toggle_edit } from "../REduxJS/ACTION/Edit";

const RendezvousCard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4">
      <div className="testimonial">
        <div>
          <h1>{el.firstName_pat}</h1>
          <h1>{el.lastName_pat}</h1>
          <h1>{el.dateRen}</h1>
          <h2>{el.jour}</h2>
          <h2>{el.description}</h2>

          <button onClick={() => dispatch(Deleterendezvous(el._id))}>
            delete{" "}
          </button>
          <Link to={`/editrendezvoys/${el._id}`}>
            <button
              color="facebook"
              onClick={() => {
                dispatch(getonerendezvous(el._id));
                dispatch(toggle_edit());
              }}
            >
              Edit Profile
            </button>
          </Link>
          <Edit el={el} />
        </div>
      </div>
    </div>
  );
};

export default RendezvousCard;

import React from "react";
import { useDispatch } from "react-redux";
import { toggle_edit } from "../REduxJS/ACTION/Edit";
import { Link } from "react-router-dom";

import { getonepatient } from "../REduxJS/ACTION/Patient";

const ProfilePatient = ({ location }) => {
  const user = location.state.user;
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{user.firstName}</h1>
      <h2>{user.lastName}</h2>
      <Link to="/editpatient/:id">
        <button
          onClick={() => {
            dispatch(getonepatient(user._id));
            dispatch(toggle_edit());
          }}
        >
          modifier
        </button>
      </Link>
    </div>
  );
};

export default ProfilePatient;

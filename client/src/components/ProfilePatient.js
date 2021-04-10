import React from "react";

const ProfilePatient = ({ location }) => {
  const user = location.state.user;
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h2>{user.lastName}</h2>
      <button>modifier</button>
    </div>
  );
};

export default ProfilePatient;

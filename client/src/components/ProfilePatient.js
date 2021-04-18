import React from "react";
import { useDispatch } from "react-redux";
import { toggle_edit } from "../REduxJS/ACTION/Edit";
import { Button, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getonepatient } from "../REduxJS/ACTION/Patient";
import NavbarPa from "./NavbarPa";

const ProfilePatient = ({ location }) => {
  //const user = location.state.user;
  const user = useSelector((state) => state.patientReducer.patient);

  const dispatch = useDispatch();

  return (
    <div className="backround">
      <NavbarPa/>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                {!user.image ? (
                  <img
                    src="https://image.freepik.com/free-vector/doctor-icon-avatar-white_136162-58.jpg"
                    alt="img"
                    style={{
                      width: "400px",
                      height: "400px",
                      marginRight: "200px",
                    }}
                  />
                ) : (
                  <img src={user.images} alt="img" />
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>
                  {user.firstName} <span></span>
                  {user.lastName}
                </h5>
                <h6>{user.sex}</h6>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#home"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      href="#profile"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <Link to={`/editpatient/${user._id}`}>
                <Button
                  color="facebook"
                  onClick={() => {
                    dispatch(getonepatient(user._id));
                    dispatch(toggle_edit());
                  }}
                >
                  <Icon name="edit" /> Edit Profile
                </Button>
              </Link>
              <Link
                to={{
                  pathname: `/ourdoc/${user._id}`,
                  state: { patient: user },
                }}
              >
                <Button color="facebook">
                  <Icon name="edit" /> looking for doctor???
                </Button>
              </Link>
              <br></br>

              <br></br>
              <Link to="/rdvs">
                <Button color="twitter">
                  <Icon name="calendar check" /> My RDVs
                </Button>
              </Link>
              <br></br>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.firstName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.Phone}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Age</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.age}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>adress</label>
                    </div>
                    <div className="col-md-6">
                      <p>{user.adress}</p>

                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePatient;

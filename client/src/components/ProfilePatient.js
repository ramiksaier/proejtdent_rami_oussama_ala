import React from "react";
import { useDispatch } from "react-redux";
import { toggle_edit } from "../REduxJS/ACTION/Edit";
import { Button, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getonepatient } from "../REduxJS/ACTION/Patient";
import NavbarPa from "./NavbarPa";

const ProfilePatient = ({ location }) => {
  // const user = location.state.user;
  const user = useSelector((state) => state.patientReducer.patient);

  const dispatch = useDispatch();

  return (
    <div className="backround">
      <NavbarPa />
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfng6A-DLxulu8eLWScu9tkL_kpI5KSLkF6g&usqp=CAU"
                  alt="img"
                  style={{
                    width: "200px",
                    height: "200px",
                    marginLeft: "-20px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5 className="h2title">
                  {user.firstName} <span></span>
                  {user.lastName}
                </h5>
                <h6 className=" h2title">{user.age} ans </h6>
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
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <Link to={`/editpatient/${user._id}`}>
                <Button
                  className="bt"
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
                <Button className="bt" color="facebook">
                  <Icon name="edit" /> looking for doctor???
                </Button>
              </Link>
              <br></br>

              <br></br>
              <Link
                to={{
                  pathname: `/myrend/${user._id}`,
                  state: { user: user },
                }}
              >
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
                      <label className=" h2title">Name</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">{user.firstName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">Email</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">{user.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">{user.Phone}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">Age</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">{user.age}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">adress</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">{user.adress}</p>

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

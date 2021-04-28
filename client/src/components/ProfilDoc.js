import React from "react";
import { useDispatch } from "react-redux";
import { getonedoctor } from "../REduxJS/ACTION/Docteur";

import { Button, Icon } from "semantic-ui-react";
import "./Profildoctor.css";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { toggle_edit } from "../REduxJS/ACTION/Edit";
import Navbar from "./Navbar";
const ProfilDoctor = () => {
  //const dd = location.state.user;
  const user = useSelector((state) => state.doctorReducer.doctor);

  const dispatch = useDispatch();
  return (
    <div className="backround">
      <Navbar />
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://image.freepik.com/free-vector/doctor-icon-avatar-white_136162-58.jpg"
                  alt="imgaag"
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
                <h5 className=" h2title">
                  {user.firstName}
                  {user.lastName}
                </h5>
                <h6 className=" h2title">{user.qualification}</h6>
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
              <Link to={`/edit/:id`}>
                <Button
                  className="bt"
                  color="facebook"
                  onClick={() => {
                    dispatch(getonedoctor(user._id));
                    dispatch(toggle_edit());
                  }}
                >
                  <Icon name="edit" /> Edit Profile
                </Button>
              </Link>
              <br></br>

              <br></br>
              <Link
                to={{
                  pathname: `/rdvs/${user._id}`,
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
            <div className="col-md-4">
              <div className="profile-work">
                <p className=" h2title">Actes et soins</p>
                <a href="#">Prothèse dentaire</a>
                <br />
                <a href="#">Détartrage sous gingivale</a>
                <br />
                <a href>Chirurgie endodontique </a>
                <br />
                <a href>Blanchiment dentaire </a>
              </div>
            </div>
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
                      <label className=" h2title">Cabinet Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">{user.PhoneCab}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">{user.qualification}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">50 D/hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">Years of experiences</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">20</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label className=" h2title">Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p className=" h2title">6 months</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className=" h2title">Your Bio</label>
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
export default ProfilDoctor;

import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, TextArea, Button, Select, Icon } from "semantic-ui-react";
import { editdocteur, postdoctor } from "../REduxJS/ACTION/Docteur";
import { getonedoctor } from "../REduxJS/ACTION/Docteur";

import "./Profildoctor.css";
const Inscription = () => {
  const [user, setuser] = useState({});
  const userReducer = useSelector((state) => state.doctorReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setuser(userReducer)
      : setuser({
          images: "",
          firstName: "",
          lastName: "",
          Phone: 0,
          PhoneCab: 0,
          email: "",
          age: "",
          password: "",
          qualification: "",
          localisation: "",
          emplacementEducation: "",
        });
  }, [userReducer]);
  const handeldata = () => {
    edit
      ? dispatch(editdocteur(userReducer._id, user))
      : dispatch(postdoctor(user));
  };
  const handelchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            {/* Navbar Brand */}
            <a href="#" className="navbar-brand">
              <h1>Welcome to espace Doctor</h1>
            </a>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          {/* For Demo Purpose */} 
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <div className="rami">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg"
                alt
                className="img-fluid mb-3 d-none d-md-block"
                style={{
                  width: "450px",
                  height: "400px",
                  marginRight: "200px",
                }}
              />
            </div>
          </div>
          <Form>
            <Form.Group unstackable widths={2}>
              <Form.Input
                label="First name:"
                placeholder="First name"
                icon="users"
                name="firstName"
                value={user.firstName}
                onChange={handelchange}
                iconPosition="left"
                required
              />
              <Form.Input
                label="Last name:"
                placeholder="Last name"
                icon="users"
                name="lastName"
                value={user.lastName}
                onChange={handelchange}
                iconPosition="left"
                required
              />
            </Form.Group>
            <Form.Group widths={2}>
              <Form.Input
                type="email"
                label="Email:"
                placeholder="xxxx@.com"
                icon="mail"
                name="email"
                value={user.email}
                onChange={handelchange}
                iconPosition="left"
                required
              />
              <Form.Input
                label="age:"
                placeholder="Votre age"
                value={user.age}
                onChange={handelchange}
                name="age"
              />
            </Form.Group>
            <Form.Group unstackable widths={2}>
              <Form.Input
                label="Telephone Personlle:"
                placeholder="Telephone Personlle"
                icon="phone"
                name="Phone"
                value={user.Phone}
                onChange={handelchange}
                iconPosition="left"
                type="tel"
              />
              <Form.Input
                label="Telephone de Cabinet:"
                placeholder="your Cabinet phone"
                icon="phone"
                name="PhoneCab"
                value={user.PhoneCab}
                onChange={handelchange}
                iconPosition="left"
              />
            </Form.Group>
            <Form.Group unstackable widths={2}>
              <Form.Input
                label="Mot de Passe:"
                placeholder="Mot de passe"
                icon="lock"
                name="password"
                value={user.Password}
                onChange={handelchange}
                iconPosition="left"
                type="password"
              />
              <Form.Input
                label="Canfirmation de Mot de passe:"
                placeholder="Canfirmation de Mot de passe"
                icon="lock"
                value="conf"
                iconPosition="left"
                type="password"
              />
            </Form.Group>
            <Form.Group unstackable widths={2}>
              <Form.Field
                control={TextArea}
                label="Qalification:"
                name="qualification"
                value={user.qualification}
                onChange={handelchange}
                placeholder="Qalification.."
              />
              <Form.Field
                control={TextArea}
                label="Education:"
                placeholder="Tell us more about you..."
                name="emplacementEducation"
                value={user.emplacementEducation}
                onChange={handelchange}
              />
            </Form.Group>
            <Form.Field />
            <div className="file">
              <Form.Group unstackable widths={2}>
                <input
                  type="file"
                  name="images"
                  value={user.images}
                  onChange={handelchange}
                />
              </Form.Group>
            </div>
            <div className="localisation">
              <Form.Field>
                <select
                  id="localisation"
                  value={user.localisation}
                  onChange={handelchange}
                  name="localisation"
                >
                  <option value="tunis ">tunis</option>
                  <option value="Nabeul">Nabeul</option>
                  <option value="Manouba">Manouba</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Monastir">Mounastir</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Beja">Beja</option>
                  <option value="Kairaoun">Kairaoune</option>
                  <option value="Gbelli">Gbelli</option>
                  <option value="Kef">Kef</option>
                  <option value="Jendouba">Jendouba</option>
                  <option value="Benarous">BenArous</option>
                  <option value="mahdia">Mahdia</option>
                  <option value="Medenin">Medenin</option>
                  <option value="sidibouzid">Sidi bouzid</option>
                  <option value="gafsa">gafsa</option>

                  <option value="tunis" selected>
                    Tunis
                  </option>
                </select>
              </Form.Field>
            </div>
          </Form>
          <div className="enregister">
            <Link to={{
                  pathname: `/profiledocteur/${user._id}`,
                  state: { user: user },
                }}
              > <Button negative onClick={handeldata}>
                {edit ? "edit" : "save"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inscription;

import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import {
  editpatient,
  postpatient,
  videErrors,
} from "../REduxJS/ACTION/Patient";
import Errors from "./Errors";
import "./Profildoctor.css";
const InscriptionPatient = ({ history }) => {
  const [user, setuser] = useState({});
  const userReducer = useSelector((state) => state.patientReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const errors = useSelector((state) => state.patientReducer.errors);

  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setuser(userReducer)
      : setuser({
          image: "",
          firstName: "",
          lastName: "",
          sex: "",
          Phone: 0,
          email: "",
          age: 0,
          password: "",
          adress: "",
        });
    return () => {
      dispatch(videErrors());
    };
  }, [userReducer]);
  const handeldata = () => {
    edit
      ? dispatch(editpatient(userReducer._id, user))
      : dispatch(postpatient(user, history));
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
              <h1>Welcome to espace Patient</h1>
            </a>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="row py-5 mt-4 align-items-center">
          {/* For Demo Purpose */}
          <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <div className="rami">
              {errors.length > 0
                ? errors.map((el) => <Errors error={el} />)
                : null}
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
                label="Email:"
                placeholder="xxxx@.com"
                icon="mail"
                name="email"
                value={user.email}
                onChange={handelchange}
                iconPosition="left"
                type="email"
              />
              <div classnme="sexp">
                <Form.Field>
                  <select
                    id="sex"
                    value={user.sex}
                    onChange={handelchange}
                    name="sex"
                  >
                    <option value="femelle">femelle</option>

                    <option value="male" selected>
                      Male
                    </option>
                  </select>
                </Form.Field>
              </div>
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
                label="Age:"
                placeholder="Votre Age"
                name="age"
                value={user.age}
                onChange={handelchange}
                type="number"
              />
            </Form.Group>
            <Form.Group unstackable widths={2}>
              <Form.Input
                label="Mot de Passe:"
                placeholder="Mot de passe"
                icon="lock"
                name="password"
                value={user.password}
                onChange={handelchange}
                iconPosition="left"
                type="password"
              />
              <Form.Input
                label="Canfirmation de Mot de passe:"
                placeholder="Canfirmation de Mot de passe"
                icon="lock"
                iconPosition="left"
                type="password"
              />
            </Form.Group>
            <div className="file">
              <Form.Group unstackable widths={2}>
                <input
                  type="file"
                  name="image"
                  value={user.image}
                  onChange={handelchange}
                />
              </Form.Group>
            </div>
            <div className="localisation">
              <Form.Field>
                <select
                  id="localisation"
                  value={user.adress}
                  onChange={handelchange}
                  name="adress"
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
            <Link
              to={{
                pathname: `/detailPatient/${user._id}`,
                state: { user: user },
              }}
            >
              <Button negative onClick={handeldata}>
                {edit ? "edit" : "save"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InscriptionPatient;

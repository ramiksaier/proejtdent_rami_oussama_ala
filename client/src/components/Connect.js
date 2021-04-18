import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Input, Button, Checkbox } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { toggle_add } from "../REduxJS/ACTION/Edit";
import { login, videErrors } from "../REduxJS/ACTION/Docteur";
import Errors from "./Errors";
import { loginP } from "../REduxJS/ACTION/Patient";

const Connect = (history) => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({});

  const roleuser = useSelector((state) => state.roleReducer.role);
  const errors = useSelector((state) => state.doctorReducer.errors);
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);

  return (
    <div>
      <div className="iconlogo">
        {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}

        <Button icon="sign-in" />
      </div>
      <form>
        <h1 className="login">Login</h1>
        <div className="icon">
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </div>
        <div className="champ">
          <Input
            iconPosition="left"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          >
            <Icon name="envelope" />
            <input />
          </Input>
          <br></br>
          <Input
            iconPosition="left"
            name="password"
            onChange={handleChange}
            placeholder="Mot de passe"
          >
            <Icon name="lock" />
            <input />
          </Input>
          <br></br>
        </div>
        <div className="btnc">
          {roleuser === "doctor" ? (
            <Link to="/profiledocteur">
              <Button
                className="btnc"
                color="facebook"
                onClick={() => dispatch(login(user, history))}
              >
                <Icon name="redo alternate" /> Connexion
              </Button>
            </Link>
          ) : (
            <Link to="/detailPatient">
              <Button
                className="btnc"
                color="facebook"
                onClick={() => dispatch(loginP(user, history))}
              >
                <Icon name="redo alternate" /> Connexion
              </Button>
            </Link>
          )}
        </div>
        <Checkbox className="chek" label="Remenber me?" />
        <div className="c1">
          {roleuser === "doctor" ? (
            <Link to="/adddoctor">
              <a
                href="Don't have an account? Sign Up"
                onClick={() => dispatch(toggle_add())}
              >
                "Don't have an account? Sign Up"
              </a>
            </Link>
          ) : (
            <Link to="/addpatient">
              <p>
                <a
                  href="Don't have an account? Sign Up"
                  onClick={() => dispatch(toggle_add())}
                >
                  "Don't have an account? Sign Up"
                </a>
              </p>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
};
export default Connect;

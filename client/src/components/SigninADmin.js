import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../REduxJS/ACTION/Admin";
import { Link } from "react-router-dom";

import { videErrors } from "../REduxJS/ACTION/Admin";

import { Icon, Input, Button, Checkbox } from "semantic-ui-react";
import Errors from "./Errors";

const SigninADmin = ({ history }) => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({});

  const errors = useSelector((state) => state.adminReducer.errors);
  const isAuth = useSelector((state) => state.adminReducer.isAuth);

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);
  {
  }
  return (
    <div>
      <form>
        <h1 className="login">Login</h1>

        <div className="icon">
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </div>
        <h3 className="login">
          {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
        </h3>
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
          <Link to="/espaceadmin">
            <Button
              className="btnc"
              color="facebook"
              onClick={() => dispatch(loginAdmin(user, history))}
            ></Button>
          </Link>
          <Icon name="redo alternate" /> Connexion
        </div>
      </form>
    </div>
  );
};

export default SigninADmin;

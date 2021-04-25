import { Route, Redirect } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const PrivateRouteDocteur = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.doctorReducer.isAuth);

  if (isAuth) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/connectdocteur" />;
};
export default PrivateRouteDocteur;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutePati = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.patientReducer.isAuth);

  if (isAuth) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/connectpatient" />;
};

export default PrivateRoutePati;

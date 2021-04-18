import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteAdmin = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.adminReducer.isAuth);

  if (isAuth) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/admin" />;
};

export default PrivateRouteAdmin;

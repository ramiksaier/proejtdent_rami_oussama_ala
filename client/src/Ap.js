import React from "react";
import { Route, Switch } from "react-router";
import Detaildoc from "./components/Detaildoc";
import Acceil from "./components/Acceil";
import Error from "./components/Error";
import Connect from "./components/Connect";
const Ap = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Acceil} />
        <Route path="/detaildocteur" component={Detaildoc} />
        <Route path="/connectdocteur" component={Connect} />
        <Route path="/connectpatient" component={Connect} />


        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
};

export default Ap;

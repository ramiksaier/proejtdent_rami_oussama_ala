import React from "react";
import { Route, Switch } from "react-router";
import Detaildoc from "./components/Detaildoc";
import Acceil from "./components/Acceil";
import Error from "./components/Error";
import Connect from "./components/Connect";
import Inscription from "./components/Inscription";
import ProfilDoc from "./components/ProfilDoc";
import InscriptionPatient from "./components/insrciptionPatient";
import ProfilePatient from "./components/ProfilePatient";
import Rendevous from "./components/ADDRendevous";
import Admin from "./components/Admin";
import ListRendezvous from "./components/ListRendezvous";
import PrivateRoute from "./components/Privateroute";
import Doctors from "./components/Doctors";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "./REduxJS/ACTION/Docteur";
import Signin from "./components/Signin";
import { currentPatient } from "./REduxJS/ACTION/Patient";
import SigninADmin from "./components/SigninADmin";
import { currentadmin } from "./REduxJS/ACTION/Admin";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import PrivateroutPati from "./components/PrivateroutPati";
import PrivateRoutePati from "./components/PrivateroutPati";
import ListRendPa from "./components/ListRendPa";
const Ap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(currentPatient());
    dispatch(currentadmin());
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Acceil} />
        <Route path="/detaildocteur/:id" component={Detaildoc} />
        <Route path="/connectdocteur" component={Connect} />
        <Route path="/connectpatient" component={Connect} />
        <Route path={["/adddoctor", "/edit/:id"]} component={Inscription} />
        <Route
          path={["/addpatient", "/editpatient/:id"]}
          component={InscriptionPatient}
        />
        <PrivateRoute path="/profiledocteur" component={ProfilDoc} />
        <PrivateroutPati path="/detailPatient" component={ProfilePatient} />
        <PrivateroutPati
          path={["/prendrerdv/:id", "/editrendezvoys/:id"]}
          component={Rendevous}
        />
        <Route path="/ourdoc" component={Doctors} />

        <Route path="/rdvs/:id" component={ListRendezvous} />

        <Route path="/admin" component={SigninADmin} />
        <Route path="/signin" component={Signin} />
        <PrivateRouteAdmin path="/espaceadmin" component={Admin} />
        <Route path="/myrend/:id" component={ListRendPa} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
};

export default Ap;

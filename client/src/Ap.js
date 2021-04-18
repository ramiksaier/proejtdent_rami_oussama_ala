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

const Ap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(currentPatient());
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
        <Route path="/detailPatient" component={ProfilePatient} />
        <PrivateRoute
          path={["/prendrerdv/:id", "/editrendezvoys/:id"]}
          component={Rendevous}
        />
        <Route path="/ourdoc" component={Doctors} />

        <Route path="/rdvs/:id" component={ListRendezvous} />

        <Route path="/admin" component={Admin} />
        <Route path="/signin" component={Signin} />

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
};

export default Ap;

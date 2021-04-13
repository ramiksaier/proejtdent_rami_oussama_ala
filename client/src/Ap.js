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
import Rendevous from "./components/Rendevous";
import Allrdvs from "./components/Allrdvs";
import Admin from "./components/Admin";
const Ap = () => {
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
        <Route path="/profiledocteur/:id" component={ProfilDoc} />
        <Route path="/detailPatient/:id" component={ProfilePatient} />
        <Route path={["/prendrerdv/:id","/editrendezvoys/:id"]} component={Rendevous} />
        <Route path="/rdvs" component={Allrdvs} />
        
        <Route path="/admin" component={Admin} />

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
};

export default Ap;

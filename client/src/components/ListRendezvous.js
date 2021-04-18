import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getonerendezvous, getrendezvous } from "../REduxJS/ACTION/Rendezvous";
import RendezvousCard from "./RendezvousCard";
import Spiner from "./Spiner";

const ListRendezvous = ({ location }) => {
  const docteur = location.state.user;
  const dispatch = useDispatch();
  const rendezvous = useSelector(
    (state) => state.rendezvousReducer.listrendezvous
  );
  const load = useSelector((state) => state.doctorReducer.load);
  useEffect(() => {
    dispatch(getrendezvous());
  }, []);
  return (
    <div id="testimonials">
      <div className="container">
        <div>
          <div>
            <div className="section-title text-center">
              <p>
                {" "}
                <h3>
                  welcome Dr {docteur.firstName} this is your rendezvous this
                  week
                </h3>
              </p>
            </div>
            <div className="row">
              {!load ? (
                rendezvous.map((el) => <RendezvousCard el={el} key={el._id} />)
              ) : (
                <Spiner />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRendezvous;

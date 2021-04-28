import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getonerendezvous, getrendezvous } from "../REduxJS/ACTION/Rendezvous";
import RendezvousCard from "./RendezvousCard";
import Spiner from "./Spiner";
import "./Rendezvouscard.css";
import Navbar from "./Navbar";

const ListRendezvous = ({ location, history }) => {
  const docteur = location.state.user;
  const dispatch = useDispatch();
  const rendezvous = useSelector(
    (state) => state.rendezvousReducer.listrendezvous
  );
  const load = useSelector((state) => state.doctorReducer.load);
  useEffect(() => {
    dispatch(getrendezvous(docteur._id));
  }, []);
  return (
    <div>
      <Navbar />
      <div id="testimonials">
        <div className="container">
          <div>
            <div>
              <div className="title">
                <p>
                  {" "}
                  <h3 className="bigtitle">
                    welcome Dr {docteur.firstName} this is your rendezvous this
                    week
                  </h3>
                </p>
              </div>
              <img
                className="img1"
                src="https://www.dentistespecialisepourenfant.com/fr/images/dentiste-pediatrique-prevention.png"
                alt="imagedentiste"
              />
              <div className="row">
                <div className="cardoc">
                  {!load ? (
                    rendezvous.map((el) => (
                      <RendezvousCard el={el} key={el._id} />
                    ))
                  ) : (
                    <Spiner />
                  )}{" "}
                </div>
                <br />

                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        style={{
          color: "white",
          backgroundColor: "Highlight",
          marginTop: "1px",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default ListRendezvous;

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getrendezvousbypatient } from "../REduxJS/ACTION/Rendezvous";
import Spiner from "./Spiner";
import RendCard from "./RendCard";
import Navbar from "./NavbarPa";

const ListRendPa = ({ location, history }) => {
  const patient = location.state.user;
  const dispatch = useDispatch();
  const rendezvous = useSelector(
    (state) => state.rendezvousReducer.listrendezvous
  );
  const load = useSelector((state) => state.doctorReducer.load);
  useEffect(() => {
    dispatch(getrendezvousbypatient(patient._id));
  }, []);

  return (
    <div>
      <Navbar />
      <div id="testimonials">
        <div className="container">
          <div>
            <div>
              <div className="section-title text-center">
                <p>
                  {" "}
                  <h3 className="bigtitle">
                    welcome {patient.firstName} Remember your rendevous please
                  </h3>
                </p>
              </div>
              <img
                className="img1"
                src="https://www.dentistespecialisepourenfant.com/fr/images/dentiste-pediatrique-prevention.png"
                alt="imagedentiste"
              />
              <div className="row">
                <div className="cardpatien">
                  {!load ? (
                    rendezvous.map((el) => <RendCard el={el} key={el._id} />)
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

export default ListRendPa;

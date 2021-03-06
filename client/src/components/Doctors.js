import react, { useEffect, useState } from "react";
import { Icon, Input } from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import { getdoctors } from "../REduxJS/ACTION/Docteur";
import Doctorcard from "./Doctorcard";
import Spiner from "./Spiner";
import Navbar from "./NavbarPa";
const Doctors = () => {
  const dispatch = useDispatch();
  const listDocteur = useSelector((state) => state.doctorReducer.listdoctors);
  const load = useSelector((state) => state.doctorReducer.load);
  console.log(listDocteur);
  useEffect(() => {
    dispatch(getdoctors());
  }, []);
  const [inputSearch, setInputSearch] = useState("");
  const [inputSearchbyplace, setInputSearchbyplace] = useState("");

  return (
    <div>
      <Navbar />
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>OUR Docteurs</h2>
          </div>
          <div className="search">
            <Input
              icon={<Icon name="search" inverted circular link />}
              placeholder="Search by name..."
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Input
              icon={<Icon name="crosshairs" inverted circular link />}
              placeholder="Search by place..."
              onChange={(e) => setInputSearchbyplace(e.target.value)}
            />{" "}
          </div>

          <div className="row">
            {!load ? (
              listDocteur
                .filter(
                  (docteur) =>
                    docteur.firstName
                      .toUpperCase()
                      .includes(inputSearch.toUpperCase()) &&
                    docteur.localisation
                      .toUpperCase()
                      .includes(inputSearchbyplace.toUpperCase())
                )

                .map((el) => <Doctorcard el={el} key={el._id} />)
            ) : (
              <Spiner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Doctors;

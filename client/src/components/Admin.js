import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdoctors } from "../REduxJS/ACTION/Docteur";
import AdminDoctcard from "./AdminDoctcard";
import { Icon, Input } from "semantic-ui-react";

import Spiner from "./Spiner";
const Admin = () => {
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
      <div id="testimonials">
        <div className="container">
          <div className="section-title text-center">
            <h2>List of doctors </h2>
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

                .map((el) => <AdminDoctcard el={el} key={el._id} />)
            ) : (
              <Spiner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

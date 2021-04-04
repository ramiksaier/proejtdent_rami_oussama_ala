import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdoctors } from "../REduxJS/ACTION/Docteur";
import Doctorcard from "./Doctorcard";
import Spiner from "./Spiner";
const Doctors = () => {
  const dispatch = useDispatch();
  const listDocteur = useSelector((state) => state.doctorReducer.listdoctors);
  const load = useSelector((state) => state.doctorReducer.load);
  console.log(listDocteur);
  useEffect(() => {
    dispatch(getdoctors());
  }, []);
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>OUR Docteurs</h2>
        </div>

        <div className="row">
          {!load ? (
            listDocteur.map((el) => <Doctorcard el={el} key={el._id} />)
          ) : (
            <Spiner />
          )}
        </div>
      </div>
    </div>
  );
};
export default Doctors;

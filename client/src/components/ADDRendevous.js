import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { editrendezvous, postrendezvous } from "../REduxJS/ACTION/Rendezvous";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar, useDateInput } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import doctorReducer from "../REduxJS/reducers/Docteur";
import "./Rendezvous.css";
import Navbar from "./NavbarPa";

const Rendezvous = ({ location }) => {
  const docteur = location.state.el;
  //const docteur = useSelector((state) => state.doctorReducer.doctor);

  const Patient = useSelector((state) => state.patientReducer.patient);

  const [date, setDate] = useState();
  const inputProps = useDateInput({
    date,
    format: "yyyy-MM-dd",
    locale: enGB,
    onDateChange: setDate,
  });

  const [user, setuser] = useState({});
  const rendezvousReducer = useSelector(
    (state) => state.rendezvousReducer.rendezvous
  );
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setuser(rendezvousReducer)
      : setuser({
          id_doc: docteur._id,
          id_pat: Patient._id,
          firstName_doc: docteur.firstName,
          lastName_doc: docteur.lastName,
          firstName_pat: Patient.firstName,
          lastName_pat: Patient.lastName,
          jour: "",
          dateRen: "",
          description: "",
        });
  }, [rendezvousReducer]);
  const handeldata = () => {
    edit
      ? dispatch(editrendezvous(rendezvousReducer._id, user))
      : dispatch(postrendezvous(user));
  };
  const handelchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <h1 className="bigtitle">
        {" "}
        welcome, <br></br> please choose Rendezvous with <br></br> Dr{" "}
        {docteur.firstName} {docteur.lastName}
      </h1>
      <img
        className="img1"
        src="https://www.dentistespecialisepourenfant.com/fr/images/dentiste-pediatrique-prevention.png"
        alt="imagedentiste"
      />
      <div className="rend">
        <div className="tim">
          <DatePickerCalendar
            date={date}
            onDateChange={setDate}
            locale={enGB}
          />
        </div>
        <div>
          <p classename="inputtext">
            <h4 className="h2title">
              The selected date is : <span></span>
              {date && format(date, "dd MMM yyyy", { locale: enGB })}
            </h4>
            <br />{" "}
            <h4 className="h2title">
              to confirm, please reteap Date manually * :
            </h4>
          </p>
          <input
            className="inputtext"
            placeholder="jj/mm/aaaa"
            value={user.jour}
            name="jour"
            onChange={handelchange}
          />
          <h4 className="h2title">choose your time * : </h4>
          <Form.Field>
            <select
              className="inputtext"
              id="localisation"
              value={user.dateRen}
              onChange={handelchange}
              name="dateRen"
            >
              <option className="h2title" value="09:00 ">
                09:00 to 10:00
              </option>
              <option className="h2title" value="10:00">
                10:00 to 11:00
              </option>
              <option className="h2title" value="11:00">
                11:00 to 12:00
              </option>
              <option className="h2title" value="14:00">
                14:00 to 15:00
              </option>
              <option className="h2title" value="15:00">
                15:00 to 16:00
              </option>
              <option className="h2title" value="16:00">
                16:00 to 17:00
              </option>
              <option className="h2title" value="17:00">
                17:00 to 18:00
              </option>

              <option className="h2title" value="tunis" selected>
                08:00 to 09:00
              </option>
            </select>
          </Form.Field>
          <h4 className="h2title">Description writing by doctor : </h4>
          <Form.Field
            readonly="readonly"
            control={TextArea}
            className="inputtext"
            label="Description by doctor "
            name="description"
            value={user.description}
            onChange={handelchange}
          />
          <Button onClick={handeldata} className="btnfinal">
            <Link
              to={{
                pathname: `/detailPatient/${user._id}`,
                state: { user: user },
                state: { docteur: docteur },
              }}
            >
              {edit ? "edit" : "save"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Rendezvous;
